module.exports = {
    "Assert Visible": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.visible("#assert-verify-header");
        browser.click("#make-header-invisible");
        //browser.assert.visible("#assert-verify-header");
        browser.assert.not.visible("#assert-verify-header");
        browser.end(); 
    },

    "Expect Visible": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect.element("#assert-verify-header").to.be.visible;
        browser.click("#make-header-invisible");
        browser.expect.element("#assert-verify-header").to.not.be.visible;
        browser.end(); 
    }
}