const chromedriver = require('chromedriver');
module.exports = {
    before: function (done) {
        chromedriver.start();
        console.log('after');
        done();
    },

    after: function (done) {
        chromedriver.stop();
        console.log('after');
        done();
    },

    beforeEach: function (client, done) {
        console.log('beforeEach');
        client.status (result => {
            console.log(result.value);
            done();
        })
        
    },

    afterEach: function (client,done) {
        console.log('afterEach');
        console.log(client.currentTest);
        done();
    }
}