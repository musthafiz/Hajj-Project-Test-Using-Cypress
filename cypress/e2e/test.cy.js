describe("test module", () => {
  it("login", () => {
    // cy.visit("https://ehaj.hajj.gov.bd/");
    cy.visit("https://uat-ehaj.oss.net.bd/");
    cy.get("li>a").contains("লগইন").click();
    cy.get("span").contains("হজযাত্রী/ গাইড লগইন").click();
    cy.get('input[id="mobile_no"]').type("01869220854");
    cy.get('input[id="password"]').type("Hello@2020r");
    cy.get('button[id="next_btn"]').click();

    //Landing Page

    cy.url().should("include", "my-desk");
    cy.get('div[class="w-100 d-flex justify-content-between"]')
      .contains("প্রাক নিবন্ধন")
      .click();
    cy.wait(500);
    cy.get('a[class="dash-menu-text"]').contains("আবেদন").click();
    cy.wait(500);

    //Application Page

    cy.url().should("include", "pilgrims-list");
    cy.get('b[class="text-dark"]').click();
    cy.wait(500);
    cy.url().should("include", "pilgrim-create");
    cy.get('div>label>input[value="female"]').click();
    cy.wait(500);
    cy.get('div>label>input[value="male"]').click();
    cy.wait(500);
    cy.scrollTo("top");
    // cy.get('input[placeholder="dd-mm-yyyy"]').click();
    // cy.wait(500);
    let birthDate = cy
      .get('input[placeholder="dd-mm-yyyy"]')
      .type("04-Jan-1999");
    birthDate.click();
    cy.wait(500);
    cy.get("input[value='NID']").click();
    cy.wait(500);
    cy.get("input[placeholder='NID number']").type("1401501444");
    cy.get("button").contains("পরবর্তী").click();
    cy.wait(500);

    //Personal Information Page

    cy.get("input[placeholder='Name in Bangla']").type("মোঃ হাসনাত আবদুল্লাহ");
    cy.wait(500);
    cy.get("input[placeholder='Name in English']").type("MD Hasnat Abdullah");
    cy.wait(500);
    cy.get("input[placeholder='Father Name in Bangla']").type("আসিফ নজরুল");
    cy.wait(500);
    cy.get("input[placeholder='Father Name in Bangla']").type("আসিফ নজরুল");
    cy.wait(500);
    cy.get("input[placeholder='Mother Name in Bangla ']").type(
      "সৈয়দা রেজওয়ানা আহসান"
    );
    cy.wait(500);
    cy.get("span[id='select2--container']").click();
    cy.wait(500);
    cy.get("input[role='searchbox']").type("ENGINEER{enter}");
    cy.wait(500);
    cy.get("input[placeholder='Mobile number']").type("01303937998");
    cy.wait(500);
    cy.get("select[class='form-control input-sm']").select("Unmarried");
    cy.wait(500);
    cy.get("button").contains("পরবর্তী").click();
    cy.wait(500);

    //Address
    //Permanent Address
    cy.get("b").contains("Address").should("be.visible");
    cy.xpath("(//input[@placeholder='Post Code'])[1]").type("1500");
    cy.wait(500);
    cy.xpath("(//span[@id='select2--container'])[1]").click();
    cy.wait(500);
    cy.get("input[role='searchbox']").type("DHAKA{enter}");
    cy.wait(500);
    cy.xpath("(//span[@id='select2--container'])[2]").click();
    cy.xpath("(//input[@role='searchbox'])[1]").type("MIRPUR{enter}");
    cy.wait(500);
    cy.xpath("(//input[@placeholder='Address'])[1]").type(
      "House 34, Road 34, Block F, Section 10,Mirpur"
    );
    cy.wait(500);

    //Present Address
    cy.xpath("(//input[@placeholder='Post Code'])[2]").type("1400");
    cy.xpath(
      "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    ).click();
    cy.get("input[role='searchbox']").type("CHANDPUR{enter}");
    cy.wait(1000);
    cy.xpath(
      "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    ).click();
    cy.wait(500);
    cy.get("input[role='searchbox']").type("UTTAR MATLAB{enter}");
    cy.xpath("(//input[@placeholder='Address'])[2]").type(
      "চদ্রিমমা উদ্দান গলি"
    );
    cy.wait(500);
    cy.get("button").contains("পরবর্তী").click();
    cy.wait(500);

    //Refundable Account Information
    cy.get("b").contains("Refundable Account Information").should("be.visible");
    cy.get("select[class='form-control input-sm']").select("Pilgrim own");
    cy.wait(500);
    cy.get("input[placeholder='Account Holder Name']").click();
    cy.wait(500);
    cy.get("input[placeholder='Account Number']").type("12345678910123");
    cy.wait(500);

    cy.xpath("(//span[@id='select2--container'])[1]").click();
    cy.wait(500);
    cy.xpath("(//ul[@id='select2--results'])[1]")
      .contains("Jamuna Bank Limited")
      .scrollIntoView()
      .click();
    cy.wait(500);

    cy.xpath("(//span[@id='select2--container'])[2]").click();
    cy.wait(500);
    cy.xpath("(//ul[@id='select2--results'])[1]")
      .contains("NOAKHALI")
      .scrollIntoView()
      .click();
    cy.wait(500);
    cy.xpath(
      "(//span[normalize-space()='Select one']//span[@id='select2--container'])[1]"
    ).click();
    cy.wait(500);
    cy.get("input[role='searchbox']").type("CHOWMUHANI{enter}");
    cy.wait(500);
    // cy.get('input[type="file"]').selectFile("C:\\Users\\musth\\Desktop\\Cypress\\Picture.jpg");
    cy.get('input[type="file"]').selectFile("cypress/image/a.jpg", {
      force: true,
    });
    cy.wait(500);
    cy.get("button").contains("পরবর্তী").click();
    cy.scrollTo("top");
    cy.wait(500);
    cy.get("button")
      .contains("সাবমিট")
      .scrollIntoView({
        duration: 6000,
        easing: "linear",
        offset: { top: -600 },
      });
  });
});
