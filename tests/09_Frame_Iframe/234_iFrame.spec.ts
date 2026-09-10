import { test, expect, FrameLocator } from '@playwright/test'

test("Verify the iframe", async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    let vehicleFrame: FrameLocator = await page.frameLocator("#frame-one");
    await vehicleFrame.locator("#RESULT_TextField-1").fill("Boxago");
    await vehicleFrame.locator("#RESULT_TextField-2").fill("MarsCury");
    await vehicleFrame.locator("#RESULT_TextField-3").fill("MH30-123455566789");

    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('SUV');

    await vehicleFrame.locator('#RESULT_TextField-4').fill('2015');

    await vehicleFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');

    await vehicleFrame.getByText('Submit registration', { exact: true }).click();

    let output = await vehicleFrame.locator("#vehicle-output").innerText();
    console.log(output);

    await page.waitForTimeout(4000);



})