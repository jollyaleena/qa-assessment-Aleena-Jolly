import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('GoMarket page not responsive message display on select', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Markets' }).click();
    await page.getByRole('link', { name: 'GoMarket Live Feed,' }).click();
    await page.getByRole('button', { name: 'Skip' }).click();
    await page.getByTestId('dropdown-trigger:exchange-selector').click();
    await page.locator('html').click();
    await page.getByTestId('dropdown-trigger:exchange-selector').click();
});