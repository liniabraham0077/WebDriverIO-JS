import {LoginPage} from '../../pageobjects/login.page.js'
import * as fs from 'fs';

let credentials = JSON.parse(fs.readFileSync('test/test-data/login.json'))
describe('page object tests',async () => {
    credentials.forEach(  ({username,password})  =>{
    it('login test', async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise")
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        const loginpage = new LoginPage()
        await loginpage.login(username, password)
        await browser.waitUntil(async() => await loginpage.btnSignIn.getAttribute('value') === 'Sign In', {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        })
        console.log(await loginpage.alertDanger.getText())
    })
})
})