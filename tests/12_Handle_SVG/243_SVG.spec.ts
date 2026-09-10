import { test, expect, Locator } from '@playwright/test'

const URL = 'https://www.flipkart.com/search'

test.describe('Flipkart search via the SVG', () => {
    //Group the test cases together

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!");
        await page.goto(URL);
    });

    test('TC#1 @smoke @regression', async ({ page }) => {
        await page.locator('input[name="q"]').fill("macmini");
        //await page.getByTitle('Search for products, brands and more').fill('macmini');
        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        // const svgElementsAll: Locator[] = await page.locator('svg').all();
        // for(let svgElement in svgElementsAll){
        //     // find and click()
        // }

        //div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]
        //const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");
        const titleResults: Locator = page.locator("//a[@target='_blank']");
        //div[contains(@class, "thunder-processed")]
        await page.waitForTimeout(2000);

        //await page.pause();
        const count = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const titles: string | null = await titleResults.nth(i).textContent();
            console.log(titles);
        }
        await page.waitForTimeout(2000);

        //all product prices xpath
        let allPrices: string[] = await page.locator('//a[@href]/child::div/child::div[contains(text(), "₹")]').allInnerTexts();
        //let allPrices: string[] = await page.getByRole('link', { name: '₹' }).allInnerTexts();
        console.log(allPrices);

        await page.waitForTimeout(3000);

        // Convert string prices to numbers and sort
        const numericPrices: number[] = allPrices.map(price =>
            Number(price.replace(/[₹,]/g, ''))
        );
        numericPrices.sort((a, b) => a - b);
        console.log("Sorted prices:", numericPrices);
        console.log("Lowest price: ₹" + numericPrices[0]);


    });

});

// https://app.thetestingacademy.com/selenium-to-playwright-migration-tutorial