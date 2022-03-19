describe('Learning API', function () {

    it('Toggle switch button', async function () {

        const FORMS_ICON_HOME_SCREEN = '~Forms';
        const SWITCH_BTN = '~switch';
        const TEXT = '~switch-text';

        // 1. Go to the Forms fields
        await $(FORMS_ICON_HOME_SCREEN).click();

        // 2. Toggle the switch button
        await $(SWITCH_BTN).click();

        // 3. Wait to see the result
        await driver.pause(3000);

        // 4. assert
        await expect(await $(TEXT).getText()).toEqual('Click to turn the switch OFF');

        console.log(await $(TEXT).getText());
    })
})