import { test, expect, devices } from '@playwright/test';
import { Loginpage } from '../pages/login'

test.use({
    ...devices['iPad Mini'],
});

test('Binance USDM Limit buy and sell order', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('exchange-selector-trigger').click();
    await page.getByTestId('exchange-selector-item-BINANCEUSDM').click();
    await page.getByTestId('BINANCEUSDM-selector-usdm_aleenatest').click();
    await page.getByRole('button', { name: 'Trade', exact: true }).click();
    await page.getByRole('tabpanel', { name: 'Native Trading' }).getByTestId('GOTRADE_ORDERTYPE_MORE').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_LIMIT').click();
    await page.getByRole('button', { name: 'BTCUSDT USDM Perpetuals' }).click();
    await page.getByPlaceholder('Search symbol...').fill('xrp');
    await page.getByText('XRPUSDT').click();
    await page.getByRole('textbox', { name: 'Enter quantity in XRP' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in XRP' }).fill('10');
    await page.getByRole('button', { name: 'Trade' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in XRP' }).click();
    await page.getByRole('textbox', { name: 'Enter quantity in XRP' }).fill('10');
    await page.getByRole('textbox', { name: 'Price' }).click();
    await page.getByRole('textbox', { name: 'Price' }).fill('10');
    await page.getByRole('button', { name: 'Sell' }).click();
    await page.getByRole('button', { name: 'Trade' }).click();

});