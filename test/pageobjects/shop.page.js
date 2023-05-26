

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class ShopPage extends Page {
    /**
     * define selectors using getter methods
     */
    get linkCheckout () {
        return $('*=Checkout')
    }

    get productList(){
        return $$('.card')
    }
    async addProductsToCart(products)
    {
        await Promise.all(await this.productList.map(async(product) => {
                if(products.includes((await product.$('.card-title a').getText())))
            {
                const footer = await product.$(".card-footer button")
                await footer.click()
            }}))
    }

}

