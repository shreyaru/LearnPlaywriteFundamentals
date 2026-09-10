import { test, expect } from '@playwright/test';
import { escape } from 'node:querystring';

test("Verify the custom drop down select", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    // ① Single — searchable
    await page.getByTestId("rs-single-input").click();
    await page.getByRole('option', { name: 'Cypress' }).click();
    //   await page.getByText("JavaScript").click();

    // ②  Multi — chips with remove
    await page.getByTestId("rs-multi-input").click();
    await page.getByRole('option', { name: 'Pytest' }).click();
    await page.getByRole('option', { name: 'JUnit' }).click();
    await page.getByRole('option', { name: 'Cucumber' }).click();
    await page.locator("//button[@aria-label='Remove JUnit']").click();
    await page.waitForTimeout(2000);
    await page.keyboard.press("Escape");
    //   await page.getByText("Svelte").click();
    await page.waitForTimeout(2000);


    await page.getByTestId("rs-creatable-input").click();
    await page.getByRole('option', { name: 'api-testing' }).click();
    await page.getByRole('option', { name: 'performance' }).click();
    await page.getByRole('option', { name: 'accessibility' }).click();
    //await page.getByText("Mid-level (4-6 years)", { exact: true }).click();

    // ③ Creatable multi — type and Enter
    await page.getByTestId("rs-async-input").click();
    await page.getByTestId("rs-async-input").fill("beng");
    await expect(page.getByTestId('rs-async-menu')).toContainText('Bengaluru');
    await page.getByRole('option', { name: 'Bengaluru' }).click();


    await page.waitForTimeout(3000);




});