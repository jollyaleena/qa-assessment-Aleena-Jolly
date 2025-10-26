import { test, expect, devices } from '@playwright/test';
import { Loginpage } from '../pages/login'

test.use({
    ...devices['iPhone 11'],
});

test('Binance USDM Twap Edge buy and sell order', async ({ page }) => {
    test.setTimeout(60000);
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('exchange-selector-trigger').click();
    await page.getByTestId('exchange-selector-item-BINANCEUSDM').click();
    await page.getByTestId('BINANCEUSDM-selector-usdm_aleenatest').click();
    await page.getByRole('button', { name: 'Trade', exact: true }).click();
    await page.getByRole('button', { name: 'TWAP-Edge' }).click();
    await page.getByRole('button', { name: 'BTCUSDT USDM Perpetuals' }).click();
    await page.getByPlaceholder('Search symbol...').fill('adau');
    await page.getByText('ADAUSDT').click();
    await page.getByRole('textbox', { name: 'Enter quantity in ADA' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in ADA' }).fill('10');
    await page.getByRole('textbox', { name: 'Enter duration' }).click();
    await page.getByRole('textbox', { name: 'Enter duration' }).fill('5');
    await page.getByRole('textbox', { name: 'Interval' }).click();
    await page.getByRole('textbox', { name: 'Interval' }).fill('5');
    await page.getByRole('button', { name: 'Trade' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in ADA' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in ADA' }).fill('10');
    await page.getByRole('textbox', { name: 'Enter duration' }).click();
    await page.getByRole('textbox', { name: 'Enter duration' }).fill('5');
    await page.getByRole('textbox', { name: 'Interval' }).click();
    await page.getByRole('textbox', { name: 'Interval' }).fill('5');
    await page.getByRole('button', { name: 'Sell' }).click();
    await page.getByRole('button', { name: 'Trade' }).click();
});