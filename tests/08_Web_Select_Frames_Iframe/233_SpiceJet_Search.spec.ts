import { test, expect } from '@playwright/test';

test("Verify the spiceJet search", async ({ page }) => {
    await page.goto("https://www.spicejet.com/");
    await page.locator("//input[contains(@class, 'css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu')]").first().click();
    await page.locator("//input[contains(@class, 'css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu')]").first().fill("De");
    await page.locator("//div[text()='Delhi']").click();


});