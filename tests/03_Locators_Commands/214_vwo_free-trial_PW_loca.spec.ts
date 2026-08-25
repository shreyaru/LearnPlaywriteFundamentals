import { test, expect } from '@playwright/test';

test("Verify the free trail web page with playwright locators", async ({ page }) => {
    page.goto("https://vwo.com/free-trial/");
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: "email" }).fill("adbsdh");

    await page.getByRole('checkbox').check();

    await page.getByRole('button', { name: "Create a Free Trial Account" }).first().click();

    let error_msg = await page.locator("//div[contains(@class, 'invalid-reason')]").first().textContent();

    //let error_msg1 = await page.getByText('The email address you entered is incorrect.').textContent();

    expect(error_msg).toContain("The email address you entered is incorrect.");
});