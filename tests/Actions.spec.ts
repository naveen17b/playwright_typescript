import { test, expect, Locator } from "@playwright/test";
import { assert } from "node:console";
import { NOTFOUND } from "node:dns/promises";

test("Testing the radio button feature", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  // await page.
  const radioButton: Locator = page.locator("#male");
  await expect(radioButton).toBeVisible();
  await expect(radioButton).toBeEnabled();
  await radioButton.check();
  await expect(radioButton).toBeChecked();
  // await expect(radioButton.isChecked().then(async (value: boolean) => {
  //     if (value) {
  //         console.log("The radio button is checked");
  //     } else {
  //         console.log("The radio button is not checked");
  //     }
});

test("Testing the checkbox feature", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const checkBox: Locator = page.getByLabel("Saturday");
  await expect(checkBox).toBeVisible();
  await expect(checkBox).toBeEnabled();
  await checkBox.check();
  await expect(checkBox).toBeChecked();
  await checkBox.uncheck();
  // await expect(checkBox).toBeDisabled();
});

test("testing to check all the checkboxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  
    //how to select all check boxes
  const allCheckBoxes: Locator = page.locator('input[type="checkbox"]');
  const count = await allCheckBoxes.count();
  console.log(count);
  await expect(allCheckBoxes).toHaveCount(13);
  for (let i = 0; i < count; i++) {
    const checkBoxItem = allCheckBoxes.nth(i);
    await checkBoxItem.check();
    await expect(checkBoxItem).toBeChecked();
  }

  //select all check boxes

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //   const checkboxes: Locator[] = days.map((index) => page.getByLabel(index));
  // for (const checkbox of checkboxes) {
  //     await checkbox.check();
  //     await expect(checkbox).toBeChecked();
  // }
});

test("testing to uncheck all the checkboxes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const checkboxes: Locator[] = days.map((index) => page.getByLabel(index));

  //Uncheck (last three days) check boxes
  for (const checkbox of checkboxes.slice(-3)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }
});

test("select random checkboxes[2,4,6]", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
   const days: string[] = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
    ];
    const checkboxes: Locator[] = days.map((index) => page.getByLabel(index));

  //check random check boxes [1,3,5]
   const index = [0, 2, 4];
    for (const i of index) {
    const checkbox = checkboxes[i];
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  await page.waitForTimeout(3000);
});
