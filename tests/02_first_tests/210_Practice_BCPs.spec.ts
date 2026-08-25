import { test, expect } from '@playwright/test';

test("Verify contexts from two websites", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await context.close();

    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto("https://tta-bank-digital-973242068062.us-west1.run.app");
    await context.close();

});