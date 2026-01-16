
import { test, expect, Locator } from '@playwright/test';

test("Testing the dropdown functionality", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    //working with dropdowns
    const dropdown: Locator = page.locator("#country");
    await dropdown.scrollIntoViewIfNeeded();
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption("India");
    // await expect(dropdown).toHaveValue("India");
    await dropdown.selectOption({label: "United States"});
    // await expect(dropdown).toHaveValue("United States");
    await dropdown.selectOption({index: 3});
    // await expect(dropdown).toHaveValue("Afghanistan");
    await dropdown.selectOption({value: "germany"});
    // await expect(dropdown).toHaveValue("Germany");



    /**
     * count the number of options in dropdown
     */

    const allOptions: Locator = page.locator("#country>option");
    const count = await allOptions.count();
    console.log(count);
    console.log("Total number of options in dropdown: " + count);
    await expect(allOptions).toHaveCount(10);

   


    /**
     * get all the text contents from the drop down
     */

    // for (let i = 0; i < count; i++) {
    //     const optionItem = allOptions.nth(i);
    //     const optionText:string[] = await optionItem.textContent();
    //     console.log(optionText);
    // }

    const optionTexts: string[] = (await allOptions.allTextContents()).map(text => text.trim());
    console.log(optionTexts);




    await page.waitForTimeout(3000);
})