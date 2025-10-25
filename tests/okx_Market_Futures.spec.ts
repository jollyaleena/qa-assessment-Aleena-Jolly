import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('test', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('btc-usdt');
    await page.getByTestId('symbol-option-BTC-USDT-251031').click();
    await page.getByText('More').click();
    await page.locator('div:nth-child(2) > .absolute').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('1');
    await page.getByTestId('trade-button').click();
});