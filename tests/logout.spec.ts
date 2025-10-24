import { test, expect } from '@playwright/test';
import {Loginpage} from '../pages/login'

test('Logout from GoTrade', async ({ page }) => {

  const Login = new Loginpage(page)
  await Login.gotoLoginpage();
  await Login.login('user4@goquant.io','60Re3G9KvvFl4Ihegxpi');
  await Login.logout();
  
});