import { expect, Locator, Page } from "@playwright/test";

export class Regiterpage {
    readonly page: Page;
    readonly RegisterBtn: Locator;
    readonly LoginInput: Locator;
    readonly FirstNameInput: Locator;
    readonly LastNameInput: Locator;
    readonly PasswordInput: Locator;
    readonly ConfirmPasswordInput: Locator;
    readonly RegiBtn: Locator;
    readonly RegSucessNotification: Locator;
    /**
     * Initialize the Registration page object and its locators.
     * @param page Playwright `Page` instance used to interact with the application
     */
    constructor(page: Page) {
        this.page = page;
        this.RegisterBtn = page.getByRole('link', { name: 'Register' });
        this.LoginInput = page.getByLabel('Login');
        this.FirstNameInput = page.getByRole('textbox', { name: 'First Name' });
        this.LastNameInput = page.getByRole('textbox', { name: 'Last Name' });
        this.PasswordInput = page.getByRole('textbox', { name: 'Password', exact: true });
        this.ConfirmPasswordInput = page.getByRole('textbox', { name: 'Confirm Password' });
        this.RegiBtn = page.getByRole('button', { name: 'Register' });
        this.RegSucessNotification = page.getByText('Registration is successful');
    }

    /**
     * Fill registration form fields (does not submit the form).
     * Call `register()` to submit after filling the fields.
     * @param loginname - login/username to register
     * @param firstname - user's first name
     * @param lastname - user's last name
     * @param password - password to set for the account
     * @param confirmPass - password confirmation value (should match `password`)
     * @returns Promise<void>
     */
    async registration(loginname: string, firstname: string, lastname: string, password: string, confirmPass: string) {
        await this.RegisterBtn.click();
        await this.LoginInput.fill(loginname);
        await this.FirstNameInput.fill(firstname);
        await this.LastNameInput.fill(lastname);
        await this.PasswordInput.fill(password);
        await this.ConfirmPasswordInput.fill(confirmPass);
    }

    /**
     * Submit the registration form by clicking the register button.
     * Use this after calling `registration(...)` to perform the actual submit.
     * @returns Promise<void>
     */
    async register() {
        await this.RegiBtn.click();
    }
}