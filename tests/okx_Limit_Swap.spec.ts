import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Limit order placed in OKX Swap ', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByText('More').click();
    await page.getByTestId('GOTRADE_ORDERTYPE_LIMIT').click();
    await page.getByTestId('quantity').click();
    await page.getByTestId('quantity').fill('2');
    await page.getByTestId('trade-button').click();
});


//working orders