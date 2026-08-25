import { test, expect } from '@playwright/test';

test("Verify the login and URL of app.thetestingacademy.com multi element page", async ({ page }) => {
    page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.waitForTimeout(3000);
    await page.getByRole("textbox", { name: "email" }).fill("dev@test.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("Falang");
    await page.getByRole('checkbox', { name: 'Remember me' }).check();
    await page.getByTestId('login-button').click();

    await page.waitForTimeout(2000);
    const url = page.url();
    console.log(url);
    await expect(page).toHaveURL(/email=dev%40test.com&password=Falang/); // toHaveURL : RegEx pattern so only /  / would be enough to validate the part of the URL
    console.log("URL verified ✅");
    await page.pause();
});