import { Page, Locator } from '@playwright/test';

export class CartPage {
    //define locators
    private readonly page: Page;
    private readonly cartTableRows: Promise<Locator[]>;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.cartTableRows = this.page
            .locator("tbody tr:nth-child(1) td:nth-child(2) ")
            .all();
    }
    

    //action methods

    async verifyProductInCart(expectedProductName: string) {
        const products = await this.cartTableRows;
        
        for (const product of products) {
            const productName = await product.textContent();
            console.log(productName);
            if (productName?.trim() === expectedProductName) {
                return true;
            }
            return false;
        }
    }
}