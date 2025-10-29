import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Authentication failed message when add binance aacount', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Accounts', exact: true }).click();
    await page.getByRole('link', { name: 'Admin Manage trading accounts' }).click();
    await page.getByTestId('venues-button-addaccount').click();
    await page.getByTestId('dropdown-trigger:exchange-selector').click();
    await page.getByTestId('exchange-option-BINANCEUSDM').click();
    await page.getByTestId('account-name-input').click();
    await page.getByTestId('account-name-input').fill('bin_005');
    await page.getByTestId('input-api-key').click();
    await page.getByTestId('input-api-key').fill('aiuUYlRlYzIUKO8SNghoYWQvfg7RkRQxqqgJ7wxKVUVcVyuxtPihQQ2mW8Z1p8Qr');
    await page.getByTestId('input-api-secret').click();
    await page.getByTestId('input-api-secret').fill('ZmPeduub4v7HchGqkiwFfW6yN7yS29p3RIFUAL6Q72y5FHA9Eqy2FwS1t4zDNxvY');
    await page.getByTestId('test-mode-switch').click();
    await page.getByTestId('button-submit-account').click();
    await expect(page.locator('text=Authentication failed')).toBeVisible();
    await expect(page).toHaveScreenshot()
});