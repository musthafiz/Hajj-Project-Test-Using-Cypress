class Application {
    newPilgrimAdd = 'b[class="text-dark"]';
    genderFemale = 'div>label>input[value="female"]';
    genderMale = 'div>label>input[value="male"]'
    birthDate = 'input[placeholder="dd-mm-yyyy"]';
    identityType = "input[value='NID']";
    nidNumber = "input[placeholder='NID number']";
    next = "button";


    clicknewPilgrimAdd() {
        cy.get(this.newPilgrimAdd).click();
    }
    clickgenderFemale() {
        cy.get(this.genderFemale).click();
    }
    clickgenderMale() {
        cy.get(this.genderMale).click();
    }
    typebirthDate(date) {
        cy.get(this.birthDate).type(date);
    }
    clickidentityType() {
        cy.get(this.identityType).click();
    }
    typenidNumber(nid) {
        cy.get(this.nidNumber).type(nid);
    }
    clicknext() {
        cy.get(this.next).contains("পরবর্তী").click();
    }


}
module.exports = new Application();