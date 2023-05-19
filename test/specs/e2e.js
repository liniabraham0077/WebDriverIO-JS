describe('Test Suite', async()=>{
    it('Test one', async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise")
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        await $('#password').setValue("123learning");
        await $('#signInBtn').click();
        await browser.pause(3000);
        console.log(await $('.alert-danger').getText())
        // await browser.pause(10000);


    })
})