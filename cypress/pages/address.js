class Address {

    perPostCode = "(//input[@placeholder='Post Code'])[1]"
    District = "(//span[@id='select2--container'])[1]"
    DistrictfIELD = "input[role='searchbox']"
    posiceStaion = "(//span[@id='select2--container'])[2]"
    posiceStaionField = "(//input[@role='searchbox'])[1]"
    perAddress = "(//input[@placeholder='Address'])[1]"


    prePostCode = "(//input[@placeholder='Post Code'])[2]"
    preDistrict = "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    preDistrictField = "input[role='searchbox']"
    prethana = "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    prethanaField = "input[role='searchbox']"
    preaddress = "(//input[@placeholder='Address'])[2]"
    nextbtn = "button"


    typeperPostCode(postcode) {
        cy.xpath(this.perPostCode).type(postcode);
    }
    clickDistrict() {
        cy.xpath(this.District).click();
    }
    typeDistrictfIELD(district) {
        cy.get(this.DistrictfIELD).type(`${district}{enter}`);
    }
    clickposiceStaion() {
        cy.xpath(this.posiceStaion).click();
    }
    typeposiceStaionField(MIRPUR) {
        cy.xpath(this.posiceStaionField).type(`${MIRPUR}{enter}`);
    }
    typeperAddress(address) {
        cy.xpath(this.perAddress).type(address);
    }



    //Present Address

    typeprePostCode(Code) {
        cy.xpath(this.prePostCode).type(Code);
    }
    clickpreDistrict() {
        cy.xpath(this.preDistrict).click();
    }
    typepreDistrictField(CHANDPUR) {
        cy.get(this.preDistrictField).type(`${CHANDPUR}{enter}`);
    }
    clickprethana() {
        cy.xpath(this.prethana).click();
    }

    typeprethanaField(MATLAB) {
        cy.get(this.prethanaField).type(`${MATLAB}{enter}`);
    }
    typepreaddress(preaddres) {
        cy.xpath(this.preaddress).type(preaddres);
    }

    clicknextbtn() {
        cy.get(this.nextbtn).contains("পরবর্তী").click();
    }


}
module.exports = new Address();