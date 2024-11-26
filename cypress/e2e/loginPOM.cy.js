import Login from "../pages/login";
import Landing from "../pages/landingpage";

import Data from "./data";

describe("test module", () => {
  const data = new Data();
  const testData = data.getTestData();
  testData.forEach(({ userName, password }) => {
    it("login", () => {
      cy.visit("https://uat-ehaj.oss.net.bd/");
      Login.clickLoginMainButton();
      Login.clickLoginInnerPage();
      Login.typeUserName(userName);
      cy.wait(3000);
      Login.typePassword(password);
      Login.clickNextButton();
    });
  });
});
