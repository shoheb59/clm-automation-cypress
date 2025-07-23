export class KonshubNavigationPage {
  weblocators = {
    btn_navigation: '[fusenavbarvertical= "toggleBar"]',
    btn_konsub: 'a.mat-ripple.nav-link[href="https://konshub-clm.selisestage.com/konshub?SiteId=8c99ed76-0860-458a-a3a5-5e46b5e008eb"]',
    language_dd: ".language-button",
    english_button: '[role="menuitem"]:first-of-type',
    btn_allNavOption: '.nav-link-title.ng-star-inserted',
  };


  selectLanguage() {
    cy.get(this.weblocators.language_dd, { timeout: 20000 }).first().click();
  }

  clickNavigationButton() {
    cy.get(this.weblocators.btn_navigation).click({force: true});
  }

  navigateToKonshub() {
      cy.get(this.weblocators.btn_allNavOption).contains('Consolidation Hub').click({timeout: 4000})
    }
  
  
}
