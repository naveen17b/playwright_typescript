
/**
 * dropdown without select tag
 */

import { test, expect, Locator } from '@playwright/test';

test("Testing the bootstrap dropdown functionality", async ({ page }) => {

    await page.goto("https://www.flipkart.com");
    await page.locator("input[name='q']").fill("iPhone 13");

})