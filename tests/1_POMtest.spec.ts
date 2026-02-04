import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test.describe("Test case to check the functionality of adding items to the cart after login", () => {

    test("login and add item to cart", async ({ page }) => {

        await page.goto("https://demoblaze.com/index.html");

        const username:String = "krish11";
        const password:String = "Krish11";
        const productName: String = "Samsung galaxy s6";


        const pg = new LoginPage(page);
        await pg.loginToApplication(username.toString(), password.toString());


        const homePage = new HomePage(page);
        await homePage.addProductToCart(productName.toString());
        // await page.waitrForTimeout(3000);
        await homePage.cliskccartLink();
        // await page.waitrForTimeout(3000);

        //cart page
        const cartPage = new CartPage(page);
        const isProductInCart = await cartPage.verifyProductInCart(productName.toString());
        expect(isProductInCart).toBeTruthy();

    })


});