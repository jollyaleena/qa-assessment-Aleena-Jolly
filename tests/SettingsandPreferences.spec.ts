import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Settings and Prefrences check', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Accounts', exact: true }).click();
    await page.getByRole('link', { name: 'Settings Application settings' }).click();
    await page.getByRole('tab', { name: 'Shortcuts' }).click();
    await page.getByRole('tab', { name: 'Trading' }).click();
    await page.getByRole('tab', { name: 'Sounds' }).click();
    await page.getByRole('button', { name: 'Test All Sounds' }).click();
});