import { test, expect } from '@playwright/test'

test.describe('Scrolling to the element', () => {

    test.beforeEach('URL', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");
    });

    test('scroll to view', async ({ page }) => {
        // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you
        await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
        await page.getByTestId('deep-anchor').click();

        await page.waitForTimeout(2000);


        // 2) scrollBy 1000 px
        //page.evaluate - this can execute a JS code
        await page.evaluate(() => window.scrollBy(0, 1000));
        await page.waitForTimeout(2000);

        // 3) jump to bottom
        await expect(page.getByTestId('cta-button')).toBeEnabled();
        await page.waitForTimeout(2000);

        // 4) jump back to top
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(2000);


        // 5) lazy list grows past 10 once visible

        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

        const items = await page.getByTestId('lazy-list').locator('li');
        const initialCount = await items.count();

        await items.last().scrollIntoViewIfNeeded();
        // poll untill the new items appened.

        await expect.poll(async () => items.count(), {
            message: "expected items > 10",
            timeout: 10_000
        }).toBeGreaterThan(initialCount);

        const finalCount = await items.count();
        console.log(finalCount);

    });










});