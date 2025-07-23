import "cypress-iframe";
import '../support/commands';


export class selfregistration {
  constructor() {
    this.generatedEmail = ""; // <- store email here
  }

  weblocators = {
    btn_en: '[role="presentation"]:last-of-type',
    btn_registration: '[data-lang-key="APP_LOGIN.REGISTRATION"]',
    txt_firstName: '[formcontrolname="firstName"]',
    txt_lastName: '[formcontrolname="lastName"]',
    txt_email: '[formcontrolname="email"]',
    txt_phoneNumber: '[formcontrolname="phoneNumber"]',
    cb_consents: ".mat-checkbox-inner-container input",
    cb_Concents: '[type="checkbox"]',
    btn_agreed: '[aria-label="Save"]',
    btn_signUP: '[aria-label="LOGIN"]',

    //maildrop

    txt_emailField: '[placeholder="view-this-mailbox"]',
  };

  openURL() {
    cy.visit(Cypress.env("URL"), { timeout: 30000 });
  }

  selectEnglishLanguage() {
    cy.get(this.weblocators.btn_en).click();
  }
  clickRegistrationButton() {
    cy.get(this.weblocators.btn_registration).should("be.visible").click();
  }
  enterFirstName() {
    cy.get(this.weblocators.txt_firstName).type("Hasnat");
  }
  enterLastName() {
    cy.get(this.weblocators.txt_lastName).type("Shoheb");
  }
  enterEmail() {
    const randomNumber = Math.floor(Math.random() * 10000);
    this.generatedEmail = `hasnat${randomNumber}@yopmail.com`;
    cy.get(this.weblocators.txt_email).type(this.generatedEmail);
  }

  enterPhoneNumber() {
    cy.get(this.weblocators.txt_phoneNumber).type("343433434");
  }
  clickConsets() {
    //cy.get('[type="checkbox"]').check({force: true});
    cy.get(this.weblocators.cb_Concents).check({ force: true });
    cy.get(this.weblocators.btn_agreed)
      .should("not.be.disabled")
      .click({ force: true });
  }

  clickSignUpButton() {
    cy.get(this.weblocators.btn_signUP)
      .contains("Sign Up")
      .should("not.be.disabled")
      .click({ force: true });
  }

  clickLoginBtn() {
    cy.wait(3000);
    cy.get(this.weblocators.btn_signUP)
      .contains("Login")
      .should("not.be.disabled")
      .click({ force: true });
  }

  navigateToMaildropEmail() {
    const email = this.generatedEmail;

   cy.origin("https://www.yopmail.com", { args: { email } }, ({ email }) => {
  cy.visit("https://www.yopmail.com/en/");
  cy.get('[name="login"]').clear().type(email);
  cy.get('[title="Check Inbox"]').click();
  cy.get('#ifmail').contains('ACTIVATE').click();
});
  }
}
