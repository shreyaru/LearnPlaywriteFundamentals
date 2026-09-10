import { test, expect } from '@playwright/test';

test("Verify the custom drop down select", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");
    await page.getByTestId("lang-trigger").click();
    await page.getByRole('option', { name: 'JavaScript' }).click();
    //   await page.getByText("JavaScript").click();

    await page.getByTestId("framework-trigger").click();
    await page.getByRole('option', { name: 'Svelte' }).click();
    //   await page.getByText("Svelte").click();

    await page.getByTestId("experience-trigger").click();
    //await page.getByRole('option', { name: 'Mid-level (4-6 years)' }).click();
    await page.getByText("Mid-level (4-6 years)", { exact: true }).click();

    await page.waitForTimeout(5000);




});