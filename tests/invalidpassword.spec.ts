import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Invalid Login password', async ({ page }) => {

    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60G9KvvFl4Ihegxpi');
    await expect(page.locator('text=The password is invalid')).toBeVisible();
    await expect(page).toHaveScreenshot()

});
