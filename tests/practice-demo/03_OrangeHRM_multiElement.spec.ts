import { test, expect } from '@playwright/test';

test("Verify the title and logo", async ({ page }) => {
    page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.waitForTimeout(3000);
    await page.getByRole("textbox", { name: 'username' }).fill("admin");
    await page.getByRole('textbox', { name: 'password' }).fill("Awesomeqa@4321");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);


    //. //div[text()="Terminated"]//parent::div//preceding-sibling::div[3]//div/text() - name of terminated employee

    await page.getByRole("link", { name: 'Employee List' }).click();

    const terminatedRow = page.getByRole('row').filter({ hasText: 'Terminated' }).first();

    //await terminatedRow.waitFor();
    console.log(await terminatedRow.innerText());

    await terminatedRow.locator('i.oxd-icon.bi-trash').click();

    //await page.pause();







});