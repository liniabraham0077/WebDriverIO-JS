import { expect as expectChai } from 'chai'
import { expect as expectWDIO } from '@wdio/globals'

describe('UI controls test', async() => {

    it('radion button', async() =>{
        await browser.maximizeWindow()
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

    it('static dropdown', async() =>{
        await browser.maximizeWindow()
        await browser.url("https://rahulshettyacademy.com/loginpagePractise")
        await expectWDIO(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        await $('#password').setValue("learning");
        // select value from dropdown
        await $('select.form-control').selectByAttribute('value','teach');
        expectChai(await $('select.form-control').getValue()).to.equal('teach')
        await browser.pause(2000)
        await $('select.form-control').selectByVisibleText('Consultant');
        expectChai(await $('select.form-control').getValue()).to.equal('consult')
        await browser.pause(2000)
        await $('select.form-control').selectByIndex(0);
        expectChai(await $('select.form-control').getValue()).to.equal('stud')
        await browser.pause(2000)
    })

    it('dynamic dropdown', async() =>{
        await browser.maximizeWindow()
        await browser.url("/AutomationPractice")
        await $("#autocomplete").setValue("ind")
        let items = await $$("[class='ui-menu-item'] div")
        items.forEach(async(item )=> {
            await console.log(item.getText())
            if(await item.getText() === "Indonesia")
            {
                await item.click()
                
            }})
    })

    it('handle checkbox', async() =>{
        await browser.maximizeWindow()
        await browser.url("/AutomationPractice")
        const checkboxes = await $$("input[type='checkbox']")
        await checkboxes[1].click();
        await browser.pause(3000)
        console.log(await checkboxes[1].isSelected())
        await browser.saveScreenshot("screenshot.png")
    })
})

