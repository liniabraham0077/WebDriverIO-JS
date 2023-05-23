# WebDriverIO-JS

1. Install the dependencies in package.json by running `npm install` command

2. Command to initialise the project - this command downloads the WebdriverIO CLI tool and runs a configuration wizard that helps you to configure your test suite.

`npm init wdio .`

3. Command to run the tests specified in the specs array of wdio.conf.js file

`npx wdio run wdio.conf.js`

4. add `x` infront of `it` to skip running a test in the `describe block`

5. command to run a specific test
`npx wdio run wdio.conf.js --spec test/specs/ui-controls.js`
