import { test, expect } from '@playwright/test';

test("Verify the Web Tables from XPATHs", async ({ page }) => {
    await page.goto("https://awesomeqa.com/webtable.html");

    // First of all, go to the link of the web table, 
    // find the correct Helen banquet, 
    // and then use a for loop to find the following simple 

    // //table[@id="customers"]/tbody/tr[5]/td[2]

    const firstPart = "//table[@id='customers']/tbody/tr["
    const middlePart = "]/td["
    const lastPart = "]"

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const colms = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();
    page.pause();
    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= colms; j++) {
            const dynamicPath = `${firstPart}${i}${middlePart}${j}${lastPart}`;
            //console.log(dynamicPath);
            const name = await page.locator(dynamicPath).innerText();
            //console.log(name);
            if (name == "Helen Bennett") {
                const countryPath = `${dynamicPath}/following-sibling::td`;
                const Country = await page.locator(countryPath).innerText();
                console.log('------');
                console.log(`Helen Bennett is In - ${Country}`);
            }
        }
    }
});