import { test, expect } from '@playwright/test';

test("Verify the select type of drop down", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/dropdown");
    await page.locator("#dropdown").click();
    await page.selectOption("#dropdown", "Option 2");
    await page.waitForTimeout(3000);

});