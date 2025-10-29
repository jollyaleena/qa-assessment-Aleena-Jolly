import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Error message display when try to modify existing account', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Accounts', exact: true }).click();
    await page.getByRole('link', { name: 'Admin Manage trading accounts' }).click();
    await page.getByTestId('venues-table-cell-2-accountAction').getByRole('button', { name: 'Modify' }).click();
    await page.getByRole('textbox', { name: 'Binance USDⓈ-M Account Name' }).click();
    await page.getByRole('textbox', { name: 'Binance USDⓈ-M Account Name' }).fill('aleena_usdm1');
    await page.getByRole('textbox', { name: 'Enter your Binance USDⓈ-M' }).click();
    await page.getByRole('textbox', { name: 'Enter your Binance USDⓈ-M' }).fill('qy7vBwm4WcNKl2oM1yi3kD9nXvCUo7oYOxeUa4wv5f5nIfMNxHOCYsFW9NoNTU50');
    await page.getByRole('button', { name: 'Edit Account' }).click();
    await expect(page.locator('text=delete_credentials')).toBeVisible();
    await expect(page).toHaveScreenshot()
});