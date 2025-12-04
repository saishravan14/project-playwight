import { expect, type Page } from '@playwright/test';
import { test } from '../fixtures/pom-fixture';
import { Login } from '../pages/login';
import { Logout } from '../pages/logout';
const authpath = './playwright/.auth/auth.json'

test.describe('productvalidation', () => {
    let page: Page
    test.beforeAll('all', async ({ browser }) => {
        const username = `${process.env.USER_NAME}`;
        const password = `${process.env.PASSWORD}`;
        page = await browser.newPage();
        const login = new Login(page);
        await login.gotoURL();
        await login.login(username, password);
        await page.waitForLoadState('networkidle');
        await expect(page.locator('span.nav-link.disabled')).toBeVisible();
        await page.context().storageState({
            path: authpath
        });
    })
    test.use({ storageState: './playwright/.auth/auth.json' });
    test('productvalidation', async ({ productFixt, page, loginPageFixt }) => {
        await loginPageFixt.gotoURL();
        await productFixt.popularMakevalidation();
        await loginPageFixt.gotoURL();
        await productFixt.popularModelvalidation();
        await productFixt.overallratingValidation();
    });

    test.afterAll('logout', async ({ browser }) => {
        page = await browser.newPage();
        const login = new Login(page);
        const logout = new Logout(page);
        await login.gotoURL();
        await logout.logout();
    })
})