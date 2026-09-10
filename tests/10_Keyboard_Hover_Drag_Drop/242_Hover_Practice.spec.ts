import { test, expect, FrameLocator, Locator } from '@playwright/test';
import { verify } from 'node:crypto';

test('SpiceJet hover and click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId("nav-add-ons").hover();

    const allOptions: string[] = await page.getByRole('menu').allInnerTexts();
    for (const menu of allOptions) {
        console.log(menu);
    }
    await page.getByTestId('test-id-Wifi').click();

});