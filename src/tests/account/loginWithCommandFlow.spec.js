import LoginFlowScreen from "../../test-flow/account/LoginFlow.screen"
import testdata from "../../test_data/account/loginWithCommandFlow"

describe('Login function', function(){
    it('should check email text field', function(){

        const {INVALID_CREDS} = testdata.LOGIN_DATA
        const {email, password} = INVALID_CREDS

        let loginFlow = new LoginFlowScreen();

        loginFlow.loginWithCredentials(email, password);
        loginFlow.verify_email_text_field(email)
    })
})