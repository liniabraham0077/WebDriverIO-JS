import { expect as expectChai } from 'chai'
import { expect as expectWDIO } from '@wdio/globals'

describe('UI controls test', async() => {

    xit('radion button', async() =>{
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

    xit('static dropdown', async() =>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise")
        await expectWDIO(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        await $('#password').setValue("learning");
        // select value from dropdown
        await $('select.form-control').selectByAttribute('value','teach');
        expectChai(await $('select.form-control').getValue()).to.equal('teach')
        expectChai(await $('select.form-control').getText()).to.equal('Teacher')
        await browser.pause(4000)
        await $('select.form-control').selectByVisibleText('Consultant');
        expectChai(await $('select.form-control').getValue()).to.equal('consult')
        expectChai(await $('select.form-control').getText()).to.equal('Consultant')
        await browser.pause(4000)
        await $('select.form-control').selectByIndex(0);
        expectChai(await $('select.form-control').getValue()).to.equal('stud')
        expectChai(await $('select.form-control').getText()).to.equal('Student')
        await browser.pause(4000)
    })

    it('dynamic dropdown', async() =>{
        await browser.url("https://rahulshettyacademy.com/AutomationPractice")
        await  $("#autocomplete").setValue("ind")
        await  browser.pause(3000)
        let items = await $$("[class='ui-menu-item'] div")
        items.forEach(async(item )=> {
            await console.log(item.getText())
            if(await item.getText() === "Indonesia")
            {
                await item.click()
                
            }})
            await browser.pause(7000)
    })
})

