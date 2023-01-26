import LoginScreen from '../../screen-objects/account/Login.screen'

describe('Account functions', function () {

    it('should use inherited PO successfully', async function () {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        await $(LOGIN_ICON_HOME_SCREEN).click();

        LoginScreen.wait_till_screen_displayed();
        await LoginScreen.email_txt_field.setValue('a@a.com');
        await LoginScreen.password_txt_field.setValue('12345678');
        await LoginScreen.login_btn.click();
    })
})