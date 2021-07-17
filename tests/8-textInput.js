module.exports = {
    "set and clear": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.pause(2000);
        browser.setValue("#text-input","Hello");
        browser.pause(2000);
        browser.clearValue("#text-input");
        browser.pause(2000);
        browser.end();
    },

    "using key": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.click("#text-input");
        browser.pause(2000);
        browser.keys("We're using keys");
        browser.pause(2000);
        browser.clearValue("#text-input");
        browser.pause(2000);
        browser.end();
    },

    "using array of key": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.click("#text-input");
        browser.pause(2000);
        browser.keys(["W","E","A","R","E","1"]);
        browser.pause(2000);
        browser.clearValue("#text-input");
        browser.pause(2000);
        browser.end();
    },

    "Keyboard Keys": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.click("#text-input");
        browser.pause(2000);
        browser.keys("We're using keys");
        browser.pause(2000);
        browser.keys([browser.Keys.COMMAND,
            "a",
            browser.Keys.NULL,
            browser.Keys.DELETE
        ])

        browser.pause(2000);
        browser.end();
    }
}