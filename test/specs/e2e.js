import { expect as expectChai } from 'chai'
import { expect as expectWDIO } from '@wdio/globals'

describe('Test Suite', async()=>{
    it('end to end flow', async()=>{
            await browser.url("https://rahulshettyacademy.com/loginpagePractise")
            await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
            await $('#username').setValue("rahulshettyacademy");
            await $('#password').setValue("learning");
            await $('select.form-control').selectByVisibleText('Student');
            expectChai(await $('select.form-control').getValue()).to.equal('stud')

            await $('#terms').click();
            await $('#signInBtn').click()
            await $('*=Checkout').waitForExist()
            await expect(browser).toHaveUrlContaining("shop");
            await expect(browser).toHaveTitle("ProtoCommerce");

            const products = ['Samsung Note 8', 'Blackberry']
            const productList = await $$('.card')

            for(let product of productList){
                if(products.includes(await product.$('.card-title a').getText()))
                {
                    const footer = await product.$(".card-footer button")
                    await footer.click()
                }
            }

            // this approach also works to add products to cart
            // await Promise.all(await productList.map(async(product) => {
            //     if(products.includes((await product.$('.card-title a').getText())))
            // {
            //     const footer = await product.$(".card-footer button")
            //     await footer.click()
            // }}))

            await $('*=Checkout').click()
            await $('.btn-success').waitForExist()
            
            const totalAmount = parseInt((await $('td h3 strong').getText()).split('.')[1].trim())
            console.log(parseInt(totalAmount))

            const productPriceList = await $$('tr td:nth-child(4) strong')

            const totalSum = (await Promise.all(await productPriceList.map(async(productPrice) => 
            parseInt((await productPrice.getText()).split('.')[1].trim())
            ))).reduce((acc,price) => acc+price,0)

            console.log(totalSum)

            expectChai(totalAmount).to.eql(totalSum)
            await $(".btn-success").click()
            await $("#country").setValue("ind")
            await $(".lds-ellipsis").waitForExist({reverse:true})
            await $("=India").click()
            await $("input[type='submit']").click()
            await expect($(".alert-success")).toHaveTextContaining("Success")

            await browser.pause(10000)

       
    })

   
})