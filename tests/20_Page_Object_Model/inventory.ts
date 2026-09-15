import { type Locator, type Page } from '@playwright/test';

export class Loginpage {
    readonly page: Page;
    readonly ttacart: Locator;
    readonly linkTestAllthethingsTShirt: Locator;
    readonly price1599: Locator;
    readonly addToCart: Locator;
    readonly shoppingCartContainerSvg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.ttacart = page.getByText("TTACart");
        this.linkTestAllthethingsTShirt = page.getByRole("link", { name: "Test.allTheThings() T-Shirt (Red)" }).or(page.getByTestId("item-test-allthethings-tshirt-red-title-link")).or(page.getByText("Test.allTheThings() T-Shirt (Red)"));
        this.price1599 = page.getByText("$15.99");
        this.addToCart = page.getByText("Add to cart");
        this.shoppingCartContainerSvg = page.locator("#shopping_cart_container > svg");
    }

    async goto() {
        await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/cart");
    }
}
