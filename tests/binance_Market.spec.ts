import { test, expect, devices } from '@playwright/test';
import { Loginpage } from '../pages/login'

test.use({
    ...devices['Pixel 5'],
});

test('Binance USDM Market buy and sell order ', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('exchange-selector-trigger').click();
    await page.getByTestId('exchange-selector-item-BINANCEUSDM').click();
    await page.getByTestId('BINANCEUSDM-selector-usdm_aleenatest').click();
    await page.getByRole('button', { name: 'Trade', exact: true }).click();
    await page.getByRole('button', { name: 'BTCUSDT USDM Perpetuals' }).click();
    await page.getByPlaceholder('Search symbol...').fill('dotus');
    await page.getByText('DOTUSDT').click();
    await page.getByRole('tabpanel', { name: 'Native Trading' }).getByTestId('GOTRADE_ORDERTYPE_MORE').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_MARKET').click();
    await page.getByRole('textbox', { name: 'Enter quantity in DOT' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in DOT' }).fill('2');
    await page.getByRole('button', { name: 'Trade' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in DOT' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in DOT' }).fill('2');
    await page.getByRole('button', { name: 'Sell' }).click();
    await page.getByRole('button', { name: 'Trade' }).click();
});