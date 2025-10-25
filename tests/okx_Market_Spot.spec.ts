import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Market order placed in OKX Spot', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('btc-usd');
    await page.locator('div').filter({ hasText: /^BTC-USDT$/ }).click();
    await page.getByTestId('native-trading').getByText('More').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_MARKET').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('1');
    await page.getByTestId('trade-button').click();
});

//orders table