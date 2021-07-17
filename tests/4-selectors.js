module.exports = {
    "css and xpath": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(2000);

        const cssValue = "#text-input";
        const xpathValue = '//*[@id="text-input"]';

        //To make this works below line is required
        //set `use_xpath:true` globally in `nightwatch.conf.js` file
        //test_settings: {
        //default: {
        //use_xpath:true

        //due to this change other files will not work

        browser.useXpath()
        browser.setValue(xpathValue,"This is xpath");
        browser.pause(2000);

        browser.end();
    },
}