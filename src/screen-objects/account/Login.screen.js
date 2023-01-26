import CredentialFormScreen from '../../screen-objects/account/CredentialForm.screen'
const LOGIN_BTN = '~button-LOGIN'

class Login extends CredentialFormScreen {

    get login_btn () {
        $(LOGIN_BTN).waitForDisplayed({timeout: 5000});
        return $(LOGIN_BTN);
    }
}

export default new Login()