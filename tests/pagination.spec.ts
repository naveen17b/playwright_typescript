
import { test, expect, Locator } from '@playwright/test';

test('Testing the pagination functionality', async ({ page }) => {
    await page.goto('https://datatables.net/examples/basic_init/scroll_y.html');

    //get all the data in the table of the pagination

    let hasmorepages = true;
    while (hasmorepages) {

        const rows: Locator[] = await page.locator("#example tbody tr").all();
        for (const row of rows) {
            
            const rowData = await row.innerText();
            console.log(rowData);
        }
        await page.waitForTimeout(1000); // wait for a second before clicking next
        const nextButton:Locator = page.locator("button[aria-label='Next']");
        const isDisabled = await nextButton.getAttribute('class');

        if (isDisabled?.includes('disabled')) {

            hasmorepages = false;
        }
        else {
            await nextButton.click();
        }
        await page.waitForTimeout(3000); // wait for a second to allow the table to load new data
    }
});



test.only("", async ({ page }) => {
    await page.goto('https://datatables.net/examples/basic_init/scroll_y.html');

    await page.locator("input.dt-input").fill("Garrett Winters");
    const rows: Locator[] = await page.locator("#example tbody tr").all();
    if (rows.length >= 1){
    let matchFound = false;
        for (let row of rows) {
            const rowData = await row.innerText();
            if (rowData.includes("Garrett Winters")) {
                matchFound = true;
                console.log("Match found: " + rowData);
                break;
            }
    }
    }
    await page.waitForTimeout(3000);



})