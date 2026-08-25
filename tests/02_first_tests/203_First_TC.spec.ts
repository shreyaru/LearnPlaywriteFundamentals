import { test, expect } from '@playwright/test';

test("Verify the title and logo", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");


});