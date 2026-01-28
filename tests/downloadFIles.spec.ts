import { test, expect, Locator } from "@playwright/test";
import fs from "fs";

test("Test to download files", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/download-files_25.html",
  );
  await page.locator("textarea#inputText").fill("selenium");
  await page.locator("#generateTxt").click();
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("#txtDownloadLink").click(),
  ]);
  await page.waitForTimeout(2000);
  const downloads = "Downloads/testfile1.txt";
  await download.saveAs(downloads);

  //concept from javascript and typescript to verify the file downloaded or not
  //fs module
  const fileSuccessfullydownloaded = fs.existsSync(downloads);
  expect(fileSuccessfullydownloaded).toBeTruthy();
  await page.waitForTimeout(2000);

  //clean up the downloded file before execution
  if (fileSuccessfullydownloaded) {
    
    fs.unlinkSync(downloads);
  }
});
