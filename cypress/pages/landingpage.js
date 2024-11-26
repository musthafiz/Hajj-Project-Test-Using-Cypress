class Landing {
  preRegistration = 'div[class="w-100 d-flex justify-content-between"]';
  application = 'a[class="dash-menu-text"]';

  clickPreRegistration() {
    cy.get(this.preRegistration).contains("প্রাক নিবন্ধন").click();
  }
  clickApplication() {
    cy.get(this.application).contains("আবেদন").click();
  }
}
module.exports = new Landing();
