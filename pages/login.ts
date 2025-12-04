import { Locator, Page } from "@playwright/test";
export class Login {
    readonly page: Page;
    readonly UserName: Locator;
    readonly Password: Locator;
    readonly LoginBtn: Locator;
    /**
     * Create page object and initialize locators for the Login page.
     * @param page Playwright `Page` instance used to perform actions and queries.
     */
    constructor(page: Page) {
        this.page = page;
        this.UserName = page.getByRole('textbox', { name: 'Login' });
        this.Password = page.locator('input[name="password"]');
        this.LoginBtn = page.getByRole('button', { name: 'Login' });
    }

    /**
     * Navigate to the application base URL defined by `process.env.BASE_URL`.
     * Resolves when navigation completes or rejects if navigation fails.
     * @returns Promise<void>
     */
    async gotoURL() {
        await this.page.goto(`${process.env.BASE_URL}`);
    }

    /**
     * Perform login using the provided credentials.
     * This fills the username and password fields and clicks the login button.
     * @param username - user's login identifier to enter in the username field
     * @param password - user's password to enter in the password field
     * @returns Promise<void>
     */
    async login(username: string, password: string) {
        await this.UserName.fill(username);
        await this.Password.fill(password);
        await this.LoginBtn.click();
    }
}
