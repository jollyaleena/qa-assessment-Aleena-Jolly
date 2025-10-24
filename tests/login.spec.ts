import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Login to GoTrade', async ({ page }) => {

  const Login = new Loginpage(page)
  await Login.gotoLoginpage();
  await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');


  // await page.getByRole('textbox', { name: 'Email' }).fill('user4@goquant.io');

  // await page.getByRole('textbox', { name: 'Enter your password' }).fill('60Re3G9KvvFl4Ihegxpi');
  // await page.getByRole('button', { name: 'Sign In' }).click();
});
