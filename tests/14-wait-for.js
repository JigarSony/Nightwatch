module.exports = {
    "wait for an element": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/wait-for-element.html");
        browser.assert.visible("#element-1");
        //after 7 second Number 2 will be displayed
        //browser.assert.visible("#element-2"); //fail
        browser.waitForElementVisible("#element-2",8000);
        //after 3 sec Number-1 is disappear
        browser.assert.not.elementPresent("#element-1");
        //after 6/7 sec Number-2 is disappear
        //browser.assert.not.elementPresent("#element-2");//fail
        browser.waitForElementNotPresent("#element-2",8000);
    }
}