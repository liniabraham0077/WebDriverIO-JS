# WebDriverIO-JS

1. Install the dependencies in package.json by running `npm install` command

2. Command to initialise the project - this command downloads the WebdriverIO CLI tool and runs a configuration wizard that helps you to configure your test suite.

`npm init wdio .`

3. Command to run the tests specified in the specs array of wdio.conf.js file

`npx wdio run wdio.conf.js`

4. add `x` infront of `it` to skip running a test in the `describe block`

5. command to run a specific test - run multiple tests separated by comma
`npx wdio run wdio.conf.js --spec test/specs/ui-controls.js`

6. command to grep for a keyword in `it` block using mocha options
`npx wdio run wdio.conf.js --mochaOpts.grep Smoke`

7. command to run tests defined in `suites` object in wdio.conf.js
`npx wdio run wdio.conf.js --suite suite1 `

8. exclude tests by adding in exclude array in wdio.conf.js

9. command to run specs using script in package.json
`npm run wdio`

10. command to generate allure report using script in package.json
`npm run generate-allure-report`

11. command to build docker image in ci
` npm run ci:build`
` "ci:build": "docker-compose -f docker-compose.ci.yml build"`


12. command to spin up selenium hub, chrome and firefox using docker compose
`docker-compose up -d`

<!-- docker-compose up -d --build --force-recreate


docker-compose build -- builds image
docker-compose up

docker-compose up --exit-code-from wdio-automation-la

docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up --abort-on-container-exit --exit-code-from node -->
