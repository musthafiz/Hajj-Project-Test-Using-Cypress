import Login from "../pages/login";
import Landing from "../pages/landingpage";
import application from "../pages/application";
describe("test module", () => {
    it("login", () => {
        // cy.visit("https://ehaj.hajj.gov.bd/");
        cy.visit("https://uat-ehaj.oss.net.bd/");
        Login.clickLoginMainButton();
        Login.clickLoginInnerPage();
        Login.typeUserName("01869220854");
        cy.wait(3000);
        Login.typePassword("Hello@2020r");
        Login.clickNextButton();
        cy.url().should("include", "my-desk");

        Landing.clickPreRegistration();
        Landing.clickApplication();

        application.clicknewPilgrimAdd();
        cy.wait(1000);
        application.clickgenderFemale();
        cy.wait(1000);
        application.clickgenderMale();
        cy.wait(1000);
        application.typebirthDate("04-Jan-1999");
        cy.wait(3000);
        application.clickidentityType();
        cy.wait(1000);
        application.typenidNumber("4411002255");
        cy.wait(1000);
        application.clicknext();
        cy.wait(1000);

    });
});
