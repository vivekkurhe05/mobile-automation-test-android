describe('Learning WebdriverIO API', function () {
    it('should click on login icon successfully', async function () {

        const LOGIN_ICON = '~Login';
        await $(LOGIN_ICON).click();

        const TEXT = await $('//android.widget.TextView[@text="Login / Sign up Form"]');
        expect(TEXT).toHaveText('Login / Sign up Form');
    })
})