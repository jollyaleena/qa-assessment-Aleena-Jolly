import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Binance Order history', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('exchange-selector-trigger').click();
    await page.getByTestId('exchange-selector-item-BINANCEUSDM').click();
    await page.getByTestId('BINANCEUSDM-selector-usdm_aleenatest').click();
    await page.getByTestId('bid-price-6').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('1');
    await page.getByTestId('trade-button').click();
    await page.getByRole('button', { name: 'Modify' }).first().click();
    await page.locator('div').filter({ hasText: /^Amount$/ }).click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('2');
    await page.getByRole('button', { name: 'Modify order' }).click();
    await page.getByRole('textbox', { name: 'Price' }).fill('10');
    await page.getByRole('button', { name: 'Modify order' }).click();
    await page.getByRole('button', { name: 'Order History' }).click();
    await page.getByRole('button', { name: 'Cancel' }).nth(2).click();
    await page.getByRole('button', { name: 'Open Positions' }).click();
    await page.getByRole('button', { name: 'Assets' }).click();
    await page.getByRole('button', { name: 'Working Orders', exact: true }).click();
});