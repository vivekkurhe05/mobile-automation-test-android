describe('Swipe horizontally', function () {

    it('should swipe horizontal', async function () {

        const SWIPE_ICON_HOME_SCREEN = '~Swipe';
        const SWIPE_HEADER_TEXT = '~Swipe-screen';

        // 1. Click on swipe icon
        await $(SWIPE_ICON_HOME_SCREEN).click();

        // 2. Touch on the screen
        await $(SWIPE_HEADER_TEXT).click();

        // 3. Swipe from right to left
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endPointPercentage = 10;

        const {height, width} = await driver.getWindowSize();
        const anchor = height * anchorPercentage / 100;
        const startPoint = width * startPointPercentage / 100;
        const endPoint = width * endPointPercentage / 100;

        for(let swipeTime = 0; swipeTime < 5; swipeTime++) {

            await driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: startPoint,
                        y: anchor
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
                        x: endPoint,
                        y: anchor
                    }
                },
                {
                    action: 'release',
                    options: {}
                }
            ])
        }
    })
})