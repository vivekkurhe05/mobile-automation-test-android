describe('Learning swipe vertically', function () {

    it('should swipe vertically via co-ordinates', async function () {

        const FORMS_ICON_HOME_SCREEN = '~Forms';
        const ACTIVE_BTN = '~button-Active';
        const FORM_HEADER_TEXT = '~Forms-screen';

        // 1. Click on Form icon
        await $(FORMS_ICON_HOME_SCREEN).click();

        // 2. Swipe up vertically
        const {height} = await driver.getWindowSize();
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endPointPercentage = 10;

        const anchor = height * anchorPercentage / 100;
        const startPoint = height * startPointPercentage / 100;
        const endPoint = height * endPointPercentage / 100;

        console.log('*******************************');
        console.log('anchor:', anchor);
        console.log('Start point:', startPoint);
        console.log('End point:', endPoint);
        console.log('*******************************');

        // Touch on screen before doing touch action
        await $(FORM_HEADER_TEXT).click();

        // Press on start point, wait 1s, move to endPoint, release
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: 'release',
                options: {}
            }
        ])

        // 3. click on ACTIVE button
        await $(ACTIVE_BTN).click();
    })

    // not working
    it.only('should swipe vertically via methods', async function () {

        const FORMS_ICON_HOME_SCREEN = '~Forms';
        const ACTIVE_BTN = '~button-Active';

        // 1. Go to the Forms
        await $(FORMS_ICON_HOME_SCREEN).click();

        console.log('******************************************');
        console.log('Type of ACTIVE button:', typeof $(ACTIVE_BTN));
        // 2. Scroll into view
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Active")').click();
        
        // 3. Click on ACTIVE button
        await $(ACTIVE_BTN).click();
    })
})