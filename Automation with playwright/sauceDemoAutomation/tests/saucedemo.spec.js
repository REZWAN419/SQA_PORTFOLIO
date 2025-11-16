import {test, expect} from "@playwright/test";

test("product added to cart", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator('id=user-name').fill('standard_user');

    await page.locator('id=password').fill('secret_sauce');

    await page.click('id=login-button');  

    await page.click('#item_4_title_link > div');

    await page.click('#add-to-cart');  

    await page.click('#shopping_cart_container > a');

    const productName = await page.locator("#item_4_title_link > div").textContent();
    console.log(productName);

    await expect(productName).toBe("Sauce Labs Backpack");


    await page.click("#react-burger-menu-btn");

    await page.click('#logout_sidebar_link');
    
    await page.close();
    
});