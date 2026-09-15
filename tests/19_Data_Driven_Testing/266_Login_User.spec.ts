import { test, expect } from '@playwright/test'

import loginData from "./test-data/login-data.json"


test.describe('Login Testing', () => {

    test.beforeEach('URL', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    });

    test('Verify the login with valid credentials', async ({ page }) => {
        await page.locator('#email').fill(loginData.validUser.email);
        await page.locator('#password').fill(loginData.validUser.password);
        await page.getByTestId('login-button').scrollIntoViewIfNeeded();
        await page.getByTestId('login-button').click();
        await page.waitForTimeout(2000);
    })

    test('Verify the login with invalid credentials', async ({ page }) => {
        await page.locator('#email').fill(loginData.invalidUser.email);
        await page.locator('#password').fill(loginData.invalidUser.password);
        await page.getByTestId('login-button').scrollIntoViewIfNeeded();
        await page.getByTestId('login-button').click();
        await page.waitForTimeout(2000);
    })


});

