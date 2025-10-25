import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Twap Edge order placed in OKX Spot', async ({ page }) => {
    //   test.setTimeout(90000);
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('btc-usdt');
    await page.locator('div').filter({ hasText: /^BTC-USDT$/ }).click();
    await page.getByTestId('native-trading').getByTestId('GOTRADE_ORDERTYPE_TWAP_EDGE').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('0.002');
    await page.getByTestId('duration').click();
    await page.getByTestId('duration').fill('20');
    await page.getByTestId('interval').click();
    await page.getByTestId('interval').fill('2');
    await page.getByTestId('trade-button').click();
});