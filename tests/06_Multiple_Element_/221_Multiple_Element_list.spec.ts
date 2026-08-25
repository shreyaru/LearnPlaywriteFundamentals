import { test, expect } from '@playwright/test'

test('Basic verify how to handle multiple elements', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.waitForTimeout(1000);
    const rightPanelLinksTexts: string[] = await page.locator("a.list-group-item").allInnerTexts();

    // Navigate to the page.
    // Find the locator which gives all the elements and text
    // loop through it and find the one which we want to click

    console.log(rightPanelLinksTexts.length);

    for (const link of rightPanelLinksTexts) {
        console.log(link);
    }

    for (const linkText of rightPanelLinksTexts) {
        if (linkText === "Forgot Password") {
            await page.getByText(linkText).first().click();
        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }

})