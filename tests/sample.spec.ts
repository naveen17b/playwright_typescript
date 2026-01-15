import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test('Launch the URL', async ({ page }) => {
    
    await page.goto('https://www.google.com');
    const titleOfthePage: string = await page.title();
    console.log(titleOfthePage);
    expect(titleOfthePage).toBe('Google');

})