

it('yop',()=>{

    cy.visit("https://www.yopmail.com/en/");
  cy.get('[name="login"]').clear().type('hasnat.sm1@yopmail.com');
  cy.get('[title="Check Inbox @yopmail.com"]').click();
  cy.get('#ifmail').should('be.visible');



})