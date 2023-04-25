import { Given } from "@cucumber/cucumber";

Given(/^I am on the "([^"]*)" page$/, async function (pageId: string) {
  const {
    screen: { page },
  } = this;

  console.log(`I am on the ${pageId} page`); // just to check if regex pattern is matched

  await page.goto("http://localhost:3000/");
});
