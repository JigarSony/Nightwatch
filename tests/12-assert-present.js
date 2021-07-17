module.exports = {
    "Assert Present": ""+function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.elementPresent("#some-list");
        browser.click("#remove-list");
        //browser.assert.elementPresent("#some-list");//fail
        browser.assert.not.elementPresent("#some-list");
        browser.end();
    },

    "Expect Present": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect.element("#some-list").to.be.present;
        browser.click("#remove-list");
        browser.expect.element("#some-list").to.not.be.present;
        browser.end();
    }
}