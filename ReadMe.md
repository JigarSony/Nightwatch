# Nightwatch

Official Website [Nightwatch](https://nightwatchjs.org/)

[NPM](https://www.npmjs.com/package/nightwatch)


## Prerequisite
 - Node Installed

## Procedure
 - Open Terminal
 - Check node version `node --version`
 - Check npm `npm --version`
 - Check node package executor `npx --version`
 - Create Newdir `Nightwatch`
 - Type `cd\Nightwatch`
 - To create `package.json`  Type `npm init -y`
 - To install Nightwatch dependencies `npm install nightwatch chromedriver --save-dep`
 - open VS Code `code .`
 - To check Nightwatch version `npx nightwatch --version`

```
  Nightwatch:
    version: 1.7.7
    changelog: https://github.com/nightwatchjs/nightwatch/releases/tag/v1.7.7
```

 - To install Chrome driver `npm install chromedriver --save-dev`
 - To install Firefox/Gecko driver `npm install geckodriver --save-dev`

 > - To install all in one line code `npm install nightwatch chromedriver geckodriver --save-dev`

 ### Execution-1

- Run Command `npx nightwatch`
- Error 

```
No config file found in the current working directory, creating nightwatch.conf.js in the current folder...
Error: No test source specified, please check configuration.
at processTicksAndRejections (internal/process/task_queues.js:93:5)</p>
```

> - So without `nightwatch.conf.js` file => run `npx nightwatch` => Nightwatch create `nightwatch.conf.js` file

- Create `tests` folder `mkdir tests`
- Update this`./tests` path in `nightwatch.conf.js` file `src_folders: ["./tests"],`

 ### Execution-2

- Run Command `npx nightwatch`
- Error 

```
npx nightwatch
   Error: No tests defined! using source folder: ./test</p>
```

- Create a `simple.js` file in test folder
- [URL](http://tutorials.actionqa.com/yt/nw/simple.html)
- http://tutorials.actionqa.com/yt/nw/simple.html
- Add Code

> - To Open an Url `browser.url("URL");`

```
module.exports = {
"Hello World": function(browser){
browser.url("http://tutorials.actionqa.com/yt/nw/simple.html");
}
}
```

- Run Command `npx nightwarch -e chrome` specific to `chrome browser`
- Run Command `npx nightwarch -e firefox` specific to `firefox browser`
`npx nightwatch -e chrome`


 ### Execution-3


<p>[Simple] Test Suite 

===================

ℹ Connected to localhost on port 9515 (1341ms).
  Using: chrome (91.0.4472.164) on Mac OS X platform.

⚠ Running Hello World:

No assertions ran.</p>

> - It's too fast let put some wait

- For Wait `browser.pause(milliSec)`

```
module.exports = {
    "Hello World": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/simple.html");
        browser.pause(2000);
    }
}
```

### Execution-4

<p>[Simple] Test Suite 

===================

ℹ Connected to localhost on port 9515 (1341ms).
  Using: chrome (91.0.4472.164) on Mac OS X platform.

⚠ Running Hello World:

No assertions ran.</p>

- How to Find Element : By default nw takes `css`
> - To Click on an element `browser.click("ElementCSS value");`

## 1-Sample.js

```
module.exports = {
    "Hello World": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/simple.html");
        browser.pause(2000);

        browser.click("body > a");
        browser.pause(2000);
    }
}
```

![alt text](https://github.com/JigarSony/Nightwatch/blob/master/referenceScreenShots/1.png?raw=true)
- To switch/change locator type `css/xpath`
> - Need to add these statements before using `browser.useXpath()` && `browser.useCSS()`

- To Enter value in Textbox/Element `browser.setValue(xpathValue,"This is xpath");` && `browser.setValue(cssValue,"This is css");`

- To Clear value in Textbox/Element `browser.clearValue(cssValue);` && `browser.clearValue(xpathValue);`

## 2-selectors.js

```
module.exports = {
    "css and xpath": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(2000);

        const cssValue = "#text-input";
        const xpathValue = '//*[@id="text-input"]';

        browser.setValue(cssValue, "This is Css");
        browser.pause(2000);

        /*
         * This will not work
         * browser.setValue(xpathValue, "This is Css");
        */

        browser.clearValue(cssValue);

        //To make this works below line is required

        browser.useXpath()
        browser.setValue(xpathValue,"This is xpath");
        browser.pause(2000);

        //Again moving to css
        browser.clearValue(xpathValue);

        browser.useCss()
        browser.setValue(cssValue, "This is Css Again!");
        browser.pause(2000);
    }
}
```

> - This Setting value will works in Single Testfile only
> - By defaul it again set it to css for next test file

## 3-selector.js

```
module.exports = {
    "css and xpath": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(2000);

        const cssValue = "#text-input";
        const xpathValue = '//*[@id="text-input"]';

        browser.setValue(cssValue, "This is Css");
        browser.pause(2000);

        /*
         * This will not work
         * browser.setValue(xpathValue, "This is Css");
        */

        browser.clearValue(cssValue);

        //To make this works below line is required

        browser.useXpath()
        browser.setValue(xpathValue,"This is xpath");
        browser.pause(2000);

        //At the end xpath is settled
        browser.end();
    },
    
    "the next test": function(browser){

        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(2000);
        
        const cssValue = "#text-input";
        const xpathValue = '//*[@id="text-input"]';

        //Moving to css in Next Test
        //In this test getting an error NoSuchElementError

        //Below statement is required !
        browser.useCss();
        
        browser.clearValue(cssValue);
        browser.setValue(cssValue, "This is Css Again!");
        browser.pause(2000);
        browser.end();
    }
}
```

>  - Another way is to set `use_xpath:true` globally in `nightwatch.conf.js` file

```
test_settings: {
default: {
use_xpath:true
}
}
```

### 4-selectors.js

```
module.exports = {
    "css and xpath": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
        browser.pause(2000);

        const cssValue = "#text-input";
        const xpathValue = '//*[@id="text-input"]';

        //To make this works below line is required
        //set `use_xpath:true` globally in `nightwatch.conf.js` file
        //test_settings: {
        //default: {
        //use_xpath:true

        //due to this change other files will not work

        browser.useXpath()
        browser.setValue(xpathValue,"This is xpath");
        browser.pause(2000);

        browser.end();
    },
}
```

#

![alt text](https://github.com/JigarSony/Nightwatch/blob/master/referenceScreenShots/2.png?raw=true)


### 5-navigate.js


```
module.exports = {
    "navigate": function (browser){
        browser.url("https://www.google.com");
        browser.url(function (result){
            console.log(result.value);
        });
    },
};
```
> - `NoIdea`


### 6-pause.js


```

module.exports = {
    "navigate": function (browser){
        browser.url("https://www.google.com");
        //browser.pause(2000);
        //browser.pause();

        //pause for ever
        //Need to kill by control + c

        //use : debug the page at some execution time
    },
};

```
> - `browser.pause(2000);` pause for 2 sec
> - `browser.pause();` pause...


### 7-click.js


```
module.exports = {
    "click the button": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/click.html");
        browser.click("#surprise-button");
        browser.pause(2000);
        browser.end();
    }
}
```
> - `browser.click("#surprise-button");`
> - `browser.end();`


## 8-textInput.js

```
module.exports = {
    "set and clear": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.pause(2000);
        browser.setValue("#text-input","Hello");
        browser.pause(2000);
        browser.clearValue("#text-input");
        browser.pause(2000);
        browser.end();
    },

    "using key": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.click("#text-input");
        browser.pause(2000);
        browser.keys("We're using keys");
        browser.pause(2000);
        browser.clearValue("#text-input");
        browser.pause(2000);
        browser.end();
    },

    "using array of key": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.click("#text-input");
        browser.pause(2000);
        browser.keys(["W","E","A","R","E","1"]);
        browser.pause(2000);
        browser.clearValue("#text-input");
        browser.pause(2000);
        browser.end();
    },

    "Keyboard Keys": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html");
        browser.click("#text-input");
        browser.pause(2000);
        browser.keys("We're using keys");
        browser.pause(2000);
        browser.keys([browser.Keys.COMMAND,
            "a",
            browser.Keys.NULL,
            browser.Keys.DELETE])

        browser.pause(2000);
        browser.end();
    }
}
```

> - `browser.setValue("#text-input","Hello");`
> - `browser.clearValue("#text-input");`
> - `browser.keys("We're using keys");`
> - `browser.keys(["W","E","A","R","E","1"]);`
> - `browser.keys([browser.Keys.COMMAND, "a", browser.Keys.NULL, browser.Keys.DELETE])`

### 9-dropdown.js

```
module.exports = {
    "dropdown test by keyboard": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        browser.pause(2000);
        browser.setValue("#dropdown","Thor");
        browser.pause(2000);
        browser.setValue("#dropdown","H");
        browser.pause(2000);
        browser.setValue("#dropdown","Th");
        browser.pause(2000);
        browser.setValue("#dropdown","Black");
        browser.pause(2000);
        browser.setValue("#dropdown","Black");
        browser.pause(2000);
        browser.end();
    },

    "dropdown test by click": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        browser.pause(2000);
        browser.click("#dropdown option:nth-child(4)");
        browser.pause(2000);
        browser.click("#dropdown option:nth-child(3)");
        browser.pause(2000);
        browser.end();
    },

    "dropdown test by for loop": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html");
        browser.pause(2000);
        
        for(let i = 0; i<=4; i++){
            browser.click(`#dropdown option:nth-child(${i})`);
            browser.pause(2000);
        }
        browser.end();
    }
}
```

> - `browser.setValue("#dropdown","Black");`
> - `browser.click("#dropdown option:nth-child(3)");`

## Assert

[API Reference](https://nightwatchjs.org/api/)

![alt text](https://github.com/JigarSony/Nightwatch/blob/master/referenceScreenShots/3.png?raw=true)

### 10-assert-visible.js

```
module.exports = {
    "Assert Visible": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.visible("#assert-verify-header");
        browser.click("#make-header-invisible");
        //browser.assert.visible("#assert-verify-header");
        browser.assert.not.visible("#assert-verify-header");
        browser.end(); 
    },

    "Expect Visible": function (browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect.element("#assert-verify-header").to.be.visible;
        browser.click("#make-header-invisible");
        browser.expect.element("#assert-verify-header").to.not.be.visible;
        browser.end(); 
    }
}
```

### 11-assert-contains-text.js

```
module.exports = {
    "Assert Contains-text": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.containsText("#more-text","Hello! I'm some more text!");
        browser.assert.containsText("#more-text","some more text!");
        //browser.assert.containsText("#more-text","Some More Text!"); //fail

        browser.click("#change-text");

        browser.assert.not.containsText("#more-text","Hello! I'm some more text!");
        browser.assert.not.containsText("#more-text","some more text!");

        browser.assert.containsText("#more-text","You changed me!");
        browser.assert.containsText("#more-text","changed me!");
        //browser.assert.containsText("#more-text","you Changed Me!"); //fail
        browser.end();
    },

    "Expect Contains-text": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect
            .element("#more-text")
            .text.to
            .equal("Hello! I'm some more text!");
        browser.expect.element("#more-text").text.to.contain("some more text!");
        //browser.expect.element("#more-text").text.to.equal("some more text!");//fail

        browser.click("#change-text");

        browser.expect
        .element("#more-text")
        .text.to.not
        .equal("Hello! I'm some more text!");
    browser.expect.element("#more-text").text.to.not.contain("some more text!");

        browser.expect
            .element("#more-text")
            .text.to
            .equal("You changed me!");
        browser.expect.element("#more-text").text.to.contain("changed me!");
        browser.end();
    }
}
```

### 12-assert-present.js

```
module.exports = {
    "Assert Present": ""+function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.assert.elementPresent("#some-list");
        browser.click("#remove-list");
        //browser.assert.elementPresent("#some-list");//fail
        browser.assert.not.elementPresent("#some-list");
        browser.end();
    },

    "Expect Present": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
        browser.expect.element("#some-list").to.be.present;
        browser.click("#remove-list");
        browser.expect.element("#some-list").to.not.be.present;
        browser.end();
    }
}
```
> - `browser.assert.elementPresent("#some-list");`
> - `browser.assert.not.elementPresent("#some-list");`
> - `browser.expect.element("#some-list").to.be.present;`
> - `browser.expect.element("#some-list").to.not.be.present;`

### 13-assert-enable.js

```
module.exports = {
    "Enable Test": ""+function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html");
        browser.assert.attributeEquals("#am-i-disabled","disabled","true");
        browser.setValue("#type-to-enable","Hello");
        browser.clearValue("#type-to-enable");
        browser.assert.attributeEquals("#am-i-disabled","disabled","false"); //failing
        //because element attribute is not enable value
        //let's rewrite this with Except
    },
    "Enable Test Using Except": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html");
        browser.expect.element("#am-i-disabled").not.to.be.enabled;
        browser.setValue("#type-to-enable","Hello");
        browser.expect.element("#am-i-disabled").to.be.enabled;
    }
}
```

> - `browser.assert.attributeEquals("#am-i-disabled","disabled","true");`
> - `browser.assert.attributeEquals("#am-i-disabled","disabled","false");`
> - `browser.expect.element("#am-i-disabled").not.to.be.enabled;`
> - `browser.expect.element("#am-i-disabled").to.be.enabled;`

### 14-wait-for.js

```
module.exports = {
    "wait for an element": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/wait-for-element.html");
        browser.assert.visible("#element-1");
        //after 7 second Number 2 will be displayed
        //browser.assert.visible("#element-2"); //fail
        browser.waitForElementVisible("#element-2",8000);
        //after 3 sec Number-1 is disappear
        browser.assert.not.elementPresent("#element-1");
        //after 6/7 sec Number-2 is disappear
        //browser.assert.not.elementPresent("#element-2");//fail
        browser.waitForElementNotPresent("#element-2",8000);
    }
}
```

> - `browser.assert.visible("#element-1");`
> - `browser.waitForElementVisible("#element-2",8000);`
> - `browser.assert.not.elementPresent("#element-1");`
> - `browser.waitForElementNotPresent("#element-2",8000);`