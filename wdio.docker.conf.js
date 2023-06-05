import {config as baseConfig} from './wdio.conf.js'

export const config ={
    ...baseConfig, 
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    //port:4441 when running selenium/standalone-chrome:latest
    //port:4442 when running selenium/standalone-firefox:latest
    //but at once, either selenium chrome standalone or firefox can run, not both
    maxInstances: 5,
    capabilities:[
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
              args: ['--disable-gpu', '--disable-dev-shm-usage']
            }            
        
          },
          {
            maxInstances: 1,
            browserName: 'firefox',
            acceptInsecureCerts: true,
            'moz:firefoxOptions': {
              args: ['--disable-gpu', '--disable-dev-shm-usage']
            }      
          }
    ],
    services: []
}