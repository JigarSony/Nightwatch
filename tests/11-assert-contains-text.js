module.exports = {
    "Assert Contains-text": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.containsText("#more-text","Hello! I'm some more text!");
        browser.assert.containsText("#more-text","some more text!");
        //browser.assert.containsText("#more-text","Some More Text!"); //fail

        browser.click("#change-text");

        browser.assert.not.containsText("#more-text","Hello! I'm some more text!");
        browser.assert.not.containsText("#more-text","some more text!");
        browser.assert.containsText("#more-text","You changed me!");
        browser.assert.containsText("#more-text","changed me!");
        //browser.assert.containsText("#more-text","you Changed Me!"); //fail
        browser.end();
    },

    "Expect Contains-text": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect
            .element("#more-text")
            .text.to
            .equal("Hello! I'm some more text!");
        browser.expect.element("#more-text").text.to.contain("some more text!");
        //browser.expect.element("#more-text").text.to.equal("some more text!");//fail

        browser.click("#change-text");
        browser.expect
        .element("#more-text")
        .text.to.not
        .equal("Hello! I'm some more text!");
    browser.expect.element("#more-text").text.to.not.contain("some more text!");
        browser.expect
            .element("#more-text")
            .text.to
            .equal("You changed me!");
        browser.expect.element("#more-text").text.to.contain("changed me!");
        browser.end();
    }
}