import { Page, Locator } from '@playwright/test'

export class Loginpage {
    page: Page;
    email_textbox: Locator;
    password_textbox: Locator;
    login_button: Locator;


    constructor(page: Page) {
        this.page = page;
        this.email_textbox = page.getByRole('textbox', { name: 'Email' })
        this.password_textbox = page.getByRole('textbox', { name: 'Enter your password' })
        this.login_button = page.getByRole('button', { name: 'Sign In' })
    }

    async gotoLoginpage() {
        await this.page.goto('https://test1.gotrade.goquant.io/auth/login');
    }

    async login(emailid: string, password: string) {
        await this.email_textbox.fill(emailid)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

    async logout() {
        await this.page.getByText('Get Started').click();
        await this.page.getByRole('button', { name: 'user4@goquant.io' }).click();
        await this.page.getByRole('menuitem', { name: 'Sign out' }).click();
    }
}


