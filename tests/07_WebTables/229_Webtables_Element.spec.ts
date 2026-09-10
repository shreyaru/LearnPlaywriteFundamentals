import { test, expect } from '@playwright/test';


test("Verify webtables pagination with function", async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    // await page.waitForTimeout(5000);

    let name: string = "Yoshi Tannamuri";
    const row = page.locator('#companies-table tr').filter({ hasText: name });

    const country = await row.locator('td[class="country"]').innerText();
    console.log(`${name} is from ${country}`);
    await page.waitForTimeout(3000);

    //  Finding one person's email and country

});