import { test, expect } from '@playwright/test';

test("Verify webtables pagination", async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');

    //  Finding one person's email and country

    let name: string = "Sofia Rossi";
    let row;
    while (true) {
        row = page.locator('#employees-tbody tr').filter({ hasText: name });
        if (await row.count()) {
            break;
        }

        const next = page.getByTestId('next-page');

        if (await next.isDisabled()) throw new Error("Row Not Found!");
        await next.click();


    }

    const email = await row.locator("td[data-col='email']").innerText();
    const country = await row.locator("td[data-col='country']").innerText();

    console.log(`Email of user ${name} is ${email} and the user is from ${country}`);

});