describe('Learning WebdriverIO API', function () {

    it('addValue API', async function () {

        // Declare element selector values
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TXT_FIELD = '~input-email'

        // 1. Click on Login on Home Screen
        await $(LOGIN_ICON_HOME_SCREEN).click();

        // 2. Fill email text field
        await $(EMAIL_TXT_FIELD).addValue('a@a');
        await $(EMAIL_TXT_FIELD).addValue('.com');

        // 3. Demonstrate about setValue
        await $(EMAIL_TXT_FIELD).setValue('new@a.com')

        // 4. Clear the text field
        await $(EMAIL_TXT_FIELD).clearValue();

        await browser.pause(3000);
    })
})