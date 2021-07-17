module.exports = {
    "navigate": function (browser){
        browser.url("https://www.google.com");
        browser.url(function (result){
            console.log(result.value);
        });
    },
};