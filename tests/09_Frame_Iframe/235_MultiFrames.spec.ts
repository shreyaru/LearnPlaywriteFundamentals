import { test, expect, FrameLocator, Locator } from '@playwright/test'

test("Verify the iframe", async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');
    let mainFrame: FrameLocator = await page.frameLocator("[name='main']");
    const headerText = await mainFrame.locator('h2').innerText();
    const title = await mainFrame.locator('title').innerText();
    console.log(headerText);
    console.log(title);

    let allFrames: Locator[] = await page.locator("//frame").all();
    console.log("The total number of frames are :", allFrames.length);

    for (const frames of allFrames) {
        console.log(await frames.getAttribute("name"), ':', await frames.getAttribute("src"));
    }

    let sideFrame: FrameLocator = await page.frameLocator("[name='side']");
    const headerText1 = await sideFrame.locator('h3').innerText();
    const title2 = await sideFrame.locator('title').innerText();
    console.log(headerText1);
    console.log(title2);
    await sideFrame.getByTestId("side-link-registration").click();

    await page.waitForTimeout(3000);





})