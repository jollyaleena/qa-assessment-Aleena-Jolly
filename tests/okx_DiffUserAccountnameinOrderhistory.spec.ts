import { test, expect, chromium } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Another user account name displaying in Order history account section', async ({ page }) => {
  const Login = new Loginpage(page)
  await Login.gotoLoginpage();
  await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
  await page.getByText('Get Started').click();
  await page.locator('div:nth-child(8) > .font-inter > .absolute').first().click();
  await page.getByTestId('quantity').click();
  await page.getByTestId('quantity').fill('1');
  await page.getByTestId('trade-button').click();
  await page.getByText('delete_EWTXC9').first().click();
  await page.getByRole('button', { name: 'Order History' }).click();
  await page.getByRole('cell', { name: 'delete_EWTXC9' }).first().click();
  await page.getByRole('cell', { name: 'delete_EWTXC9' }).nth(1).click();
  await page.getByTestId('exchange-selector-trigger').click();
  
});