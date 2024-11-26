import Login from "../pages/login";
import Landing from "../pages/landingpage";
import application from "../pages/application";
import Personalinfo from "../pages/personalinfo";
import Address from "../pages/address";
import Account from "../pages/account";
import Submit from "../pages/submit";
import Data from "./data";
describe("test module", () => {
  const data = new Data();
  const testData = data.getApplicationData();
  testData.forEach(
    ({
      birthdata,
      nidNumber,
      nameBangla,
      nameEnglish,
      fatherName,
      motherName,
      occupationField,
      mobileNumber,
      perPostCode,
      perDistrictfIELD,
      perposiceStaionField,
      perAddress,
      prePostCode,
      preDistrictField,
      prethanaField,
      preaddress,
      AccountNumber,
      BranchField,
    }) => {
      it("login", () => {
        cy.visit("https://uat-ehaj.oss.net.bd/");
        Login.clickLoginMainButton();
        Login.clickLoginInnerPage();
        Login.typeUserName("......");
        cy.wait(1000);
        Login.typePassword("..............");
        Login.clickNextButton();
        cy.wait(1000);

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
        cy.wait(1000);
        application.clickidentityType();
        cy.wait(1000);
        application.typenidNumber(nidNumber);
        cy.wait(1000);
        application.clicknext();
        cy.wait(1000);

        Personalinfo.typenameBangla(nameBangla);
        cy.wait(500);
        Personalinfo.typenameEnglish(nameEnglish);
        cy.wait(500);
        Personalinfo.typefatherName(fatherName);
        cy.wait(500);
        Personalinfo.typemotherName(motherName);
        cy.wait(500);
        Personalinfo.clickoccupation();
        cy.wait(500);
        Personalinfo.typeoccupationField(occupationField);
        cy.wait(1000);
        Personalinfo.typemobileNumber(mobileNumber);
        cy.wait(1000);
        Personalinfo.selectmaritalStatus("Unmarried");
        cy.wait(1000);
        Personalinfo.clicknextSecondPage();
        cy.wait(500);

        Address.typeperPostCode(perPostCode);
        cy.wait(500);
        Address.clickDistrict();
        cy.wait(500);
        Address.typeDistrictfIELD(perDistrictfIELD);
        cy.wait(1000);
        Address.clickposiceStaion();
        cy.wait(1000);
        Address.typeposiceStaionField(perposiceStaionField);
        cy.wait(1000);
        Address.typeperAddress(perAddress);
        cy.wait(500);

        Address.typeprePostCode(prePostCode);
        cy.wait(500);
        Address.clickpreDistrict();
        cy.wait(500);
        Address.typepreDistrictField(preDistrictField);
        cy.wait(1000);
        Address.clickprethana();
        cy.wait(1000);
        Address.typeprethanaField(prethanaField);
        cy.wait(1000);
        Address.typepreaddress(preaddress);
        cy.wait(500);
        Address.clicknextbtn();
        cy.wait(500);

        Account.selectpilgrimType("Pilgrim own");
        cy.wait(500);
        Account.clickAccountHolderName();
        cy.wait(500);
        Account.typeAccountNumber(AccountNumber);
        cy.wait(500);
        Account.clickBankName();
        cy.wait(500);
        Account.containsBankNameField("Modhumoti Bank Limited");
        cy.wait(1000);
        Account.clickBranchDistrict();
        cy.wait(1000);
        Account.containsBranchDistrictField("DHAKA-NORTH");
        cy.wait(1000);
        Account.clickBranch();
        cy.wait(1000);
        Account.typeBranchField(BranchField);
        cy.wait(1000);
        const files = "xv.jpg";
        Account.selectFilephoto(files);
        cy.wait(5000);
        Account.clickimgBtn();
        cy.wait(1000);
        Account.clicknextpage();
        cy.wait(1000);
        Submit.clicksubmitButton();
        cy.wait(5000);
      });
    }
  );
});
