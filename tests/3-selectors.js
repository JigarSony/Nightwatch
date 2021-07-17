module.exports = {
    "css and xpath": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(2000);

        const cssValue = "#text-input";
        const xpathValue = '//*[@id="text-input"]';

        browser.setValue(cssValue, "This is Css");
        browser.pause(2000);

        /*
         * This will not work
         * browser.setValue(xpathValue, "This is Css");
        */

        browser.clearValue(cssValue);

        //To make this works below line is required

        browser.useXpath()
        browser.setValue(xpathValue,"This is xpath");
        browser.pause(2000);

        //At the end xpath is settled
        browser.end();
    },
    
    "the next test": function(browser){

        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(2000);
        
        const cssValue = "#text-input";
        const xpathValue = '//*[@id="text-input"]';

        //Moving to css in Next Test
        //In this test getting an error NoSuchElementError

        //Below statement is required !
        browser.useCss();
        
        browser.clearValue(cssValue);
        browser.setValue(cssValue, "This is Css Again!");
        browser.pause(2000);
        browser.end();
    }
}