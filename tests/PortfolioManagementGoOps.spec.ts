import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('test', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Accounts', exact: true }).click();
    await page.getByRole('link', { name: 'GoOps NAV, P&L,' }).click();
    await page.getByRole('heading', { name: 'aleenatest_okx' }).click();
    await page.getByText('accounts').nth(2).click();
    await page.getByRole('heading', { name: 'aleena_usdm' }).click();
    await page.getByText('Connected').nth(3).click();
    await page.getByTestId('goops-metrics-tab').click();
    await page.getByTestId('goops-reconciliation-tab').click();
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
    await page.getByRole('combobox').nth(2).click();
    await page.getByLabel('aleenatest_okx').getByText('aleenatest_okx').click();
});