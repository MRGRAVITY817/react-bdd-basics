import reporter, { Options } from "cucumber-html-reporter";
import { env } from "../env/parseEnv";

const options: Options = {
  theme: "bootstrap",
  jsonFile: env("JSON_REPORT_FILE"),
  output: env("HTML_REPORT_FILE"),
  screenshotsDirectory: env("SCREENSHOT_PATH"),
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: false,
};

reporter.generate(options);
