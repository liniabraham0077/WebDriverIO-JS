describe('Test Suite', async()=>{
    it('Test one', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise")
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        await $('#password').setValue("123learning");
        await $('#signInBtn').click();
        // https://webdriver.io/docs/api/browser/waitUntil/
        await browser.waitUntil(async() => await $('#signInBtn').getAttribute('value') === 'Sign In', {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        })
        console.log(await $('.alert-danger').getText())
       


    })
})