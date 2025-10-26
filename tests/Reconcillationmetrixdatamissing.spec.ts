import { test, expect, devices } from '@playwright/test';
import { Loginpage } from '../pages/login'

test.use({
    ...devices['iPad Mini'],
});

test('Reconcillation page data missing in iPad Mini', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Toggle menu' }).click();
    await page.getByRole('link', { name: 'GoOps NAV, P&L,' }).click();
    await page.getByTestId('goops-reconciliation-tab').click();
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
});