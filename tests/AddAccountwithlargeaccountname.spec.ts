import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/login'

test('Adding account with large name and delete same account UI not good', async ({ page }) => {
    const Login = new Loginpage(page)
    await Login.gotoLoginpage();
    await Login.login('user4@goquant.io', '60Re3G9KvvFl4Ihegxpi');
    await page.getByText('Get Started').click();
    await page.getByRole('button', { name: 'Accounts', exact: true }).click();
    await page.getByRole('link', { name: 'Admin Manage trading accounts' }).click();
    await page.getByTestId('venues-button-addaccount').click();
    await page.getByTestId('dropdown-trigger:exchange-selector').click();
    await page.getByTestId('exchange-option-BINANCEUSDM').getByText('Binance USDⓈ-M').click();
    await page.getByTestId('account-name-input').click();
    await page.getByTestId('account-name-input').fill('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    await page.getByTestId('input-api-key').click();
    await page.getByTestId('input-api-key').click();
    await page.getByTestId('input-api-key').fill('QB3ijSDOlLqIF1VoISuGlgEE1WnFM48TgzJWzXQ7Z03DQxFYrXEviMBj0Oi2felr');
    await page.getByTestId('input-api-secret').click();
    await page.getByTestId('input-api-secret').fill('qy7vBwm4WcNKl2oM1yi3kD9nXvCUo7oYOxeUa4wv5f5nIfMNxHOCYsFW9NoNTU50');
    await page.getByTestId('test-mode-switch').click();
    await page.getByTestId('button-submit-account').click();
    await page.getByTestId('button-submit-account').click();
    await page.getByTestId('button-submit-account').click();
    await page.getByTestId('delete-account-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').click();
    await page.getByTestId('delete-account-dialog-delete-confirmation').press('CapsLock');
    await page.getByTestId('delete-account-dialog-delete-confirmation').fill('DELETE');
    await page.getByTestId('delete-account-dialog-delete').click();
});