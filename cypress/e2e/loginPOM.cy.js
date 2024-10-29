import Login from "../pages/login";
import Landing from "../pages/landingpage";
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

    });
});
