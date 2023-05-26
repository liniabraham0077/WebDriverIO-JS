

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class DeliveryPage extends Page {
    /**
     * define selectors using getter methods
     */

    get txtboxCountry () {
        return $("#country")
    }

    get ellipsis () {
        return $('.lds-ellipsis')
    }

    get linkIndia(){
        return $("=India")
    }

    get btnSubmit(){
        return $("input[type='submit']")
    }

    get alertSuccess(){
        return $(".alert-success")
    }


    async enterCountry(country)
    {
        await this.txtboxCountry.setValue(country)

    }

}

