import { test, expect, Locator } from '@playwright/test';
 
test("Testing the dynamic table functionality", async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const tablerowsLocator: Locator = page.locator("table.table tbody");
    await expect(tablerowsLocator).toBeVisible();
    await page.locator("table.table tbody").scrollIntoViewIfNeeded();
    //select all the rows and count number of rows
    const rowCount:Locator[] = await tablerowsLocator.locator("tr").all();
    console.log("Number of rows in the table: " + rowCount.length);


    //task -1: get the CPU value from the dynamic table where the browser is chrome
    let cpuValue = '';
    let browser: String = 'chrome';
    for (const row of rowCount) {
         const processName: string = await row.locator("td").nth(0).innerText();
        
        if (processName === browser) {
            let cpuValue = await row.locator("td", { hasText: '%' }).innerText();
            console.log(cpuValue);
            break;
        }
        
    }
   
    const cpuboxtext: string = await page.locator("p#chrome-cpu").innerText();
    console.log(cpuboxtext);
    expect(cpuboxtext).toContain(cpuValue);

    if(cpuboxtext.includes(cpuValue)){
        console.log("CPU value matches successfully!");
    } else {
        console.log("CPU value does not match.");
    }
    
    await page.waitForTimeout(3000);
})