import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Display Orderbook,Chart,Market Depth in Binance all types', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('exchange-selector-trigger').click();
    await page.getByTestId('exchange-selector-item-BINANCEUSDM').click();
    await page.getByTestId('BINANCEUSDM-selector-usdm_aleenatest').click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('dotu');
    await page.getByText('DOTUSDT').click();
    await page.getByRole('button', { name: 'Chart' }).click();
    await page.getByRole('button', { name: 'Order Book' }).click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('xrp');
    await page.getByText('XRPUSDT').click();
    await page.getByRole('button', { name: 'Chart' }).click();
    await page.getByRole('button', { name: 'Order Book' }).click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('ada');
    await page.getByText('ADAUSDT').click();
    await page.getByRole('button', { name: 'Chart' }).click();
    await page.getByRole('button', { name: 'Order Book' }).click();
    await page.getByText('$5,000.00').click();
});