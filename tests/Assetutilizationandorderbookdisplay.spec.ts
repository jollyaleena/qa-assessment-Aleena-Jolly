import { test, expect, devices } from '@playwright/test';
import { Loginpage } from '../pages/login'

test.use({
    ...devices['iPhone 11'],
});

test('Asset utilization and order book display in iPhone 11', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByText('Price(USDT)Amount (Cts.)Total (Cts.)112,440.000.010000.01000112,438.900.010000.').click();
    await page.getByText('$84,349.65').click();
});