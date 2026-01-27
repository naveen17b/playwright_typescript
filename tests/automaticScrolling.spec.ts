import { test, expect, Locator } from "@playwright/test";

test("Scrolling inside dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("input#comboBox").click();
  const scrollLocator = page.locator("#dropdown div:nth-child(100)");
  console.log(
    "The inner text of the selected option : ",
    await scrollLocator.innerText(),
  );
  await page.waitForTimeout(3000);
});

test.only("Scrolling in the table ", async ({ page }) => {
  await page.goto("https://datatables.net/examples/basic_init/scroll_xy.html");

  const scrolltoLastname = page.locator(
    ".dt-scroll-body tbody tr:nth-child(10) td:nth-child(2)"
  );

  console.log(
    "The inner text of the selected option : ",
    await scrolltoLastname.innerText(),
  );
  await page.waitForTimeout(3000);
});


test.only("Scrolling horizontally in the table ", async ({ page }) => {
  await page.goto("https://datatables.net/examples/basic_init/scroll_xy.html");

  const scrolltoLastname = page.locator(
    ".dt-scroll-body tbody tr:nth-child(10) td:nth-child(9)",
  );

  console.log(
    "The inner text of the selected option : ",
    await scrolltoLastname.innerText(),
  );
  await page.waitForTimeout(3000);
});
