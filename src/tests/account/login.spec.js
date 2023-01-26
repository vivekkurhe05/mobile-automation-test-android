const LoginScreen = require("../../screen-objects/account/Login.screen")

describe('', function () {

    it('should raise an error for wrong credentials', async function () {

        // 1. Click on Login Icon from Home Screen
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        await $(LOGIN_ICON_HOME_SCREEN).click();

        // 2. Use Login screen object to interact with elements
        await LoginScreen.email_txt_field.setValue('teo');
        await LoginScreen.password_txt_field.setValue('');
        await LoginScreen.login_btn.click();

        await browser.pause(5000);
    })
})

// 1. Start appium server - appium -p 4724
// 2. Lauch emulator device on your machine
// 3. Run npx wdio command