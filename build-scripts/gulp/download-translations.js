import fs from "fs/promises";
import gulp from "gulp";
import path from "path";
import mapStream from "map-stream";
import transform from "gulp-json-transform";

const inDir = "translations";
const inDirFrontend = `${inDir}/frontend`;
const inDirBackend = `${inDir}/backend`;
const srcMeta = "src/translations/translationMetadata.json";
const encoding = "utf8";

function hasHtml(data) {
  return /<[a-z][\s\S]*>/i.test(data);
}

function recursiveCheckHasHtml(file, data, errors, recKey) {
  Object.keys(data).forEach(function (key) {
    if (typeof data[key] === "object") {
      const nextRecKey = recKey ? `${recKey}.${key}` : key;
      recursiveCheckHasHtml(file, data[key], errors, nextRecKey);
    } else if (hasHtml(data[key])) {
      errors.push(`HTML found in ${file.path} at key ${recKey}.${key}`);
    }
  });
}

function checkHtml() {
  const errors = [];

  return mapStream(function (file, cb) {
    const content = file.contents;
    let error;
    if (content) {
      if (hasHtml(String(content))) {
        const data = JSON.parse(String(content));
        recursiveCheckHasHtml(file, data, errors);
        if (errors.length > 0) {
          error = errors.join("\r\n");
        }
      }
    }
    cb(error, file);
  });
}

function convertBackendTranslations(data, _file) {
  const output = { component: {} };
  if (!data.component) {
    return output;
  }
  Object.keys(data.component).forEach((domain) => {
    if (!("entity_component" in data.component[domain])) {
      return;
    }
    output.component[domain] = { entity_component: {} };
    Object.keys(data.component[domain].entity_component).forEach((key) => {
      output.component[domain].entity_component[key] =
        data.component[domain].entity_component[key];
    });
  });
  return output;
}

gulp.task("convert-backend-translations", function () {
  return gulp
    .src([`${inDirBackend}/*.json`])
    .pipe(transform((data, file) => convertBackendTranslations(data, file)))
    .pipe(gulp.dest(inDirBackend));
});

gulp.task("check-translations-html", function () {
  return gulp
    .src([`${inDirFrontend}/*.json`, `${inDirBackend}/*.json`])
    .pipe(checkHtml());
});

gulp.task("check-all-files-exist", async function () {
  const file = await fs.readFile(srcMeta, { encoding });
  const meta = JSON.parse(file);
  const writings = [];
  Object.keys(meta).forEach((lang) => {
    writings.push(
      fs.writeFile(`${inDirFrontend}/${lang}.json`, JSON.stringify({}), {
        flag: "wx",
      }),
      fs.writeFile(`${inDirBackend}/${lang}.json`, JSON.stringify({}), {
        flag: "wx",
      })
    );
  });
  await Promise.allSettled(writings);
});

gulp.task("fetch-lokalise", async function () {
  // Copy local translation files to the extraction directory
  const srcDirFrontend = path.join("home/jamel/hass/translations/frontend");
  const srcDirBackend = path.join("home/jamel/hass/translations/backend");

  const copyFiles = async (srcDir, destDir) => {
    const files = await fs.readdir(srcDir);
    const copyPromises = files.map(async (file) => {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      const data = await fs.readFile(srcFile, "utf-8");
      return fs.writeFile(destFile, data);
    });
    await Promise.all(copyPromises);
  };

  await fs.mkdir(inDirFrontend, { recursive: true });
  await fs.mkdir(inDirBackend, { recursive: true });
  await copyFiles(srcDirFrontend, inDirFrontend);
  await copyFiles(srcDirBackend, inDirBackend);

  console.log("Local translations copied successfully.");
});

gulp.task(
  "download-translations",
  gulp.series(
    "fetch-lokalise",
    "convert-backend-translations",
    "check-translations-html",
    "check-all-files-exist"
  )
);
