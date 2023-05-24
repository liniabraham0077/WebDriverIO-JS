import { expect as expectChai } from 'chai'
import { expect as expectWDIO } from '@wdio/globals'

describe('UI controls test', async() => {
    it('scrolling and mouse hover', async() => {
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
})