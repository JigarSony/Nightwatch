module.exports = {
    'use element': async function (browser) {
        browser.url('http://tutorials.actionqa.com/nwind/element.html');
        const elementResult = await browser.element("css selector", "#some-button");
        console.log(JSON.stringify(elementResult,null,4));
        //console.log('The Element: '+ elementResult.value.ELEMENT); -- Not working
    }
}