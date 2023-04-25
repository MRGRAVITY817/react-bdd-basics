import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";

Before(async function (this: ScenarioWorld, scenario) {
  const contextOptions = {
    recordVideo: {
      dir: "./reports/videos/" + scenario.pickle.name,
    },
  };

  const ready = await this.init(contextOptions);
});

After(async function (this: ScenarioWorld, scenario) {
  const scenarioStatus = scenario.result?.status;
  if (scenarioStatus === "FAILED") {
    await global.page.screenshot({
      path: `./reports/screenshots/${scenario.pickle.name}.png`,
    });
  }
  await global.page.close();
});
