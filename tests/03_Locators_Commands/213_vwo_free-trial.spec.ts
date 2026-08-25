import { test, expect } from '@playwright/test';

test("Verify the free trail web page", async ({ page }) => {
    page.goto("https://vwo.com/free-trial/");

    await page.locator("#page-v1-step1-email").fill("adbsd");

    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();

    await page.locator("//button[@data-qa='page-su-submit']").first().click();
    let error_msg = await page.locator("//div[contains(@class, 'invalid-reason')]").first().textContent();
    expect(error_msg).toContain("The email address you entered is incorrect.");
});