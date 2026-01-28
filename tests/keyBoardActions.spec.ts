import { test, expect, Locator } from "@playwright/test";

test("Keyboard actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const passText = page.locator("#input1");

  await passText.focus();
  await page.keyboard.type("Hello World!");

  await page.keyboard.press("Control+A"); // Select All
  await page.keyboard.press("Control+c"); // Copy
  await page.keyboard.press("Tab"); // Move to next field
  await page.keyboard.press("Tab"); // Move to next field
  await page.keyboard.press("Control+V"); // Paste
  await page.keyboard.press("Tab"); // Move to next field
  await page.keyboard.press("Tab"); // Move to next field
  await page.keyboard.press("Control+V"); // Paste

  await page.waitForTimeout(3000);
});