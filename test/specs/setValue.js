describe('Learning WebdriverIO API', function () {
    it('should input username and password', async function () {

        // Declare element selector values
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TXT_FIELD = '~input-email'
        const PASSWORD_TXT_FIELD = '~input-password'
        const LOGIN_BTN = '~button-LOGIN'

        // 1. Click on Login on Home Screen
        await $(LOGIN_ICON_HOME_SCREEN).click();

        // 2. Fill email text field
        await $(EMAIL_TXT_FIELD).setValue('a@a.com');

        // 3. Fill password text field
        await $(PASSWORD_TXT_FIELD).setValue('12345678');

        // 4. Click on Login button
        await $(LOGIN_BTN).click();

        await browser.pause(3000);
    })

})