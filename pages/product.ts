import { expect, Locator, Page } from "@playwright/test";
export class Product {
    readonly page: Page;
    readonly popularMake: Locator;
    readonly popularModel: Locator;
    readonly overallrating: Locator;
    readonly popularMakeTitle: Locator;
    readonly popularModelTitle: Locator;
    readonly overallratingval: Locator;
    readonly pagination: Locator;
    readonly homebutton: Locator;
    /**
     * Initialize the Product page object and its locators for the Popular Make/Model and ratings sections.
     * @param page Playwright `Page` instance used to interact with the product pages
     */
    constructor(page: Page) {
        this.page = page;
        this.popularMake = page.getByRole('link', { name: 'Lamborghini' });
        this.popularModel = page.getByRole('link', { name: 'Diablo' });
        this.overallrating = page.getByRole('link').nth(5);
        this.popularMakeTitle = page.getByRole('heading', { name: 'Lamborghini' });
        this.popularModelTitle = page.getByRole('heading', { name: 'Diablo' });
        this.overallratingval = page.getByRole('columnheader', { name: 'Rank' });
        this.pagination = page.getByRole('textbox');
        this.homebutton = page.getByRole('link', { name: 'Buggy Rating' });
    }

    /**
     * Validate navigation and pagination behavior for the Popular Make section.
     * - Clicks the popular make link
     * - Verifies the make title and pagination are visible
     * - Advances the pagination and asserts presence of expected model link
     * @returns Promise<void>
     */
    async popularMakevalidation() {
        await this.popularMake.click();
        await expect(this.popularMakeTitle).toContainText('Lamborghini');
        expect(this.pagination).toBeVisible();
        await this.page.getByText('»').click();
        await this.page.waitForTimeout(3000);
        expect(this.page.getByRole('link', { name: 'GALLARDO', exact: true })).toBeVisible();
    }

    /**
     * Validate page navigation for a Popular Model.
     * - Clicks the popular model link and waits for network idle
     * - Asserts the model title and returns to the home page
     * @returns Promise<void>
     */
    async popularModelvalidation() {
        await this.popularModel.click();
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
        ]);
        await expect(this.popularModelTitle).toContainText('Diablo');
        await this.homebutton.click();
    }

    /**
     * Validate navigation for the Overall Rating section.
     * - Clicks the overall rating link, waits for load, asserts the ratings column header is visible
     * - Returns to the home page
     * @returns Promise<void>
     */
    async overallratingValidation() {
        await this.overallrating.click();
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
        ]);
        await expect(this.overallratingval).toBeVisible();
        await this.homebutton.click();
    }



}