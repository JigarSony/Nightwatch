module.exports = {
    beforeEach: function (browser){
        let calPage = browser.page.calculatorPage();
        calPage.navigate();
    },

    'Calculator Test': function (browser){
        let calPage = browser.page.calculatorPage();
        calPage
            .setValue('@txtFirstNumber', '2')
            .setValue('@ddOperator', '+')
            .setValue('@txtSecondNumber', '2')
            .click('@btnGo')
            .expect.element('@textResult').to.text.equal('4');
    }
}