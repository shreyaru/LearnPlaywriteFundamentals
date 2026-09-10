import { test, expect, FrameLocator, Locator } from '@playwright/test';
import { verify } from 'node:crypto';

test('SpiceJet hover and click', async ({ page }) => {

    await page.goto('https://www.spicejet.com/');
    await page.getByText("Add-ons", { exact: true }).hover();

    /*  To verify/find the element of disappering elments follow these steps :
    1. Go to website
    2. Go to the section where you want to find the element
    3. Open developers tool
    4. Click on select element
    5. Hover the mouse over the element
    6. Press the Esc button on keyboard
    7. Drop-down will open and the element which we want to inspect will also appear
    8. Press Enter/Return on keyboard to activate the select element function
    9. Now you can inspect the disappearing element
    */
    await page.getByText('FlyEarly', { exact: true }).click();



    // https://app.thetestingacademy.com/playwright/widgets/hover-menu

});