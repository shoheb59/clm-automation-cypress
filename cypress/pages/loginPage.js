export class loginPage {
    weblocators = {
      email_input: '[formcontrolname = "Email"]',
      password_input: '[formcontrolname = "Password"]',
      submit_button: '[type= "submit"]',
      english_button_login_page: '[role= "presentation"]:last-of-type',
      language_dd: '.language-button-wrapp',
      english_button: '[role="menuitem"]:first-of-type',
      //modal: '[role= "dialog"]'
      modal: '.mat-mdc-dialog-content > :nth-child(1)',
      wrongPassToastMessage: '.mat-mdc-snack-bar-label',
      wrongEmailUnauthorizedLabel: '[data-lang-key="APP_LOGIN.LOGIN_CUSTOMIZED_UNAUTHORIZED_EMAIL"]',
      invalidEmailLabel: '[data-lang-key="APP_LOGIN.LOGIN_CUSTOMIZED_INVALID_EMAIL"]',
    }
  
    openURL() {
      cy.visit(Cypress.env('URL'),{timeout: 50000});
      

    }
  
    enterEmail(email) {
      cy.get(this.weblocators.email_input).type(email);
    }
  
    enterPassword(password) {
      cy.get(this.weblocators.password_input).type(password);
    }
    enterPasswordBlank()
    {
      cy.get(this.weblocators.password_input).clear();
    }
    selectEnglishButton()
    {
      cy.get(this.weblocators.english_button_login_page).click()
    }
  
    btnsubmit() {
      cy.get(this.weblocators.submit_button).click({timeout: 30000});
    }
  
     verifyUrls() {

      
       
       //cy.url({timeout: 90000}).should('include', 'https://clm.selisestage.com/dashboard/daily');
      cy.url({timeout: 90000}).should('include', 'http://clm.seliselocal.com/dashboard/daily');
    }

    verifyWeatherInfoLoad()
    {
      cy.get('app-cockpits-weather-info').should('be.visible');
      cy.get('app-cockpits-weather-info')
      .should('contain', '°C');

    }
    verifySttisticsLoad()
    {
      cy.get('app-app-smart-cockpits-scheduled-shipments-statistics').should('contain','Scheduled Shipments');
    }

    // selectEnglish()
    // {
    //   cy.get(this.weblocators.language_dd).click();
    //   cy.get(this.weblocators.english_button).click();
    // }

   

      
      
    // handleModal() {
    //   cy.wait(9000)
    //   cy.get(this.weblocators.modal)
    //     .if('visible')
    //     .then(() => {
    //       cy.contains('button', 'Cancel', { timeout: 30000 }).click();
    //     });
    //   }
    handleModal() {
      cy.wait(4000);
      cy.get('body').then(($body) => {
        // Check if the modal exists and is visible
        if($body.find(this.weblocators.modal).is(':visible')) {
          cy.get(this.weblocators.modal).should('be.visible'); // Ensure visibility
          cy.contains('button', 'Cancel', { timeout: 30000 }).click();
    
          // Recursively call handleModal to check again
          this.handleModal();
        }
      });
    }

    verifyWrongPasswordErrorMessage()
    {
      cy.get(this.weblocators.wrongPassToastMessage).should('contain','Wrong email or password');
    }

   verifyWrongEmailTextLabel()
   {
    cy.get(this.weblocators.wrongEmailUnauthorizedLabel).should('contain','Unauthorized');
   }

   verifyInvalidEmailTextLabel()
   {
    cy.get(this.weblocators.invalidEmailLabel).should('contain', 'Please enter a valid email address');
   }
   verifyPasswordfiledblanklabel()
   {
    cy.get('.ng-trigger-transitionMessages').eq(1).should('contain', 'Please enter your password');
   }
         
    }


