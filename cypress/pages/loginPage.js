export class loginPage {
    weblocators = {
      email_input: '[formcontrolname = "Email"]',
      password_input: '[formcontrolname = "Password"]',
      submit_button: '[type= "submit"]',
      english_button_login_page: '[role= "presentation"]:last-of-type',
      language_dd: '.language-button-wrapp',
      english_button: '[role="menuitem"]:first-of-type',
      modal: '[role= "dialog"]'
    }
  
    openURL() {
      cy.visit(Cypress.env('URL'),{timeout: 30000});
      

    }
  
    enterEmail(email) {
      cy.get(this.weblocators.email_input).type(email);
    }
  
    enterPassword(password) {
      cy.get(this.weblocators.password_input).type(password);
    }
    selectEnglishButton()
    {
      cy.get(this.weblocators.english_button_login_page).click()
    }
  
    btnsubmit() {
      cy.get(this.weblocators.submit_button).click({timeout: 7000});
    }
  
     verifyUrls() {

      
      //cy.url({timeout: 90000}).should('include', 'http://clmtest.seliselocal.com/dashboard/daily');
      cy.url({timeout: 90000}).should('include', 'http://clm.seliselocal.com/dashboard/daily');
    }

    // selectEnglish()
    // {
    //   cy.get(this.weblocators.language_dd).click();
    //   cy.get(this.weblocators.english_button).click();
    // }

   

      
      
      handleModal()
      {
         cy.contains('button', 'Cancel', { timeout: 10000 }).as('cancelButton');
            cy.get('@cancelButton').click();
          }
        
    }