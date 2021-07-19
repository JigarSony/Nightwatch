module.exports = {
    'GoogleSearch Test': function(browser){
        let googlePage = browser.page.googlePage();

        googlePage.navigate()
        .assert.title('Google')
        .assert.visible('@searchBar')
        .setValue('@searchBar','Nightwatch')
        .pause(2000)
        .click('@submit');
    }
}