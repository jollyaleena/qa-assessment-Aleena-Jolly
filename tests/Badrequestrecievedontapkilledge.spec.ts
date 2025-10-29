import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Bad request recieved when tap on Kill edge', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Kill-Edge' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await expect(page.locator('text=Request failed')).toBeVisible();
    await expect(page).toHaveScreenshot()
});