class Account {

    pilgrimType = "select[class='form-control input-sm']"
    AccountHolderName = "input[placeholder='Account Holder Name']"
    AccountNumber = "input[placeholder='Account Number']"
    BankName = "(//span[@id='select2--container'])[1]"
    BankNameField = "(//ul[@id='select2--results'])[1]"
    BranchDistrict = "(//span[@id='select2--container'])[2]"
    BranchDistrictField = "(//ul[@id='select2--results'])[1]"
    Branch = "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    BranchField = "input[role='searchbox']"
    photo = 'input[type=file]';
    nextpage = "button"


    selectpilgrimType(Pilgrimown) {
        cy.get(this.pilgrimType).select(Pilgrimown);
    }

    clickAccountHolderName() {
        cy.get(this.AccountHolderName).click();
    }

    typeAccountNumber(accnumber) {
        cy.get(this.AccountNumber).type(accnumber);
    }


    clickBankName() {
        cy.xpath(this.BankName).click();
    }
    containsBankNameField(bankName) {
        cy.xpath(this.BankNameField).contains(bankName).scrollIntoView().click();
    }


    clickBranchDistrict() {
        cy.xpath(this.BranchDistrict).click();
    }

    containsBranchDistrictField(NOAKHALI) {
        cy.xpath(this.BranchDistrictField).contains(NOAKHALI).scrollIntoView().click();
    }

    clickBranch() {
        cy.xpath(this.Branch).click();
    }

    typeBranchField(CHOWMUHANI) {
        cy.get(this.BranchField).type(`${CHOWMUHANI}{enter}`);
    }

    selectFilephoto(file) {
        cy.get(this.photo).selectFile(`cypress/fixtures/${file}`, { force: true });
    }
    clicknextpage() {
        cy.get(this.nextpage).contains("পরবর্তী").click();
    }

}


module.exports = new Account();


/*

    // cy.get('input[type="file"]').selectFile("C:\\Users\\musth\\Desktop\\Cypress\\Picture.jpg");
    cy.get('input[type="file"]').selectFile("cypress/image/a.jpg", {
        force: true,
    });
    
    
    cy.scrollTo("top");
    
    cy.get("button")
      .contains("সাবমিট")
      .scrollIntoView({
        duration: 6000,
        easing: "linear",
        offset: { top: -600 },
      });




UploadFile(file){
    cy.get('input[type="file"]').selectFile(file , {force: true});
  }
  const file="cypress/image/a.jpg";
  LoginPage.UploadFile(file);




      */