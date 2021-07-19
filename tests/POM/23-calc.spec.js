module.exports = {
    'Calculator Test': function (browser){
        browser.url('https://juliemr.github.io/protractor-demo/')
        .setValue('input.input-small','1')
        .setValue('select.span1','-')
        .setValue('body > div > div > form > input:nth-child(3)','1')
        .click('#gobutton')
        .expect.element('h2.ng-binding').text.to.equal('0');
    }
}