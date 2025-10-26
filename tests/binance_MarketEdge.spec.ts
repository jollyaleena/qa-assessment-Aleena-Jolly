import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Binance USDM Market Edge buy and sell trade ', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('exchange-selector-trigger').click();
    await page.getByTestId('exchange-selector-item-BINANCEUSDM').click();
    await page.getByTestId('BINANCEUSDM-selector-usdm_aleenatest').click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('dotus');
    await page.getByText('DOTUSDT').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('2');
    await page.getByTestId('duration').click();
    await page.getByTestId('duration').fill('5');
    await page.getByTestId('trade-button').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('2');
    await page.getByTestId('duration').click();
    await page.getByTestId('duration').fill('2');
    await page.getByTestId('short-button').click();
    await page.getByTestId('trade-button').click();
});