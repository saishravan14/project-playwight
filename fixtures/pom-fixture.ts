import { test as baseTest } from '@playwright/test';
import { Regiterpage } from '../pages/registration'
import { Login } from '../pages/login';
import { Product } from '../pages/product';
import { Profile } from '../pages/profileform';
import { Logout } from '../pages/logout';


type pomfixturetype = {
    registerPageFixt: Regiterpage;
    loginPageFixt: Login;
    productFixt: Product;
    profileFixt: Profile;
    logoutFixt: Logout;
};

export const test = baseTest.extend<pomfixturetype>({
    registerPageFixt: async ({ page }, use) => {
        await use(new Regiterpage(page));
    },
    loginPageFixt: async ({ page }, use) => {
        await use(new Login(page));
    },
    productFixt: async ({ page }, use) => {
        await use(new Product(page));
    },
    profileFixt: async ({ page }, use) => {
        await use(new Profile(page));
    },
    logoutFixt: async ({ page }, use) => {
        await use(new Logout(page));
    }
})