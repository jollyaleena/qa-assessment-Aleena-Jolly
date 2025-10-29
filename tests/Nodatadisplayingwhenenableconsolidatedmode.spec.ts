import { test, expect, devices } from '@playwright/test';
import { Loginpage } from '../pages/login'

test.use({
    ...devices['iPad Mini'],
});

test('Loading is displayed when enable consolidated mode', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByTestId('consolidated-orderbook-toggle').click();
    await page.getByRole('button', { name: 'Last Trades' }).click();
    await page.getByRole('button', { name: 'Order Book' }).nth(1).click();
    await expect(page.locator('text=Consolidated')).toBeVisible();
    await expect(page).toHaveScreenshot()
});