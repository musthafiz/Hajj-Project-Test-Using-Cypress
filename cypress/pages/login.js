class Login {

    loginMainButton = "li>a";
    loginInnerPage = "span";
    userName = 'input[id="mobile_no"]'
    password = 'input[id="password"]'
    nextButton = 'button[id="next_btn"]'

    clickLoginMainButton() {
        cy.get(this.loginMainButton).contains("লগইন").click();
    }
    clickLoginInnerPage() {
        cy.get(this.loginInnerPage).contains("হজযাত্রী/ গাইড লগইন").click();
    }
    typeUserName(name) {
        cy.get(this.userName).type(name);
    }
    typePassword(Password) {
        cy.get(this.password).type(Password);
    }
    clickNextButton() {
        cy.get(this.nextButton).click();
    }
}
module.exports = new Login();