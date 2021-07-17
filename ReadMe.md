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
  >  Nightwatch:
    version: 1.7.7
    changelog: https://github.com/nightwatchjs/nightwatch/releases/tag/v1.7.7
 - To install Chrome driver `npm install chromedriver --save-dev`
 - To install Firefox/Gecko driver `npm install geckodriver --save-dev`

 > - To install all in one line code `npm install nightwatch chromedriver geckodriver --save-dev`

 ### Execution-1

- Run Command `npx nightwatch`
- Error 

<p>No config file found in the current working directory, creating nightwatch.conf.js in the current folder...
Error: No test source specified, please check configuration.
at processTicksAndRejections (internal/process/task_queues.js:93:5)</p>

> - So without `nightwatch.conf.js` file => run `npx nightwatch` => Nightwatch create `nightwatch.conf.js` file

- Create `tests` folder `mkdir tests`
- Update this`./tests` path in `nightwatch.conf.js` file `src_folders: ["./tests"],`

 ### Execution-2

- Run Command `npx nightwatch`
- Error 
<p>npx nightwatch
   Error: No tests defined! using source folder: ./test</p>

==========

- Create a `simple.js` file in test folder
- [URL](http://tutorials.actionqa.com/yt/nw/simple.html)
- http://tutorials.actionqa.com/yt/nw/simple.html
- Add Code

> - To Open an Url `browser.url("URL");`

>module.exports = {
    "Hello World": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/simple.html");
    }
}
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

>module.exports = {
    "Hello World": function(browser){
        browser.url("http://tutorials.actionqa.com/yt/nw/simple.html");
        browser.pause(2000);
    }
}

### Execution-4

<p>[Simple] Test Suite 

===================

ℹ Connected to localhost on port 9515 (1341ms).
  Using: chrome (91.0.4472.164) on Mac OS X platform.

⚠ Running Hello World:

No assertions ran.</p>

- How to Find Element : By default nw takes `css`
> - To Click on an element `browser.click("ElementCSS value");`

## Sample.js
>module.exports = {
"Hello World": function(browser){
browser.url("http://tutorials.actionqa.com/yt/nw/simple.html");
browser.pause(2000);
browser.click("body > a");
browser.pause(2000);
}
}

![Image](https://imgur.com/a/9cbol1l)

![alt text](https://github.com/JigarSony/Nightwatch/blob/master/referenceScreenShots/1.png?raw=true)
- To switch/change locator type `css/xpath`
> - Need to add these statements before using `browser.useXpath()` && `browser.useCSS()`

- To Enter value in Textbox/Element `browser.setValue(xpathValue,"This is xpath");` && `browser.setValue(cssValue,"This is css");`

- To Clear value in Textbox/Element `browser.clearValue(cssValue);` && `browser.clearValue(xpathValue);`

## selectors.js
>module.exports = {
"css and xpath": function(browser){
browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html");
browser.pause(2000);
const cssValue = "#text-input";
const xpathValue = '//*[@id="text-input"]';
browser.setValue(cssValue, "This is Css");
browser.pause(2000);
`This will not work
browser.setValue(xpathValue, "This is Css");`
>browser.clearValue(cssValue);
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

> - This Setting value will works in Single Testfile only
> - By defaul it again set to css for next test file

