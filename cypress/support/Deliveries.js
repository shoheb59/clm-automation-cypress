const deliveriestablocator = 
{
    txt_globalSearchBox:'[formcontrolname="searchText"]',
    btn_Manage: '[aria-haspopup="menu"]',
    txt_modalQuantity: '[formcontrolname="quantity"]',
    txt_modalTruckPitch:'[formcontrolname="truckPitches"]',
    txt_ZoneField: '[formcontrolname="zone"]',
    dd_ZoneOptions: '[role="option"]',
    btn_SaveAriveModal: '.mtrl-dialog-add-btn',
    table_Row: 'tbody tr',
    
}
Cypress.Commands.add('SearchShipmentOnDeliveries',()=>{

  cy.get('@shipmentIdentifier').then((shipmentNumber)=>{
    cy.get(deliveriestablocator.txt_globalSearchBox).clear().type(shipmentNumber);
    cy.get(deliveriestablocator.table_Row).should('have.length',1)
    cy.get(deliveriestablocator.table_Row).should('contain.text',shipmentNumber).eq(0).click();

  })

})

Cypress.Commands.add('ClickFirstShipmentForManage',()=>{
  cy.get(deliveriestablocator.table_Row).should('be.visible').eq(0).click();

})


Cypress.Commands.add('VerifySearchResult',()=>{
    cy.get('@shipmentIdentifier').then((shipmentNumber)=>{
        cy.get(deliveriestablocator.table_Row).should('contain.text',shipmentNumber).eq(1).click();

    })
})


Cypress.Commands.add('ClickManageButtonAndSelectOption',(locator)=>{
  cy.get(deliveriestablocator.btn_Manage).contains('Manage').click();
  cy.get(locator).click();

})


Cypress.Commands.add('ArriveInputModal',()=>{
  const randomValue = () => Math.floor(Math.random() * 5) + 1;


  cy.get(deliveriestablocator.txt_modalQuantity).type(`${randomValue()}`,{force:true});
  cy.get(deliveriestablocator.txt_modalTruckPitch).type(`${randomValue()}`,{force: true});
  cy.get(deliveriestablocator.txt_ZoneField).click();
  cy.get(deliveriestablocator.dd_ZoneOptions).first().click();
  cy.get(deliveriestablocator.btn_SaveAriveModal).click();


})


Cypress.Commands.add('TextLabelVerification',(locator,expectedText)=>{
  cy.get(locator).then(($text)=>{

    const actualText = $text.text().trim();
    expect(actualText).to.eq(expectedText)
  })
})


Cypress.Commands.add('VerifyShipment',()=>{

    cy.get('@shipmentIdentifier').then((shipmentNumber)=>{
    cy.get(deliveriestablocator.table_Row).should('contain.text',shipmentNumber);
})
})





