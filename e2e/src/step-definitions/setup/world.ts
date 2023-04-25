import playwright, {
  BrowserContextOptions,
  Page,
  Browser,
  BrowserContext,
  BrowserType,
} from "playwright";
import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";

export type Screen = {
  browser: Browser;
  context: BrowserContext;
  page: Page;
};
