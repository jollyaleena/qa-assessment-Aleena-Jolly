import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Binance COINM Limit edge buy and sell trade', async ({ page }) => {
     test.setTimeout(60000);
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('exchange-selector-trigger').click();
    await page.getByTestId('exchange-selector-item-BINANCECOINM').click();
    await page.getByTestId('BINANCECOINM-selector-coinm_aleenatest').click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('xr');
    await page.getByText('XRPUSD_PERP').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('5');
    await page.getByTestId('duration').click();
    await page.getByTestId('duration').fill('5');
    await page.getByTestId('trade-button').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('5');
    await page.getByTestId('duration').click();
    await page.getByTestId('duration').fill('5');
    await page.getByTestId('short-button').click();
    await page.getByTestId('trade-button').click();
});