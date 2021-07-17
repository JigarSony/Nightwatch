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
