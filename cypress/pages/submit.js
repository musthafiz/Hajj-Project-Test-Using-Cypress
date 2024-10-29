class Submit {

    submitButton = "button"

    clicksubmitButton() {
        cy.get(this.submitButton).contains("সাবমিট").scrollIntoView({ duration: 3000, easing: "linear", offset: { top: -600 } }).click();
    }

}
module.exports = new Submit();