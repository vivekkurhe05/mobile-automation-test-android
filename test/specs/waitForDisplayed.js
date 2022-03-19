describe('Learning API', function () {

    it('should', async function () {

        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const SWITCH_BTN = '~switch';

        // 1. Go to the LOGIN Form
        await $(LOGIN_ICON_HOME_SCREEN).click();

        // Wait some time 4 secs - Try manually click on the form screen
        await $(SWITCH_BTN).waitForDisplayed({timeout: 4000});

        // 2. Toggle the switch button
        await $(SWITCH_BTN).click();

        // 3. Wait a little to see result
        await browser.pause(3000);
    })
})