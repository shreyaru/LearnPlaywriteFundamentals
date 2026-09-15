import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('FakeJS data-driven template', () => {
    test('Should display the expected generated user details', async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

        //Dynamic Data
        //const expected_firstname = faker.person.firstName();
        const expected_email = faker.internet.email();
        const expected_password = faker.internet.password();
        //const expected_lastname = faker.person.lastName();
        //console.log(expected_firstname);

        //const telephone = faker.phone.number({ style: 'national' });
        //const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' });

        //console.log(telephone);
        //console.log(password);

        const testUser = {
            //name: expected_firstname,
            email: expected_email,
            password: expected_password
        }

        await page.getByRole("textbox", { name: "Username" }).fill(testUser.email);
        await page.getByRole("textbox", { name: "Password" }).fill(testUser.password);
        await page.getByTestId("login-button")
            .or(page.getByRole("button", { name: "Login" }))
            .or(page.locator("#login-button")).click();
        await expect(page.locator("#login-error")).toContainText("Username and password do not match any user in this service");

    });

});