import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Display Orderbook,Chart,Market Depth in OKX all types ', async ({ page }) => {
    test.setTimeout(60000);
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Chart' }).click();
    await page.getByRole('button', { name: 'Order Book' }).click();
    await page.getByRole('heading', { name: 'Last Trades' }).click();
    await page.getByRole('heading', { name: 'Spread' }).click();
    await page.getByRole('heading', { name: 'Market Depth' }).click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('btc-us');
    await page.locator('div').filter({ hasText: /^BTC-USDT$/ }).click();
    await page.getByRole('button', { name: 'Chart' }).click();
    await page.getByRole('button', { name: 'Order Book' }).click();
    await page.getByRole('heading', { name: 'Market Depth' }).click();
    await page.getByRole('heading', { name: 'Spread' }).click();
    await page.locator('.flex.w-full.items-center.justify-between.px-\\[0\\.68rem\\]').click();
    await page.getByTestId('symbols-dropdown').click();
    await page.getByPlaceholder('Search symbol...').fill('btc-usdt');
    await page.getByTestId('symbol-option-BTC-USDT-251031').getByText('BTC-USDT-').click();
    await page.getByRole('button', { name: 'Chart' }).click();
    await page.getByRole('button', { name: 'Order Book' }).click();
    await page.getByRole('heading', { name: 'Market Depth' }).click();
    await page.getByRole('heading', { name: 'Spread' }).click();
    await page.getByText('Net Asset Value').click();
    await page.getByText('Asset Utilization').click();
    await page.getByText('+$').click();
});