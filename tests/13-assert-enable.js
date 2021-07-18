module.exports = {
    "Enable Test": ""+function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html");
        browser.assert.attributeEquals("#am-i-disabled","disabled","true");
        browser.setValue("#type-to-enable","Hello");
        browser.clearValue("#type-to-enable");
        browser.assert.attributeEquals("#am-i-disabled","disabled","false"); //failing
        //because element attribute is not enable value
        //let's rewrite this with Except
    },
    "Enable Test Using Except": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html");
        browser.expect.element("#am-i-disabled").not.to.be.enabled;
        browser.setValue("#type-to-enable","Hello");
        browser.expect.element("#am-i-disabled").to.be.enabled;
    }
}