import { test, expect, Locator } from "@playwright/test";

test("Test tocheck the hard and soft assertions", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com");

    // //take a screen shot
    const timestamp = Date.now();
    // await page.screenshot({ path: 'screenshots/' + 'homepage' + timestamp + '.png' });


    //fullpage screenshot
    await page.screenshot({
      path: "screenshots/" + "homepage" + timestamp + ".png", fullPage:true
    });
    await page.waitForTimeout(2000);
    

});