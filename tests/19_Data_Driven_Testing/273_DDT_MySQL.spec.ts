import { test, expect } from '@playwright/test';
import { readMySQL, MySQLConfig } from './util/mysqlReader';

/**
 * DDT MySQL — Data-Driven Testing with a MySQL database.
 *
 * Prerequisites:
 *   1. A running MySQL server (local or remote).
 *   2. The `registration_data` table created & seeded — see the SQL in util/mysqlReader.ts.
 *   3. Set the environment variables below (or update the defaults):
 *        MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE
 */

// MySQL connection config — reads from env vars with sensible defaults
const dbConfig: MySQLConfig = {
    host: process.env.MYSQL_HOST ?? 'localhost',
    port: Number(process.env.MYSQL_PORT ?? 3306),
    user: process.env.MYSQL_USER ?? 'root',
    password: process.env.MYSQL_PASSWORD ?? 'root',
    database: process.env.MYSQL_DATABASE ?? 'testdb',
};

test.describe('DDT MySQL', () => {

    // Fetch data once before all tests using a Playwright worker-scoped fixture alternative:
    // We use test.beforeAll to load data, then iterate in a second describe.
    let loginData: Awaited<ReturnType<typeof readMySQL>>;

    test.beforeAll(async () => {
        loginData = await readMySQL(dbConfig, 'SELECT * FROM registration_data');
    });

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    // NOTE: Because MySQL data is fetched asynchronously in beforeAll,
    // we cannot use a static `for...of` loop at the top level like the
    // JSON/YAML/XLSX specs. Instead, we run a single parameterised test
    // that iterates through all rows inside the test body.
    test('Login with all MySQL data rows', async ({ page }) => {
        for (const data of loginData) {
            // Navigate fresh for each data row
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

            const textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            const textboxPassword = page.getByRole("textbox", { name: "Password" })
                .or(page.locator("#password"))
                .or(page.locator("[name=\"password\"]"));
            const buttonLogin = page.getByRole("button", { name: "Login to Practice Account" })
                .or(page.getByTestId("login-button"))
                .or(page.getByText("Login to Practice Account"));

            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLogin.click();

            console.log(`Tested row: ${data.description}`);

            // if (data.shouldPass) {
            //     await expect(page).not.toHaveURL(/multiple_element_filter/);
            // } else {
            //     await expect(page.getByText(data.expectedError)).toBeVisible();
            // }
        }
    });

});
