module.exports = {
    "set and clear": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.pause(2000);
        browser.setValue("#text-input","Hello");
        browser.pause(2000);
        browser.clearValue("#text-input");
        browser.pause(2000);
        browser.end();
    }
}