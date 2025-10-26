import { test, expect, devices } from '@playwright/test';
import { Loginpage } from '../pages/login'

test.use({
    ...devices['iPad Mini'],
});

test('Binance order with larger inputs', async ({ page }) => {
    test.setTimeout(60000);
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
    await page.getByRole('textbox', { name: 'Enter quantity in DOT' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in DOT' }).fill('2e+210');
    await page.getByRole('textbox', { name: 'Enter duration' }).click();
    await page.getByRole('textbox', { name: 'Enter duration' }).click();
    await page.getByRole('textbox', { name: 'Enter duration' }).fill('2,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,0000');
    await page.getByRole('tabpanel', { name: 'Native Trading' }).locator('form').click();
    await page.getByRole('button', { name: 'Trade' }).click();
});