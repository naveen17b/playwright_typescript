import { Page, Locator } from "@playwright/test";

export class LoginPage {
  //define Locators
  private readonly page: Page;
  private readonly loginlink: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly closeButton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.loginlink = this.page.locator("#login2");
    this.usernameInput = this.page.locator("#loginusername");
    this.passwordInput = this.page.locator("#loginpassword");
    // this.loginButton = this.page.locator("button:has-text('Log in')");
    this.loginButton = this.page.locator("button[onclick='logIn()']");
    //   this.closeButton = this.page.locator("button[onclick='hideLoginModal()']");
    this.closeButton = this.page.locator(
      "await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();",
    );
  }

  //action methods
  async navigateToLogin() {
    await this.loginlink.click();
  }

  async enterUserName(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickOnLoginButton() {
    await this.loginButton.click();
  }

  async clickOnCloseButton() {
    await this.closeButton.click();
  }

  //one consolidated method to login
  async loginToApplication(username: string, password: string) {
    await this.navigateToLogin();
    await this.enterUserName(username);
    await this.enterPassword(password);
    await this.clickOnLoginButton();
    // await this.clickOnCloseButton();
  }
}
