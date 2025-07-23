export class projectPage {
    weblocators = {
      btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
      btn_project: '.nav-link-title.ng-star-inserted',
      btn_createPoject: '[data-lang-key = "APP_PROJECTS.CREATE_PROJECT"]',
      txt_projectDetails: '[formcontrolname = "ProjectName"]',
      txt_clientName: '[formcontrolname = "ClientName"]',
      startDate: '[aria-label="Open calendar"]',
      endDate:'[aria-label="Open calendar"]',
      yearOption: '[aria-label="Choose month and year"]',
      selectYear: '[aria-label ="2035"]',
      selectMonth: '.mat-calendar-body-cell.mat-calendar-body-active',
      selectDay: '.mat-calendar-body-cell',
      todayDate: '.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today',
      cb_hasWarhouse: '[type="checkbox"]',
      mat_checkbox_input: '#mat-checkbox-1-input',
      upload_photo_button: '[type="button"]',
      file_input: 'input[type="file"][class="file"]',
      btn_uploadPhotoSave: '[id="image-coropper-save"]',
      project_create_edit_save: '[data-lang-key = "APP_PROJECTS.SAVE"]',
    }

    clickNavButton()
    {
        cy.get(this.weblocators.btn_navigation).click({timeout: 5000})
    }
  
  
    clickProjectButton() {
      cy.get(this.weblocators.btn_project).contains('Projects').click({timeout: 4000})
    }
  
    clickCreateProject() {
      cy.get(this.weblocators.btn_createPoject).click();
    }
  
    enterProjectName(ProjectName) {
      const randomIndex = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
      cy.get(this.weblocators.txt_projectDetails).scrollIntoView().type(`ProjectName ${randomIndex}`);
    }
  
    enterClientName(clientName) {
      cy.get(this.weblocators.txt_clientName).type(clientName);
    }
  
   selectStartDate()
   {
     cy.get(this.weblocators.startDate).first().click({force: true});
     cy.get(this.weblocators.todayDate).dblclick({force: true});


   }

   selectEndDate()
   {
    cy.get(this.weblocators.endDate).eq(1).click({timeout: 3000});
    cy.get(this.weblocators.yearOption).click();
    cy.get(this.weblocators.selectYear).click();
    cy.get(this.weblocators.selectMonth).click();
    cy.get(this.weblocators.selectDay).contains('15').click({force: true});



   }

    clickhasKonshubCheckbox() {
      cy.get(this.weblocators.cb_hasWarhouse).scrollIntoView().check({force: true});
    }
  
  
    clickUploadPhotoButton() {
      cy.get(this.weblocators.upload_photo_button).contains('UPLOAD PHOTO').click();
    }
  
    uploadFile(filePath) {

        cy.get(this.weblocators.file_input).first().attachFile(filePath);

      }

    
    clickSaveUploadPhotobtn()
    {
       cy.get(this.weblocators.btn_uploadPhotoSave).click();
    }
       
  
    clickProjectCreateEditSave() {
      cy.get(this.weblocators.project_create_edit_save).click();
    }
  

  }
  