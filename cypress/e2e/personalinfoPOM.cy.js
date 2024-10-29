import Login from "../pages/login";
import Landing from "../pages/landingpage";
import application from "../pages/application";
import Personalinfo from "../pages/personalinfo";
describe("test module", () => {
    it("login", () => {

        cy.visit("https://uat-ehaj.oss.net.bd/");
        Login.clickLoginMainButton();
        cy.wait(1000);
        Login.clickLoginInnerPage();
        cy.wait(1000);
        Login.typeUserName("...............");
        cy.wait(1000);
        Login.typePassword("...............");
        cy.wait(1000);
        Login.clickNextButton();
        cy.wait(1000);
        cy.url().should("include", "my-desk");

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
        application.typebirthDate("04-Jan-1999");
        cy.wait(3000);
        application.clickidentityType();
        cy.wait(1000);
        application.typenidNumber("4411002255");
        cy.wait(1000);
        application.clicknext();
        cy.wait(1000);


        Personalinfo.typenameBangla("হাবিবুল বাসার সুমন");
        cy.wait(1000);
        Personalinfo.typenameEnglish("Habibul Basar Sumon");
        cy.wait(1000);
        Personalinfo.typefatherName("রেদওয়ানুল ইসলাম");
        cy.wait(1000);
        Personalinfo.typemotherName("ফিরোজা পারভিন");
        cy.wait(1000);
        Personalinfo.clickoccupation();
        cy.wait(1000);
        Personalinfo.typeoccupationField("COOK");
        cy.wait(4000);
        Personalinfo.typemobileNumber("01869220854");
        cy.wait(1000);
        Personalinfo.selectmaritalStatus("Unmarried");
        cy.wait(1000);
        Personalinfo.clicknextSecondPage();
        cy.wait(1000);
    });
});
