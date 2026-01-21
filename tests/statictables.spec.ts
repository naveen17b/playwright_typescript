import { test, expect, Locator } from '@playwright/test';
import { parse } from 'node:path';
test("Testing the static tables functionality", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table: Locator = page.locator("table[name='BookTable'] tbody");
    const columns: Locator = page.locator("table[name='BookTable'] tbody tr th");
    const rows: Locator = page.locator("table[name='BookTable'] tbody tr");

    await expect(table).toBeVisible();
    // console.log(table.allInnerTexts);

    // Count the number of columns in the table
    await expect(columns).toHaveCount(4);
    const columnCount = await columns.count();
    console.log("Number of columns in the table: " + columnCount);
    expect(columnCount).toBe(4);

    //number of rows in the table
    await expect(rows).toHaveCount(7);
    const rowcount: number = await rows.count();
    console.log("Number of rows in the table: " + rowcount);
    expect(rowcount).toBe(7);

    //get the text from all the rows and columns
    const gettext: Locator = rows.nth(2).locator("td");
    const secondRowtext: string[] = await gettext.allInnerTexts();
    console.log(secondRowtext);
    expect(secondRowtext).toHaveLength(4);
    await expect(gettext).toHaveText(["Learn Java", "Mukesh", "Java", "500"]);

    //use for loop to extract the data from the second row
    for (let text of secondRowtext) {
        console.log(text);
    }

    //read all data ( rows and coluns from the table) except the header
    const allrowdata = await rows.all();

    for (let rd of allrowdata.slice(1)) {
        const rdText = await rd.locator("td").allInnerTexts();
        console.log(rdText);
        // console.log(rdText.join("\t "));
    }

    //print the book name with the author " Name = Mukesh "

    for (let rd of allrowdata.slice(1)) {
        const columnText = await rd.locator("td").allInnerTexts();
        const authorName = columnText[1];
        const bookName = columnText[0];
        if (authorName === "Mukesh") {
            console.log(`${authorName} has written the book: ${bookName}`);
        }
    }

    //calculate the price of all books
    let totalPrice = 0;

    for (let rd of allrowdata.slice(1)) {
        const columnText = await rd.locator("td").allInnerTexts();
        const priceOfBook = columnText[3];
        totalPrice += parseInt(priceOfBook);
    }
   
    console.log(totalPrice);
    
})
    