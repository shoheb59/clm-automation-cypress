export class projectPage {
    weblocators = {
      btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
      btn_project: '.nav-link-title.ng-star-inserted',
      btn_createPoject: '[data-lang-key = "APP_PROJECTS.CREATE_PROJECT"]',
      txt_projectDetails: '[formcontrolname = "ProjectName"]',
      txt_clientName: '[formcontrolname = "ClientName"]',
      startDate: '[formcontrolname = "StartDate"]',
      endDate:'[formcontrolname = "EndDate"]',
      yearOption: 'button[aria-live ="polite"]',
      selectYear: '[aria-label ="2035"]',
      selectMonth: '.mat-calendar-body-cell.mat-calendar-body-active',
      selectDay: '.mat-calendar-body-cell',
      todayDate: '.mat-calendar-body-cell-content.mat-focus-indicator.mat-calendar-body-today',
      cb_hasWarhouse: '.mat-checkbox-inner-container',
      mat_checkbox_input: '#mat-checkbox-1-input',
      upload_photo_button: '[type="button"]',
      file_input: '.row.image-coropper',
      image_cropper_save: '#image-coropper-save > .mat-button-wrapper',
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
      cy.get(this.weblocators.txt_projectDetails).scrollIntoView().type(ProjectName)
    }
  
    enterClientName(clientName) {
      cy.get(this.weblocators.txt_clientName).type(clientName);
    }
  
   selectStartDate()
   {
     cy.get(this.weblocators.startDate).click();
     cy.get(this.weblocators.todayDate).click();


   }

   selectEndDate()
   {
    cy.get(this.weblocators.endDate).click({timeout: 3000});
    cy.get(this.weblocators.yearOption).click();
    cy.get(this.weblocators.selectYear).click();
    cy.get(this.weblocators.selectMonth).click();
    cy.get(this.weblocators.selectDay).contains('15').click();



   }

    clickMatCheckbox() {
      cy.get(this.weblocators.cb_hasWarhouse).scrollIntoView().click();
    }
  
  
    clickUploadPhotoButton() {
      cy.get(this.weblocators.upload_photo_button).contains('UPLOAD PHOTO').click();
    }
  
  
    uploadFile(filePath) {

        cy.get(this.weblocators.file_input).eq(0).selectFile('test.img.jpg',{action: 'drag-drop', force: 'true'})
        }
       
    
  
    // clickImageCropperSave() {
    //   cy.get(this.weblocators.image_cropper_save).click();
    // }
  
    clickProjectCreateEditSave() {
      cy.get(this.weblocators.project_create_edit_save).click();
    }
  

  }
  