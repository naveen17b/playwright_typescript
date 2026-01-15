import { test, expect, Locator } from '@playwright/test';
import { NOTFOUND } from 'node:dns/promises';

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

})