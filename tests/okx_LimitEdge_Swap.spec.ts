import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('test', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_LIMIT_EDGE').click();
    await page.getByTestId('quantity').fill('2');
    await page.getByTestId('duration').fill('10');
    await page.getByTestId('trade-button').click();
    await expect(page.locator('text=Order Accepted')).toBeVisible();
    await expect(page).toHaveScreenshot()
});
