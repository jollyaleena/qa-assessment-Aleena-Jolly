import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('No data displaying when select GoRisk and Posttrade analytics', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Trading' }).click();
    await page.getByRole('button', { name: 'Trading' }).click();
    await page.getByRole('link', { name: 'Post-Trade Analytics TCA (' }).click();
    await page.locator('#radix-_r_9_-trigger-radix-_r_a_').click();
    await page.getByRole('link', { name: 'GoRisk VaR, Margin, Exposure' }).click();
});