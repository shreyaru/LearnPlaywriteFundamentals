import { test, expect } from '@playwright/test';

test("Verify the title and logo", async ({ page }) => {
    page.goto("https://vwo.com/free-trial");
    await page.getByRole(type, {});

});