module.exports = {
    'Multiwindows Handle': async function (browser) {
        browser.url('http://the-internet.herokuapp.com/'),
        browser.click("a[href='/windows']");
        browser.pause(2000);
        browser.click("a[href='/windows/new']");
        browser.pause(2000);

        const currentWindowsHandle = await browser.windowHandle();
        const allWindowsHandles = await browser.windowHandles();

        for(let i = 0; i < allWindowsHandles.value.length; i++){
            if(allWindowsHandles.value[i] !== currentWindowsHandle.value){
                browser.switchWindow(allWindowsHandles.value[i]);
                break;
            }
        }

        browser.assert.containsText("div[class='example'] h3","New Window")
        browser.pause(2000);
        browser.end();
    }
}

//ReadMe
//https://www.youtube.com/watch?v=5V56HYebiMk