import { test, expect, Locator } from '@playwright/test'

const URL = 'https://simplemaps.com/svg/country/in'

test.describe('SVG of states', () => {
    //Group the test cases together

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Testcase!");
        await page.goto(URL);
    });

    test("Generate the list of all states", async ({ page }) => {
        const data = {
            INAN: "Andaman and Nicobar",
            INAP: "Andhra Pradesh",
            INAR: "Arunachal Pradesh",
            INAS: "Assam",
            INBR: "Bihar",
            INCH: "Chandigarh",
            INCT: "Chhattisgarh",
            INDH: "Dādra and Nagar Haveli and Damān and Diu",
            INDL: "Delhi",
            INGA: "Goa",
            INGJ: "Gujarat",
            INHP: "Himachal Pradesh",
            INHR: "Haryana",
            INJH: "Jharkhand",
            INJK: "Jammu and Kashmir",
            INKA: "Karnataka",
            INKL: "Kerala",
            INLA: "Ladakh",
            INLD: "Lakshadweep",
            INMH: "Maharashtra",
            INML: "Meghalaya",
            INMN: "Manipur",
            INMP: "Madhya Pradesh",
            INMZ: "Mizoram",
            INNL: "Nagaland",
            INOR: "Orissa",
            INPB: "Punjab",
            INPY: "Puducherry",
            INRJ: "Rajasthan",
            INSK: "Sikkim",
            INTG: "Telangana",
            INTN: "Tamil Nadu",
            INTR: "Tripura",
            INUP: "Uttar Pradesh",
            INUT: "Uttaranchal",
            INWB: "West Bengal",
        };

        const allStates = await page.locator("//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains(@class, 'sm_state')]").all();

        for (let state of allStates) {
            const s1 = await state.getAttribute("class");

            if (s1?.includes("INMH")) {
                state.click();
            }

        }
        await page.pause();


    });

});

// https://app.thetestingacademy.com/selenium-to-playwright-migration-tutorial