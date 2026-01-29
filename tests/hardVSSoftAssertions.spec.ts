import { test, expect, Locator } from "@playwright/test";

test("Test tocheck the hard and soft assertions", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com");

    //Hard assertions
    await expect(page).toHaveTitle("Demo Web Shop2");  //test will fail here and will not execute the remaining steps
    await expect(page).toHaveURL("https://demowebshop.tricentis.com");

    //assertion on logo
    const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
    expect(logo).toBeVisible();
    await page.waitForTimeout(2000);
    

});



test.only("Test to check the soft assertions", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com");

  //Hard assertions
  //test failed asertion will skip and rest of the assertions will continue with rest
  await expect.soft(page).toHaveTitle("Demo Web Shop2");
  await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com");

  //assertion on logo
  const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
  expect.soft(logo).toBeVisible();
  await page.waitForTimeout(2000);
});
