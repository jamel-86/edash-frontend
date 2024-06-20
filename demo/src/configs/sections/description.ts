import { html } from "lit";
import { DemoConfig } from "../types";

export const demoLovelaceDescription: DemoConfig["description"] = (
  localize
) => html`
  <p>
    ${localize("ui.panel.page-demo.config.sections.description", {
      blog_post: html`<a
        href="https://www.eelectron.com/en/prodotto/knx-bridge-with-ip-interface-and-power-supply-knx-aux-640ma/"
        target="_blank"
        >${localize("ui.panel.page-demo.config.sections.description_blog_post")}
      </a>`,
    })}
  </p>
`;
