import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Order placed when turn OFF network', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.locator('.lucide.lucide-chevron-down.ml-1.w-\\[0\\.8rem\\]').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_MARKET').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('1');
    await page.getByTestId('trade-button').click();
});