module.exports = {
    'get Table rows' : async function (browser) {
        browser.url('https://tutorials.actionqa.com/nwind/elements.html');
        
        const tableRow = await browser.elements("css selector", "tbody tr")
           console.log("Number of Rows: " + tableRow.value.lenght);
           browser.assert.equal(tableRow.value.length, '4');
           console.log(JSON.stringify(tableRow,null,4));
    },
};