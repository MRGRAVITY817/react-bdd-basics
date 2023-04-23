import { Given } from "@cucumber/cucumber"

Given(/^I am on the "([^"]*)" page$/, async () => {
  console.log("I am on the home page") // just to check if regex pattern is matched
  await global.page.goto("http://localhost:3000/")
})
