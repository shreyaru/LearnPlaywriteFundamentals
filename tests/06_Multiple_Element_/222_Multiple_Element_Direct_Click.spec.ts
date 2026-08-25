import { test, expect } from '@playwright/test'

test('Basic verify how to handle multiple elements', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.waitForTimeout(1000);

    await page.getByTestId("forgotten-password-link").click();
    await page.pause();

})