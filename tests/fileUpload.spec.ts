import { test, expect, Locator } from "@playwright/test";

test("Test functionality to check the single file upload", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#singleFileInput").setInputFiles("Uploads/file1.docx"); //relative path from the Uploads folder
  await page.locator("button:has-text('Upload Single File')").click();
  const uploadStatusLocator = page.locator("p#singleFileStatus");
  console.log(
    "The file upload status message",
    await uploadStatusLocator.innerText(),
  );
  await page.waitForTimeout(2000);
});

test.only("Test functionality to check the Multiple file upload", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page
    .locator("#multipleFilesInput")
    .setInputFiles(["Uploads/file1.docx", "Uploads/Testfile1.pdf"]); //relative path from the Uploads folder
  await page.locator("button:has-text('Upload Multiple Files')").click();
  const uploadStatusLocator = await page
                                    .locator("#multipleFileStatus")
                                    .textContent();
  
    console.log("The files upload status message", uploadStatusLocator);

  expect(uploadStatusLocator).toContain("file1.docx");
  expect(uploadStatusLocator).toContain("Testfile1.pdf");
  await page.waitForTimeout(2000);
});
