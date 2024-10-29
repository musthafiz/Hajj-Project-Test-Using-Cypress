import Login from "../pages/login";
import Landing from "../pages/landingpage";
import application from "../pages/application";
import Personalinfo from "../pages/personalinfo";
import Address from "../pages/address";
import Account from "../pages/account";
import Submit from "../pages/submit"
describe("test module", () => {
    it("login", () => {

        cy.visit("https://uat-ehaj.oss.net.bd/");
        Login.clickLoginMainButton();
        cy.wait(500);
        Login.clickLoginInnerPage();
        cy.wait(500);
        Login.typeUserName("///////////////");
        cy.wait(500);
        Login.typePassword("///////////////");
        cy.wait(500);
        Login.clickNextButton();
        cy.wait(500);
        cy.url().should("include", "my-desk");

        Landing.clickPreRegistration();
        cy.wait(500);
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
        application.typenidNumber("4400002235");
        cy.wait(500);
        application.clicknext();
        cy.wait(500);


        Personalinfo.typenameBangla("হাবিবুল বাসার সুমন");
        cy.wait(500);
        Personalinfo.typenameEnglish("Habibul Basar Sumon");
        cy.wait(500);
        Personalinfo.typefatherName("রেদওয়ানুল ইসলাম");
        cy.wait(500);
        Personalinfo.typemotherName("ফিরোজা পারভিন");
        cy.wait(500);
        Personalinfo.clickoccupation();
        cy.wait(500);
        Personalinfo.typeoccupationField("COOK");
        cy.wait(1000);
        Personalinfo.typemobileNumber("01869220854");
        cy.wait(1000);
        Personalinfo.selectmaritalStatus("Unmarried");
        cy.wait(1000);
        Personalinfo.clicknextSecondPage();
        cy.wait(500);

        Address.typeperPostCode("5000");
        cy.wait(500);
        Address.clickDistrict();
        cy.wait(500);
        Address.typeDistrictfIELD("DHAKA");
        cy.wait(1000);
        Address.clickposiceStaion();
        cy.wait(1000);
        Address.typeposiceStaionField("MIRPUR")
        cy.wait(1000);
        Address.typeperAddress("বসিরহাট গোয়ালপাড়া")
        cy.wait(500);

        Address.typeprePostCode("2000");
        cy.wait(500);
        Address.clickpreDistrict();
        cy.wait(500);
        Address.typepreDistrictField("CHANDPUR");
        cy.wait(1000);
        Address.clickprethana();
        cy.wait(1000);
        Address.typeprethanaField("MATLAB");
        cy.wait(1000);
        Address.typepreaddress("মতিরহাট বাজার");
        cy.wait(500);
        Address.clicknextbtn();
        cy.wait(500);



        Account.selectpilgrimType("Pilgrim own");
        cy.wait(500);
        Account.clickAccountHolderName();
        cy.wait(500);
        Account.typeAccountNumber("8855441122369");
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
        Account.typeBranchField("MIRPUR");
        cy.wait(1000);
        const files = "a.jpg"
        Account.selectFilephoto(files)
        cy.wait(1000);
        Account.clicknextpage();
        cy.wait(1000);
        Submit.clicksubmitButton();
        cy.wait(1000);
    });
});






