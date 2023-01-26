import DashboardScreen from "./Dashboard.screen";

const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'

class LoginWithMethodChaining {

    wait_till_screen_displayed(){
        // by default it will call global wait 10000 from config file
        $(EMAIL_TXT_FIELD).waitForDisplayed();
        return this
    }

    async input_email(email){
        await $(EMAIL_TXT_FIELD).setValue(email)
        return this
    }

    async input_password(password){
        await $(PASSWORD_TXT_FIELD).setValue(password)
        return this
    }

    async click_on_login_btn(){
        await $(LOGIN_BTN).click();
        return DashboardScreen
    }
}

export default new LoginWithMethodChaining();