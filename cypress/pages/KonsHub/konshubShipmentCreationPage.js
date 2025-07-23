export class KonshubShipment {
  weblocators = {
    btnShipment: '[name="view-switcher"]', //use contain
    btnCreateShipment: "#btn-site-create",
    btnSearchSenderTeam: '[autocomplete="password"]',
    senderTeamList: ".team-list", //eq 0
    dateActiveBox: '.active-box',
    btn_next: '[data-lang-key="WORKFLOW.NEXT"]',
  };

  clickNavButton(navStatusButton) {
    cy.get(this.weblocators.btnShipment).contains(navStatusButton).click();
  }
  clickCreateShipmentButton() {
    cy.get(this.weblocators.btnCreateShipment).click();
  }
  SearchSenderTeam() {
    cy.get(this.weblocators.btnSearchSenderTeam).type("ABCDE");
    cy.get(this.weblocators.senderTeamList).eq(0).click();
  }

  //Next

  clickNextStep1() {
    cy.get('[id="mat-datepicker-3"]').should("not.exist");
    cy.get(this.weblocators.dateActiveBox).should("be.exist");
    cy.get(this.weblocators.btn_next).should("be.enabled").first().scrollIntoView().click({ force: true });
  }
}
