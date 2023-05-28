describe('Test Suite', async()=>{
    it('Smoke Test - error on entering incorrect password', async()=>{
        await browser.maximizeWindow()
        await browser.url("/loginpagePractise")
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        await $('#password').setValue("123learning");
        await $('#signInBtn').click();
        await browser.waitUntil(async() => await $('#signInBtn').getAttribute('value') === 'Sign In', {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        })
        console.log(await $('.alert-danger').getText())
    })

    it('login successfully', async()=>{
        await browser.maximizeWindow()
        await browser.url("/loginpagePractise")
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        await $('#password').setValue("learning");
        await $('#signInBtn').click();
        await $(".btn-primary").waitForExist()
        await expect(browser).toHaveUrlContaining("shop");
        await expect(browser).toHaveTitle("ProtoCommerce");
    })
})