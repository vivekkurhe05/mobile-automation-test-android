describe('Learning WebdriverIO API', function () {

    it('Learn getValue API', async function () {

        const FORM_ICON_HOME_SCREEN = '~Forms'
        const INPUT_TXT_FIELD = '~text-input'

        // 1. Click on Form icon from Home Screen
        await $(FORM_ICON_HOME_SCREEN).click();

        // 2. Try to input some value in text field
        await $(INPUT_TXT_FIELD).setValue('abc');

        // 3. Get the value from that field
        let value = await $(INPUT_TXT_FIELD).getText();

        // 4. Print that value
        console.log(value);
    })
})