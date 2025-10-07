export class sitePage {
    weblocators = {
    btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
    btn_project: '.nav-link-title.ng-star-inserted',
    btn_searchBar: '[data-lang-key = "APP_PROJECTS.PROJECT_LIST_SEARCH_KEYWORD"]',
    btn_SelectProject: '.w-100-p.item-card',
    btn_SiteAdd: '[data-lang-key="APP_PROJECTS.ADD"]',
    txt_siteName: '[formcontrolname="SiteName"]',
    txt_siteAddress: '[id="google-autoComplete"]',
    txt_address_first: '.pac-item',

    selectFirstAddess: '.pac-item:first-of-type',
    txt_contactName: '[formcontrolname="ContactPersonName"]',
    txt_contactEmail: '[formcontrolname="ContactPersonEmail"]',
    txt_contactPhone: '[formcontrolname="ContactPersonPhone"]',
    cb_generateCodeFortheStie: '[data-lang-key="APP_PROJECTS_SITES.SITE_CODE_ENABLE_TEXT"]',
    cb_leandCardPermission: '[data-lang-key="APP_PROJECTS_SITES.LEAN_CARD_CREATION_PERMISSION_TEXT"]',
    txt_siteNotice: '[formcontrolname="Notice"]',
    notice_input: '#Notice',
    submit_button: '.submit-button > .mat-button-wrapper',
    //upload photo
    upload_photo_button: '[type="button"]',
    file_input: 'input[type="file"][class="file"]',
    btn_uploadPhotoSave: '[id="image-coropper-save"]',
    site_create_edit_save: '[data-lang-key="APP_PROJECTS_SITES.SAVE"]',
    }
  
    clickNavButton()
    {
        cy.get(this.weblocators.btn_navigation).click({timeout: 5000})
    }
    clickProjectButton() {
      cy.get(this.weblocators.btn_project).contains('Projects').click({timeout: 4000})
    }

    typeSearchBtn()
    {
        cy.readFile('cypress/fixtures/projectName.json').then((data) => {
        const projectName = data.name;
        cy.log('Reusing Project Name:', projectName);
        cy.get(this.weblocators.btn_searchBar).type(projectName)
        })
    }
    selectProject()
    {
        cy.get(this.weblocators.btn_SelectProject).click();
    }
    clickAddButton() {
        cy.get(this.weblocators.btn_SiteAdd).click()
    }
    enterSiteName()
    {
        const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
        cy.get(this.weblocators.txt_siteName).type(`Site ${randomNum}`);
    }
    enterSiteAddresss(address)
    {
        cy.get(this.weblocators.txt_siteAddress).type(address);
        cy.get(this.weblocators.txt_address_first).first().click({force: true});
    }
    enterContactPersonName()
    {
        cy.get(this.weblocators.txt_contactName)
        .should('be.visible')
        .scrollIntoView()
        .type('John Write');
    }
    
    enterContactPersonEmail()
    {
        cy.get(this.weblocators.txt_contactEmail).type('write@maildrop.cc')
    }
    enterContactPersonPhone(){
        cy.get(this.weblocators.txt_contactPhone).type('+989')

    }
    selectGenerateCode()
    {
        cy.get(this.weblocators.cb_generateCodeFortheStie).click()
    }
    selectLeanCardGeneration()
    {
        cy.get(this.weblocators.cb_leandCardPermission).click()
    }

    typeSiteNotice(notice)
    {
        cy.get(this.weblocators.txt_siteNotice).type(notice);
    }

    clickUploadPhotoButton() {
        cy.get(this.weblocators.upload_photo_button).contains('UPLOAD PHOTO').click();
      }
    
    uploadFile(filePath) {
  
          cy.get(this.weblocators.file_input).eq(1).attachFile(filePath);
  
        }
  
      
    clickSaveUploadPhotobtn()
      {
         cy.get(this.weblocators.btn_uploadPhotoSave).click();
      }
         
    
    clickSiteCreateEditSave() {
        cy.get(this.weblocators.site_create_edit_save).click();
      }
    
  



    

  }
  