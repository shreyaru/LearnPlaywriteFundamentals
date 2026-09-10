import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');

    //await page.pause();
    await page.getByTestId("ctx-target").click({ button: 'right' });

    const allOptions: string[] = await page.getByTestId("ctx-menu").allInnerTexts();
    console.log(allOptions);

    await page.waitForTimeout(3000);

    await page.getByText('Copy', { exact: true }).first().click();

});