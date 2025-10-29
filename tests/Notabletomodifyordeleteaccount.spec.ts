import { test, expect, devices } from '@playwright/test';
import { Loginpage } from '../pages/login'

test.use({
    ...devices['iPhone 11'],
});

test('Delete/modify option is not display in iPhone 11 account section', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Toggle menu' }).click();
    await page.getByRole('link', { name: 'Admin Manage trading accounts' }).click();
    await page.locator('.flex.h-auto > button:nth-child(3)').click();
    await page.locator('.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-sm.text-sm.font-medium.transition-colors.focus-visible\\:outline-none.focus-visible\\:border-2.border-transparent.focus-visible\\:border-primary.disabled\\:pointer-events-none.disabled\\:cursor-not-allowed.disabled\\:opacity-40.hover\\:bg-accent.hover\\:text-accent-foreground.outline-none.h-10').first().click();
    await page.locator('.flex.h-auto > button:nth-child(3)').click();
    await expect(page.locator('text=Add Account')).toBeVisible();
    await expect(page).toHaveScreenshot()
});