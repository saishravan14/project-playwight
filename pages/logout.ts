import { Locator, Page } from "@playwright/test";
export class Logout {
    readonly page: Page;
    readonly LogoutLink: Locator;
    /**
     * Initialize the Logout page object and its locator(s).
     * @param page Playwright `Page` instance used to interact with the application
     */
    constructor(page: Page) {
        this.page = page;
        this.LogoutLink = page.getByRole('link', { name: 'Logout' });
    }

    /**
     * Click the logout link to sign the current user out.
     * Waits for the click action to be dispatched; does not perform any further assertions.
     * @returns Promise<void>
     */
    async logout() {
        await this.LogoutLink.click();
    }
}