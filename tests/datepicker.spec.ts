import { test, expect, Locator, Page } from  "@playwright/test";

async function selectDate(targetmonth: string, targetyear: string, targetdate: string, page: Page, isfuture: boolean) {
    
    while (true) {
        const monthText = await page
            .locator(".ui-datepicker-month")
            .textContent();
        const yearText = await page.locator(".ui-datepicker-year").textContent();
        if (monthText === targetmonth && yearText === targetyear) {
            break;
        }

        if (isfuture)
        {
            await page.locator(".ui-datepicker-next").click();
            continue;
        }
        else {
            await page.locator(".ui-datepicker-prev").click();
            continue;
        }

        // await page.locator(".ui-datepicker-next").click();
    }

    const alldates = await page.locator("ui-datepicker-calendar td").all();
    for (const dateElement of alldates) {
        const dateText = await dateElement.innerText();
        if (dateText === targetdate) {
            await dateElement.click();
            break;
        }
    }

}


test("test to check the date picker functionality", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com");
    const datepInput: Locator = page.locator("#datepicker");

    // //future date to select 
    // const monthtoselect = 'May';
    // const yeartoselect = '2026';
    // const datetoselect = '23';

    // past date to select
    const monthtoselect = 'April';
    const yeartoselect = '2023';
    const datetoselect = '15';

    //open the date picker
    // datepInput.fill('04/20/2026')
    expect(datepInput).toBeVisible();
    await datepInput.click();

    selectDate(monthtoselect, yeartoselect, datetoselect, page, false);
    await page.waitForTimeout(3000);

    // while (true) {
    //     const monthText = await page.locator(".ui-datepicker-month").textContent();
    //     const yearText = await page.locator(".ui-datepicker-year").textContent();
    //     if (monthText === monthtoselect && yearText === yeartoselect) {
    //         break;
    //     }
        
    // await page.locator(".ui-datepicker-next").click();

    // }

    // const alldates = await page.locator("ui-datepicker-calendar td").all();
    // for (const dateElement of alldates) {
    //     const dateText = await dateElement.innerText();
    //     if (dateText === datetoselect) {
    //         await dateElement.click();
    //         break;
    //     }
}

);