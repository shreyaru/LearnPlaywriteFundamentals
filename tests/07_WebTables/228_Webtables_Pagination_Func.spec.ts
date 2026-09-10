import { test, expect } from '@playwright/test';


async function pageNextTillFound(page: Page, name: string): Promise<Locator> {

    while (true) {
        const row = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await row.count()) return row;

        const next = page.getByTestId('next-page');

        if (await next.isDisabled()) throw new Error(`Row Not Found : ${name}`);
        await next.click();

    }
}


test("Verify webtables pagination with function", async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    // await page.waitForTimeout(5000);
    let name: string = "Diego Hernandez";
    const row = await pageNextTillFound(page, name);
    const email = await row.locator('td[data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText();
    console.log(email, country);
    await page.waitForTimeout(3000);

    //  Finding one person's email and country

});