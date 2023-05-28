import {LoginPage} from '../../pageobjects/login.page.js'
import {ShopPage} from '../../pageobjects/shop.page.js'
import {CheckoutReviewPage} from '../../pageobjects/checkout.review.page.js'
import {DeliveryPage} from '../../pageobjects/delivery.page.js'
import { expect as expectChai } from 'chai'
import * as fs from 'fs';

let products = JSON.parse(fs.readFileSync('test/test-data/products.json'))


describe('page object tests', async() => {
    products.forEach(async({products}) => {
    it('end to end test', async()=>
    {
        await browser.maximizeWindow()
        await browser.url("/loginpagePractise")
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $('#username').setValue("rahulshettyacademy");
        const loginpage = new LoginPage()
        await loginpage.login('rahulshettyacademy', 'learning')
        const shopPage = new ShopPage()
        await shopPage.linkCheckout.waitForExist()
        await expect(browser).toHaveUrlContaining("shop");
        await expect(browser).toHaveTitle("ProtoCommerce");

        // const products = ['Samsung Note 8', 'Blackberry']
        await shopPage.addProductsToCart(products)
        await shopPage.linkCheckout.click()

        const checkoutReviewPage = new CheckoutReviewPage()
        await checkoutReviewPage.btnCheckout.waitForExist()
        const totalSum = await checkoutReviewPage.calculateTotalPrice()
        const totalAmount = await checkoutReviewPage.extractTotalPrice()
        expectChai(totalAmount).to.eql(totalSum)
        await checkoutReviewPage.btnCheckout.click()

        const deliveryPage = new DeliveryPage()
        await deliveryPage.enterCountry("ind")
        await deliveryPage.ellipsis.waitForExist({reverse:true})
        await deliveryPage.linkIndia.click()
        await deliveryPage.btnSubmit.click()
        await expect(deliveryPage.alertSuccess).toHaveTextContaining("Success")
        await browser.pause(3000)
    })

    })
})