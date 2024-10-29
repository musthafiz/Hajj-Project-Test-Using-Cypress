import Login from "../pages/login";
import Landing from "../pages/landingpage";
describe("test module", () => {
    it("login", () => {

        cy.visit("https://uat-ehaj.oss.net.bd/");
        Login.clickLoginMainButton();
        Login.clickLoginInnerPage();
        Login.typeUserName("................");
        cy.wait(3000);
        Login.typePassword("................");
        Login.clickNextButton();

    });
});
