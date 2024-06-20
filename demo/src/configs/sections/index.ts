import { DemoConfig } from "../types";
import { demoLovelaceDescription } from "./description";
import { demoEntitiesSections } from "./entities";
import { demoLovelaceSections } from "./lovelace";

export const demoSections: DemoConfig = {
  authorName: "Jamel Nacef",
  authorUrl: "https://github.com/jamel-86",
  name: "Home Dashboard",
  description: demoLovelaceDescription,
  lovelace: demoLovelaceSections,
  entities: demoEntitiesSections,
  theme: () => ({}),
};
