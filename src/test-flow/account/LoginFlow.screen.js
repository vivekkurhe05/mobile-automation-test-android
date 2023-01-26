import Login from "../../screen-objects/account/Login.screen"

class LoginFlow{
    loginWithCredentials(email, password){
        Login.email_txt_field.setValue(email);
        Login.password_txt_field.setValue(password);
        Login.login_btn.click()
    }

    verify_email_text_field(email){
        expect(Login.email_txt_field).toHaveText(email)
    }
}

export default LoginFlow