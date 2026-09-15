import { test, expect } from '@playwright/test'
// const userData = require('./293_Users.json');

import userData from "./263_Users_Login.json" //modern JS

// const fs = require("fs");

test('Verify Element by Filter', async ({ page }) => {

    console.log(userData.username);
    console.log(userData.password);


    // const fileData = fs.readFileSync("293_Users.json", "utf-8");
    // const user = JSON.parse(fileData);



});

