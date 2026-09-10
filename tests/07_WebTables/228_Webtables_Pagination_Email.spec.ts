import { test, expect } from '@playwright/test';

test("Verify webtables pagination", async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email and country

    let pageCount = 3;
    let allEmails: string[] = [];
    for (let p = 1; p <= pageCount; p++) {
        await page.getByTestId(`page-${p}`).click();
        const emails = await page.locator("td[data-col='email']").allInnerTexts();
        allEmails.push(...emails);
    }

    console.log(allEmails);
    console.log(allEmails.length);
});