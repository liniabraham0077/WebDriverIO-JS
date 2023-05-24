import { expect as expectChai } from 'chai'
import { expect as expectWDIO } from '@wdio/globals'

describe('UI controls test', async() => {
    xit('scrolling and mouse hover', async() => {
        await browser.maximizeWindow();
        await browser.url("https://rahulshettyacademy.com/AutomationPractice")
        // await browser.$("#mousehover").scrollIntoView({ block: 'nearest', inline: 'nearest' })
        await $("#mousehover").scrollIntoView({ block: 'nearest', inline: 'nearest' })
        await browser.pause(5000)
        await $("#mousehover").moveTo()
        await browser.pause(5000)
        await $("=Top").click()
        await browser.pause(5000)
    })
  
    it('handle tables', async() => {
        await browser.maximizeWindow();
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $('tr th:first-child').click();
        const veggiesColumn =  await $$("tr td:nth-child(1)")
        const actualVeggiesList = await Promise.all(await veggiesColumn.map(async veggie => await veggie.getText()))
        const veggiesList = actualVeggiesList.slice()
        //Arrays are pass by reference
        const expectedVeggiesList = veggiesList.sort()
        expectChai(actualVeggiesList).to.eql(expectedVeggiesList)
    })
})