import merge from 'deepmerge'
import * as wdioConf from './wdio.conf.js'
import { config as sharedConfig } from './wdio.conf.js'

// export const config = {
//     ...sharedConfig,
//     ...{
//             baseUrl: 'https://rahulshettyacademy.com',
//             mochaOpts: {
//                 ui: 'bdd',
//                 timeout: 90000,
//                 grep: 'Smoke'
//             }}
// }

export const config = merge(wdioConf.config, {

    baseUrl : 'http://rahulshettyacademy.com',
    waitforTimeout: 15000,
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep:"Smoke"
    }
})
    
