export class konsubShipment {
  weblocators = {
    btn_navigation: '[fusenavbarvertical= "toggleBar"]',
    btn_konsub: 'a.mat-ripple.nav-link[href="https://konshub-clm.selisestage.com/konshub?SiteId=8c99ed76-0860-458a-a3a5-5e46b5e008eb"]',
    language_dd: ".language-button",
    english_button: '[role="menuitem"]:first-of-type',
  };

  clickNavigationButton() {
    cy.get(this.weblocators.btn_navigation).click();
  }
  navigateKonsub() {   
    cy.get(this.weblocators.btn_konsub)
      .should("have.attr", "target", "_blank") // Ensure the link has target="_blank"
      .invoke("attr", "target", "_self") // Change target to _self to open in the same tab
      .click(); // Click the link
  }
  selectLanguage() {
    cy.get(this.weblocators.language_dd, { timeout: 20000 }).first().click();
  }
}
