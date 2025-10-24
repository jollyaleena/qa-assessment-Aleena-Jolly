import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Invalid email and password', async ({ page }) => {

    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user124@goquant.io', '609KvvFl4Ihegxpi');
    await expect(page.locator('text=The user was not found in the system')).toBeVisible();
    await expect(page).toHaveScreenshot()

});