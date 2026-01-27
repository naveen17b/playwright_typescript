import { test, expect, Locator } from "@playwright/test";

test("Drag and drop action", async ({ page }) => {
  // await page.goto("https://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette");
  await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
  //   const doubleClickButton = page.locator("button[ondblclick='myFunction1()']");
  //   await doubleClickButton.dblclick();
  const drag = page.locator("li.ui-widget-content h5:nth-child(1)");
  const moveTo = page.locator("div#trash");
  await drag.dragTo(moveTo);
  await page.waitForTimeout(3000);
});
