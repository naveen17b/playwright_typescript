import { test, expect, Locator, Page, chromium } from "@playwright/test";
import { Context } from "node:vm";


test("test to check the popup functionality", async ({ browser }) => {
   
    const context: Context = await browser.newContext({httpCredentials:{username: 'admin', password: 'admin'}});
    const page: Page = await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    // const popupWindowLocator: Locator = page.locator("button#PopUp");
    // expect(popupWindowLocator).toBeVisible();

    await page.waitForLoadState();
    await expect(page.locator("text=Congratulations")).toBeVisible();
    
    await page.waitForTimeout(3000);
})