

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSignIn () {
        return $('#signInBtn');
    }

    get alertDanger () {
        return $('.alert-danger');
    }


    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }

  
}
