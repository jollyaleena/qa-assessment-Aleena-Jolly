import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Modify open orders with large input', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Modify' }).first().click();
    await page.getByRole('spinbutton', { name: 'Amount' }).fill('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
    await page.getByRole('textbox', { name: 'Price' }).click();
    await page.getByRole('textbox', { name: 'Price' }).fill('10000000000000000000000000000000000000000000000000000000000000000000000000000');
    await page.getByRole('button', { name: 'Modify order' }).click();
});