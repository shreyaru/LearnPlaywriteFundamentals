import { test, expect, Page, Locator } from '@playwright/test'

export class LoginPage {
    // Page Locator
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passInput: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole("textbox", { name: "Username" });
        this.passInput = page.getByRole("textbox", { name: "Password" })
        this.loginBtn = page.getByTestId("login-button").or(page.getByText("Login")).or(page.locator("#login-button"));
    }

    //Page Actions
    async goTo() {
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    };

    async login(username: string, password: string) {

        await this.emailInput.fill(username);
        await this.passInput.fill(password);
        await this.loginBtn.click();

    }


}
