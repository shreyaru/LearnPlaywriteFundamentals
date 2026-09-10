import { test, expect, Locator } from '@playwright/test'

const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg'

test.describe('SVG Handling', () => {
    //Group the test cases together

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!");
        await page.goto(URL);
    });

    test('Finding SVG root and assert the visiblity', async ({ page }) => {
        const tri = page.getByTestId('shape-triangle-mint');
        await tri.click();
        const output = await page.locator("#shapes-output").innerText();
        expect(output).toContain('Mint triangle');

        await page.getByRole('button', { name: /Q3 bar/ }).click();
        await page.getByRole('radio', { name: '4 stars' }).click();

        let allBars = await page.locator(".bar").all();
        for (const bar of allBars) {
            const b = await bar.getAttribute("data-quarter");
            const h = await bar.getAttribute("data-value");
            console.log(b);
            console.log(h);

        }

        //await page.pause();


    });

});

// https://app.thetestingacademy.com/selenium-to-playwright-migration-tutorial