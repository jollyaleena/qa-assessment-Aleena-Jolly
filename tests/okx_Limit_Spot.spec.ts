import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Limit order placed in OKX Spot ', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('btc-usdt');
    await page.locator('div').filter({ hasText: /^BTC-USDT$/ }).click();
    await page.getByTestId('native-trading').getByTestId('GOTRADE_ORDERTYPE_MORE').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_LIMIT').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('0.01');
    await page.getByTestId('trade-button').click();
});

//orders table