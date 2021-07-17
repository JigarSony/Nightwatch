module.exports = {
    "dropdown test by keyboard": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        browser.pause(2000);
        browser.setValue("#dropdown","Thor");
        browser.pause(2000);
        browser.setValue("#dropdown","H");
        browser.pause(2000);
        browser.setValue("#dropdown","Th");
        browser.pause(2000);
        browser.setValue("#dropdown","Black");
        browser.pause(2000);
        browser.setValue("#dropdown","Black");
        browser.pause(2000);
        browser.end();
    },

    "dropdown test by click": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        browser.pause(2000);
        browser.click("#dropdown option:nth-child(4)");
        browser.pause(2000);
        browser.click("#dropdown option:nth-child(3)");
        browser.pause(2000);
        browser.end();
    },

    "dropdown test by for loop": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        browser.pause(2000);
        
        for(let i = 0; i<=4; i++){
            browser.click(`#dropdown option:nth-child(${i})`);
            browser.pause(2000);
        }
        browser.end();
    }
}