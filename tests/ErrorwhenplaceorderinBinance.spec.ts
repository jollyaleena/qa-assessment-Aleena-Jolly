import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('No response from UDP server displayed when place Binance order', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('exchange-selector-trigger').click();
    await page.getByTestId('exchange-selector-item-BINANCEUSDM').click();
    await page.getByTestId('BINANCEUSDM-selector-usdm_aleenatest').click();
    await page.getByText('More').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_MARKET').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('1');
    await page.getByTestId('trade-button').click();
    
});