export class sitePage {
    weblocators = {
    btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
    btn_project: '.nav-link-title.ng-star-inserted',
    btn_searchBar: '[data-lang-key = "APP_PROJECTS.PROJECT_LIST_SEARCH_KEYWORD"]',
    btn_SelectProject: '.w-100-p.item-card',
    btn_SiteAdd: '[data-lang-key="APP_PROJECTS.ADD"]',
    txt_siteName: '[formcontrolname="SiteName"]',
    txt_siteAddress: '[data-placeholder ="Address"]',
    selectFirstAddess: '.pac-item:first-of-type',
    txt_contactName: '[formcontrolname="ContactPersonName"]',
    txt_contactEmail: '[formcontrolname="ContactPersonEmail"]',
    txt_contactPhone: '[formcontrolname="ContactPersonPhone"]',
    cb_generateCodeFortheStie: '[data-lang-key="APP_PROJECTS_SITES.SITE_CODE_ENABLE_TEXT"]',
    cb_leandCardPermission: '[data-lang-key="APP_PROJECTS_SITES.LEAN_CARD_CREATION_PERMISSION_TEXT"]',
    txt_siteNotice: '[formcontrolname="Notice"]',

      notice_input: '#Notice',
      submit_button: '.submit-button > .mat-button-wrapper',
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
        cy.get(this.weblocators.btn_searchBar).type('z-1')
        
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
        cy.get(this.weblocators.txt_siteName).type("Site 6")
    }
    enterSiteAddresss(address)
    {
        cy.get(this.weblocators.txt_siteAddress).type(address);
        cy.get(this.weblocators.selectFirstAddess).click();
    }
    enterContactPersonName()
    {
        cy.get(this.weblocators.txt_contactName)
        .should('be.visible')
        .scrollIntoView()
        .type('HAsnat');
    }
    
    enterContactPersonEmail()
    {
        cy.get(this.weblocators.txt_contactEmail).type('h@maildrop.cc')
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



    

    // clickFirstSubtitle() {
    //   cy.get(this.weblocators.first_subtitle).click();
    // }
  
    // clickAddButton() {
    //   cy.get(this.weblocators.add_button).click();
    // }
  
    // enterSiteName(siteName) {
    //   cy.get(this.weblocators.site_name_input).click().type(siteName);
    // }
  
    // enterGoogleAutoCompleteAddress(address) {
    //   cy.get(this.weblocators.google_auto_complete_input).click().type(address);
    // }
  
    // enterContactPersonName(name) {
    //   cy.get(this.weblocators.contact_person_name_input).click().type(name);
    // }
  
    // enterContactPersonEmail(email) {
    //   cy.get(this.weblocators.contact_person_email_input).click().clear().type(email);
    // }
  
    // enterContactPersonPhone(phone) {
    //   cy.get(this.weblocators.contact_person_phone_input).click().type(phone);
    // }
  
    // toggleCheckbox6() {
    //   cy.get(this.weblocators.mat_checkbox_6).click();
    //   cy.get(this.weblocators.mat_checkbox_6_input).click();
    // }
  
    // toggleCheckbox7() {
    //   cy.get(this.weblocators.mat_checkbox_7).click();
    //   cy.get(this.weblocators.mat_checkbox_7_input).click();
    // }
  
    // enterNotice(notice) {
    //   cy.get(this.weblocators.notice_input).click().type(notice);
    // }
  
    // clickSubmitButton() {
    //   cy.get(this.weblocators.submit_button).click();
    // }
  }
  