import { test, expect, Locator, Page, chromium } from "@playwright/test";
import { Context } from "node:vm";


test("test to check the popup functionality", async ({ browser}) => {
   
    const context: Context = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    // const popupWindowLocator: Locator = page.locator("button#PopUp");
    // expect(popupWindowLocator).toBeVisible();

    //Represents the completion of an asynchronous operation
    await Promise.all([
      page.waitForEvent("popup"),
      await page.locator("button#PopUp").click()
    ]);
    
    const popupWindows = context.pages();
    console.log("the number of pages created: " , popupWindows.length);

    for (const pw of popupWindows) {
        const title = await pw.title();

        if (title.includes("Playwrihgt")) {

            await pw.locator(".getStarted_Sjon").click();
            await page.waitForTimeout(5000);
            await pw.close();
        }

        await page.waitForTimeout(3000);
    }

})