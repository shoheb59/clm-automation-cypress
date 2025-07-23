export class DeliveriesPage {

  
    deliveriesLocator = 
    {
        navigation: '[role="tab"]', //use contain
        btn_SaveUnplannedEditModal: '[type="submit"]',
        label_NoDatafound:'[data-lang-key="NO_DATA_TO_DISPLAY"]',
        expectedText: 'No Data Found',

        //Manage options

        btn_ArriveManage: '#arrived_button',
        btn_EditManage: '#edit_shipment_button',
        btn_deliveredManage: '#delivered_button',

    }


    clickNavigation(navigationName)
    {
        cy.get(this.deliveriesLocator.navigation).should('be.visible').contains(new RegExp(`^${navigationName}`, 'i')).click();

       
    }

    clickEditModalSaveButton()
    {
        cy.get(this.deliveriesLocator.btn_SaveUnplannedEditModal).click();
    }
  

}