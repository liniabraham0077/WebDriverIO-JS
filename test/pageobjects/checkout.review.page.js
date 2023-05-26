

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class CheckoutReviewPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnCheckout () {
        return $('.btn-success')
    }

    get totalPrice () {
        return $('td h3 strong')
    }

    get productPriceList(){
        return $$('tr td:nth-child(4) strong')
    }
    async calculateTotalPrice()
    {
        const totalSum = (await Promise.all(await this.productPriceList.map(async(productPrice) => 
            parseInt((await productPrice.getText()).split('.')[1].trim())
            ))).reduce((acc,price) => acc+price,0)
        console.log(parseInt(totalSum))
    }

    async extractTotalPrice(){
        const totalAmount = parseInt((await this.totalPrice.getText()).split('.')[1].trim())
        console.log(parseInt(totalAmount))

    }

}

