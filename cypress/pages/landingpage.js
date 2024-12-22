class Landing {
  preRegistration =
    "/html/body/div[1]/div/div/div/aside/div/div[2]/div[2]/a/div/i[2]";
  application =
    'a[href="https://uat-ehaj.oss.net.bd/pilgrim/pre-registration/index#/pilgrims-list"]';

  clickPreRegistration() {
    cy.xpath(this.preRegistration)
      .should("exist")
      .and("be.visible")
      .click({ force: true });
  }

  clickApplication() {
    cy.get(this.application).should("exist").and("be.visible").click();
  }
}
module.exports = new Landing();
