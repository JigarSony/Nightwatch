module.exports = {
    beforeEach: function (browser){
        let calPage = browser.page.calculatorPageWithCommand();
        calPage.navigate();
    },

    'Calculator Test': function (browser){
        let calPage = browser.page.calculatorPageWithCommand();
        calPage
           .add(2,2)
            .expect.element('@textResult').to.text.equal('4');
    }
}