import { test, expect } from '@playwright/test'
import { LoginPage } from './LoginPage'
import { faker } from '@faker-js/faker'

test.describe('POM with Login Page Simple', () => {
    test('Login with valid credns', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.goTo();
        await loginPage.login(faker.person.firstName(), faker.person.lastName());
        await expect(page).toHaveTitle("TTACart - Login");

    });
});
