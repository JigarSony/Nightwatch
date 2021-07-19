module.exports = {
    '@tags':['accesible'],
    'Accessible site example': function (browser) {
        browser.url('https://www.w3.org/WAI/demos/bad/after/home.html')
        .assert.title('Welcome to CityLights! [Accessible Home Page]')
        .axeInject()
        .axeRun('body',{
            rule: {},
        })
        .end();
    }
}