import LoginPage from '../../screen-objects/account/LoginWithMethodChaining.screen'

describe('Learn Page Object', function () {

    before( async () => {
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        await $(LOGIN_ICON_HOME_SCREEN).click();
    })

    it('should use method chaining successfully', function () {

        return LoginPage
        .wait_till_screen_displayed()
        .input_email('a@a.com')
        .input_password('12345678')
        .click_on_login_btn()
        .get_dashboard_name();
    })
})