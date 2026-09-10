import { test, expect } from '@playwright/test';

test("Verify the click on Forgotten Password and link of Privacy Policy", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    //await page.pause();
    await page.waitForTimeout(2000);
    const ForgPassLink = page.locator('a.list-group-item')
        .filter({ hasText: "Forgotten Password" }).click();

    //ForgPassLink.click();
    const accountLinks = page.locator('a.list-group-item');
    await expect(accountLinks).toHaveCount(13);

    const PrivacyLink = page.locator('footer a').filter({ hasText: "Privacy Policy" });
    await expect(PrivacyLink).toHaveAttribute('href', "#privacy-policy");
});