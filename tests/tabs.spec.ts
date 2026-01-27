import { test, expect, Locator, Page, chromium } from "@playwright/test";
import { Context } from "node:vm";

/**
 * we just need a single page to work on a single tab
 * we need to trigger the new tab opening functionality
 * once the new tab is opened we need to switch the context to the new tab
 * then we can perform the operations on the new tab
 * 
 * we need to trigger the event in the newly oped tab(ie., a promise to be called)
 */
test("test to check the tab functionality", async ({ }) => {
  const browser = await chromium.launch();
  const context: Context = await browser.newContext();
  const parentpage: Page = await context.newPage();

  await parentpage.goto("https://testautomationpractice.blogspot.com/");
  // const clickOnNewTabButton: Locator =;
  // expect(clickOnNewTabButton).toBeVisible();

  //Represents the completion of an asynchronous operation
  const [childpage] = await Promise.all([
    context.waitForEvent("page"),
    parentpage.locator("button[onclick='myFunction()']").click(),
  ]);

  //switch between pages
  // const  pageTitles = [await parentpage.title(), await childpage[0].title()];
  const pages = context.pages();
  console.log("the number of pages created: " + pages.length);

  //print the title of the pages

  // console.log(
  //   "The title of the child page is: " + (await childpage.title()),
  // );
  // console.log(
  //   "The title of the parent page is: " + (await parentpage.title()),
    // );
    
    
  for (const pg of pages) {
    console.log("Page title: " + (await pg.title()));
  }

  await parentpage.waitForTimeout(3000);
})