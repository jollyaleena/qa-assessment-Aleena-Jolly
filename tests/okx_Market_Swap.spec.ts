import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Market order placed in OKX Swap', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByText('More').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_MARKET').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('0.01');
    await page.getByTestId('trade-button').click();
    await expect(page.locator('text=Order Accepted')).toBeVisible();
    await expect(page).toHaveScreenshot()
});


//working orders