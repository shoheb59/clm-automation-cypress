export class selfregistration {

    weblocators = {
        btn_en: '[role="presentation"]:last-of-type',
        btn_registration: '[data-lang-key="APP_LOGIN.REGISTRATION"]',
        txt_firstName: '[formcontrolname="firstName"]',
        txt_lastName: '[formcontrolname="lastName"]',
        txt_email:'[formcontrolname="email"]',
        txt_phoneNumber: '[formcontrolname="phoneNumber"]',
        cb_consents: '.mat-checkbox-inner-container input',
        cb_Concents: '[id = "mat-checkbox-1-input"]',
        btn_agreed: '[aria-label="Save"]',
        btn_signUP: '[aria-label="LOGIN"]',

        //maildrop

        txt_emailField: '[placeholder="view-this-mailbox"]',

    }

    openURL() {
        cy.visit(Cypress.env('URL'),{timeout: 30000});  
  
      }

    selectEnglishLanguage()
    {
        cy.get(this.weblocators.btn_en).click();
    }
    clickRegistrationButton()
    {
        cy.get(this.weblocators.btn_registration).should('be.visible').click();
    }
    enterFirstName()
    {
        cy.get(this.weblocators.txt_firstName).type('Hasnat');
    }
    enterLastName()
    {
        cy.get(this.weblocators.txt_lastName).type('Shoheb')
    }
    enterEmail()
    {
        const randomNumber =  Math.floor(Math.random()*1000)
        const email = `hasnat ${randomNumber}@maildrop.cc`;
        cy.get(this.weblocators.txt_email).type(email);
    }

    enterPhoneNumber()
    {
        cy.get(this.weblocators.txt_phoneNumber).type('343433434')
    }
    clickConsets()
    {
        cy.get(this.weblocators.cb_Concents).click({force: true});
        cy.get(this.weblocators.btn_agreed).should('not.be.disabled').click();

    }

    clickSignUpButton()
    {
        cy.get(this.weblocators.btn_signUP).should('not.be.disabled').click();
    }

    // visitMaildropEmail() {
    //     cy.origin('https://maildrop.cc', () => {
    //         cy.on('uncaught:exception', (err) => {
    //             // Suppress the error and let the test continue
    //             return false;
    //         });
    //         cy.visit('https://maildrop.cc');
    //     });
    // }
    enterMailinMaildrop()
    {

    }

}