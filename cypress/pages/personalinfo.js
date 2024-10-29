class Personalinfo {

    nameBangla = "input[placeholder='Name in Bangla']"
    nameEnglish = "input[placeholder='Name in English']"
    fatherName = "input[placeholder='Father Name in Bangla']"
    motherName = "input[placeholder='Mother Name in Bangla ']"
    occupation = "span[id='select2--container']"
    occupationField = "input[role='searchbox']"
    mobileNumber = "input[placeholder='Mobile number']"
    maritalStatus = "select[class='form-control input-sm']"
    nextSecondPage = "button";



    typenameBangla(banglaName) {
        cy.get(this.nameBangla).type(banglaName);
    }

    typenameEnglish(englishName) {
        cy.get(this.nameEnglish).type(englishName);
    }

    typefatherName(fname) {
        cy.get(this.fatherName).type(fname);
    }

    typemotherName(mname) {
        cy.get(this.motherName).type(mname);
    }
    clickoccupation() {
        cy.get(this.occupation).click();
    }

    typeoccupationField(occupy) {
        cy.get(this.occupationField).type(`${occupy}{enter} `);
    }

    // typemobileNumber(mobile) {
    //     cy.get(this.mobileNumber).type(mobile);
    // }
    typemobileNumber(mobile) {
        cy.get(this.mobileNumber).type(mobile, { force: true });
    }


    selectmaritalStatus(marital) {
        cy.get(this.maritalStatus).select(marital);
    }
    clicknextSecondPage() {
        cy.get(this.nextSecondPage).contains("পরবর্তী").click();
    }

}
module.exports = new Personalinfo();