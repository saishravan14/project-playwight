import { expect } from '@playwright/test';
import { test } from '../fixtures/pom-fixture';

test('User Registration', async ({ registerPageFixt, page, loginPageFixt }) => {
    const loginname = `${process.env.USER_NAME}`;
    const firstname = `${process.env.FIRST_NAME}`;
    const lastname = `${process.env.LAST_NAME}`;
    const password = `${process.env.PASSWORD}`;
    const confirmPassword = `${process.env.PASSWORD}`;
    await loginPageFixt.gotoURL();
    await registerPageFixt.registration(loginname, firstname, lastname, password, confirmPassword);
    await expect(registerPageFixt.RegiBtn).toBeEnabled();
    await registerPageFixt.register();
});

