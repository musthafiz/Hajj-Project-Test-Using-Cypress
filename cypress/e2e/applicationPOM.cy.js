import Login from "../pages/login";
import Landing from "../pages/landingpage";
import application from "../pages/application";
import Data from "./data";
describe("test module", () => {
  const data = new Data();
  const testData = data.getApplicationData();
  testData.forEach(({ birthdata, nidNumber }) => {
    it("login", () => {
      cy.visit("https://uat-ehaj.oss.net.bd/");
      Login.clickLoginMainButton();
      Login.clickLoginInnerPage();
      Login.typeUserName("01303937998");
      cy.wait(3000);
      Login.typePassword("Hello@2020t");
      Login.clickNextButton();
      cy.wait(3000);

      Landing.clickPreRegistration();
      cy.wait(1000);
      Landing.clickApplication();
      cy.wait(1000);
      application.clicknewPilgrimAdd();
      cy.wait(1000);
      application.clickgenderFemale();
      cy.wait(1000);
      application.clickgenderMale();
      cy.wait(1000);
      application.typebirthDate(birthdata);
      cy.wait(3000);
      application.clickidentityType();
      cy.wait(1000);
      application.typenidNumber(nidNumber);
      cy.wait(1000);
      application.clicknext();
      cy.wait(1000);
    });
  });
});
