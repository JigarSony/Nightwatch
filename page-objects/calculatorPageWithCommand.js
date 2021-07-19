const calculatorCommands = {
    add: function(n1,n2) {
        return this.fillAndSubmit(n1,n2,'+');
    },
    sub: function(n1,n2) {
        return this.fillAndSubmit(n1,n2,'-');
    },
    mul: function(n1,n2) {
        return this.fillAndSubmit(n1,n2,'*');
    },
    div: function(n1,n2) {
        return this.fillAndSubmit(n1,n2,'/');
    },
    fillAndSubmit: function(n1,n2,op){
        return this
            .setValue('@txtFirstNumber',n1)
            .setValue('@ddOperator',op)
            .setValue('@txtSecondNumber',n2)
            .click('@btnGo')
    }
}
module.exports = {
    url: 'https://juliemr.github.io/protractor-demo/',
    commands: [calculatorCommands],
    elements:{
        txtFirstNumber: 'input.input-small',
        ddOperator: 'select.span1',
        txtSecondNumber: 'body > div > div > form > input:nth-child(3)',
        btnGo:'#gobutton',
        textResult: 'h2.ng-binding'
    }
}