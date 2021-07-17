module.exports = {
    "Hello World": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/simple.html");
        browser.pause(2000);

        browser.click("body > a");
        browser.pause(2000);
    }
}