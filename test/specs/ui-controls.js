import { expect as expectChai } from 'chai'
import { expect as expectWDIO } from '@wdio/globals'

describe('UI controls test', async() => {

    it('radion button', async() =>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise")
        await expectWDIO(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        await $('#password').setValue("learning");

        const userRadioBtn = await $('input[value= "user"]')
        console.log(await userRadioBtn.getAttribute('value'))
        console.log(await userRadioBtn.getValue())
        await userRadioBtn.click()
        await expectWDIO(userRadioBtn).toBeSelected()
        expectChai(await userRadioBtn.getValue()).to.eq('user')

        await $('.modal-body').waitForDisplayed()
        await $("#cancelBtn").click()
        const adminRadioBtn = await $('input[value= "admin"]')
        console.log(await adminRadioBtn.getAttribute('value'))
        console.log(await adminRadioBtn.getValue())
        await expectWDIO(adminRadioBtn).toBeSelected()
        expectChai(await adminRadioBtn.getValue()).to.eq('admin')

    })
})