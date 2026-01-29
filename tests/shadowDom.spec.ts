import { test, expect, Locator } from "@playwright/test";
import fs from "fs";

test("Test to download files", async ({ page }) => {
  await page.goto("https://books-pwakit.appspot.com/");
  await page.locator("input").fill("Playwright Autumation");
  await page.keyboard.press("Enter");
  await page.waitForLoadState("networkidle");
  const bookFound = await page.locator("h2.title").all();
  console.log(bookFound.length);
  expect(bookFound.length).toBe(20);
  await page.waitForTimeout(2000);
});
