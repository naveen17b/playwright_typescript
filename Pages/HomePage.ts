import { Page, Locator } from "@playwright/test";

export class HomePage {
  // Define Locators
  private readonly page: Page;
  private readonly productsList: Promise<Locator[]>;
  private readonly addToCartLink: Locator;
  private readonly cartLink: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.productsList = this.page
      .locator("div#tbodyid div.card h4.card-title a")
      .all();
    this.addToCartLink = this.page.locator("a:has-text('Add to cart')");
    this.cartLink = this.page.locator("#cartur");
  }

  //Action methods
  async addProductToCart(addProductToCart: string) {
    const productElements = this.productsList;

    for (const product of await productElements) {
      const name = await product.textContent();

      if (name?.trim() === addProductToCart) {
        await product.click();
        break;
      }

      //handling dialog box
      this.page.on("dialog", async (dialog) => {
        if (dialog.message().includes("Product added")) {
          await dialog.accept();
        }
      });
    }
  }

  async cliskccartLink() {
    await this.cartLink.click();
  }
}
