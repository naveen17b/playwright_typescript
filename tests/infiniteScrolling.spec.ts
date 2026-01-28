import { test, expect, Locator } from "@playwright/test";
import { log } from "node:console";

test("Scrolling inside dropdown", async ({ page }) => {
  test.slow(); //Marks a test as "slow". Slow test will be given triple the default timeout
  await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500");
  await page.waitForLoadState("load");
  //scrolling infinite scrolling
  let previousHeight = 0;
  while (true) {
    await page.evaluate(() => {
      window.scrollBy(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(2000);
    const lastHeight = await page.evaluate(() => {
      return document.body.scrollHeight;
    });

    console.log(previousHeight);
    console.log(lastHeight);

    if (lastHeight === previousHeight) {
      break;
    }
    previousHeight = lastHeight;
  }

  await page.waitForTimeout(3000);
});
