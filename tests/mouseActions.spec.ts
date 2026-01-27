import { test, expect } from "@playwright/test";

test("Mouse hover action functionality", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  await page.locator("button.dropbtn").scrollIntoViewIfNeeded();
  await page.hover("button.dropbtn");

  //mouse hover on sub item in the movehover button
  const LaptopSubmousehover = page.locator(".dropdown-content a:nth-child(2)");
  await LaptopSubmousehover.scrollIntoViewIfNeeded();
  expect(LaptopSubmousehover).toBeVisible();
  await LaptopSubmousehover.hover();
  await page.waitForTimeout(3000);
});

test("Right Click action", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  const rightClickButton = page.locator("span.context-menu-one");
  await rightClickButton.click({ button: "right" });
  await page.waitForTimeout(3000);
});


test.only("Double click action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  const doubleClickButton = page.locator("button[ondblclick='myFunction1()']");
  await doubleClickButton.dblclick();
  await page.waitForTimeout(3000);
});
