// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-file-upload';
import 'cypress-if'
import 'cypress-iframe';
import "allure-cypress";
import '@shelex/cypress-allure-plugin';
import 'cypress-iframe';
import './Deliveries';
import './Overview'

const weblocators = {
  btn_calenderNextMonth: '[aria-label="Next month"]',
  allAvailable_CalederDate: '[role="gridcell"] button:not(.mat-calendar-body-disabled)',
  btn_calenderOpenSmallicon: ".mat-datepicker-toggle-default-icon.ng-star-inserted",
  allMaterialOptions: '.mtrl-section-title',
  txt_materialInputField: '[formcontrolname="MaterialQuantity"]',
  btn_addMaterial: '[data-lang-key="APP_SHIPMENTS.ADD"]',
  btn_next: '[data-lang-key="WORKFLOW.NEXT"]',
  vehicleName: '.name-text',
  equipmentName: '#equipments .name-text',
  upName: '#timeslots .name-text',
  btn_addOnSitePerson: '#shipments_otherInfo_add_onsite_button span', //Add On-Site/Order/Delivery Person
  radiobtn_selectperson: "span .subtitle-2",
  btn_OkonsiteSave:'[id="shipments_otherInfo_responsiblePersonForm_responsibleModal_add_btn"]',
  btn_SaveCreatedShipment: '#shipments_workflow_save_5',
  openOrApproveModal_Text: '.mat-mdc-dialog-content',
  label_OpenOrApproveModal: 'div button .mdc-button__label',

  //Schedule locators
  duration_chip: '.mat-mdc-chip', //contain 10, 15, 20, 30 min
  cb_days: '[type="checkbox"]', //checkbox for monday, tuesday, etc.
  dd_startAndEndTime: '[role="combobox"]',
  allAvailableTime: '[role="option"]',
 



}

Cypress.Commands.add('clickActivateInIframe', (iframeSelector) => {
  cy.frameLoaded(iframeSelector);
  cy.iframe(iframeSelector).contains('ACTIVATE').click();
});




Cypress.Commands.add('ShipmentRandomDateSelection', () => {
  function selectRandomDateAndCheck() {
    cy.get(weblocators.btn_calenderOpenSmallicon).click({ force: true });

    cy.get(weblocators.btn_calenderNextMonth).should("be.visible").click({ force: true });

    cy.get(weblocators.allAvailable_CalederDate).then(($dates) => {
      const totalDates = $dates.length;
      const randomIndex = Math.floor(Math.random() * totalDates);

      cy.wrap($dates).eq(randomIndex).scrollIntoView().should('be.visible').click();
      cy.wait(2000);

        // Check if .active-box appears; if not, retry
      cy.get('body').then($body => {
        if ($body.find('.active-box').length === 0) {
          // Retry recursively
          selectRandomDateAndCheck();
        }
      });
    });
  }

  // Start the process if no active box is currently present
  cy.get('body').then($body => {
    if ($body.find('.active-box').length === 0) {
      selectRandomDateAndCheck();
    }
  });
});
  



  Cypress.Commands.add('PlanDateSelection', (equal) => {
  
    cy.get(weblocators.btn_calenderOpenSmallicon).eq(equal).click({ force: true });

    cy.get(weblocators.btn_calenderNextMonth).should("be.visible").click({ force: true });

    cy.get(weblocators.allAvailable_CalederDate).then(($dates) => {
      const totalDates = $dates.length;
      const randomIndex = Math.floor(Math.random() * totalDates);

      cy.wrap($dates).eq(randomIndex).scrollIntoView().should('be.visible').click();
      cy.wait(2000);

    
});

});



Cypress.Commands.add('MaterialSelection', () => {
  cy.get(weblocators.allMaterialOptions).then($materialsName =>{
    const totalMaterials = $materialsName.length;
    const randomIndex = Math.floor(Math.random() * totalMaterials);
    cy.wrap($materialsName).eq(randomIndex).click();
    cy.get(weblocators.txt_materialInputField).should("be.visible").type("50");
    cy.get(weblocators.btn_addMaterial).dblclick({force: true});
  })
 }); 

Cypress.Commands.add('NextButton', () => {

     cy.get(weblocators.btn_next).should("be.enabled").first().scrollIntoView().click({force: true });
})
Cypress.Commands.add('VehicleSelection', () => {
  cy.get(weblocators.vehicleName).then($vehicleName =>{
    const totalVehicles = $vehicleName.length;
    const randomIndex = Math.floor(Math.random() * totalVehicles);
    cy.wrap($vehicleName).eq(randomIndex).click();

  })
 }) 

 Cypress.Commands.add('EquipmentSelection', () => {
    cy.get(weblocators.equipmentName).then($equipmentName =>{
      const totalEquipment = $equipmentName.length;
      const randomIndex = Math.floor(Math.random() * totalEquipment);
      cy.wrap($equipmentName).eq(randomIndex).click();
    })
  })

Cypress.Commands.add('UpSelection', () => {
      cy.get(weblocators.upName).then($upName =>{
        const totalUps = $upName.length;
        const randomIndex = Math.floor(Math.random() * totalUps);
        cy.wrap($upName).eq(randomIndex).click();
      })
    })
Cypress.Commands.add('UpSlotSelection',() =>{
  cy.get('.calendar-slot').not('.inactive').then($slots => {
    const totalActiveSlots = $slots.length;
    if (totalActiveSlots > 0) {
      const randomIndex = Math.floor(Math.random() * totalActiveSlots);
      cy.wrap($slots).eq(randomIndex).click();
    }
  })
})

Cypress.Commands.add('AddOnSitePerson', () => {
  cy.get(weblocators.btn_addOnSitePerson).should("be.visible");
  cy.get(weblocators.btn_addOnSitePerson).should("have.text","ADD").click();
  cy.get(weblocators.radiobtn_selectperson).eq(0).should("be.visible").click();
  cy.get(weblocators.btn_OkonsiteSave).should("be.visible").click();
})


Cypress.Commands.add('SaveCreatedShipment',()=>{
  cy.get(weblocators.btn_SaveCreatedShipment).click({force: true });
  
})

Cypress.Commands.add('OpenOrApproveModal',(status) => {
  cy.get(weblocators.openOrApproveModal_Text).should('be.visible');
  cy.get(weblocators.label_OpenOrApproveModal).contains(status).click();
})

Cypress.Commands.add('VerifySaveShipmentTitle',()=>{

 cy.get(weblocators.openOrApproveModal_Text)
    .should('be.visible')
    .invoke('text')
    .then((fullText) => {
      const match = fullText.match(/Shipment No:(.+?) has been created/);
      if (match && match[1]) {
        const shipmentIdentifier = match[1].trim(); // e.g., "2037-ABCDE -Team"
        cy.wrap(shipmentIdentifier).as('shipmentIdentifier');
      } else {
        throw new Error('Shipment Identifier not found in modal text');
      }
    });
 
})



Cypress.Commands.add('SelectZoneAddressFromMap', ({ mapType = 'osm', x = 300, y = 200 } = {}) => {
  if (mapType === 'google') {
    cy.get('#googleBtn').click(); // open Google map
    cy.get('#map-canvas-zone').click(x, y, { force: true });
  } else if (mapType === 'osm') {
    cy.get('#osm-map').click(x, y, { force: true });
  } else {
    throw new Error(`Unknown mapType: ${mapType}`);
  }
});


// Cypress.Commands.add('SearchShipmentOnDeliveries',()=>{

//   cy.get('@shipmentIdentifier').then((shipmentNumber)=>{
//     cy.get('[formcontrolname="searchText"]').clear().type(shipmentNumber)

//   })

// })




Cypress.Commands.add('ScheduleCreation', ({ 
  slotDuration, 
  startTime = '09:00', 
  endTime = '19:00' 
}) => {
  
  // Step 1: Click slot duration chip
  cy.get(weblocators.duration_chip).contains(slotDuration).click();

  // Step 2: Check the first checkbox
  cy.get(weblocators.cb_days).eq(0).check();

  // Step 3: Set start time
  cy.get(weblocators.dd_startAndEndTime).eq(0).click();
  cy.get(weblocators.allAvailableTime).contains(startTime).click();

  // Step 4: Set end time
  cy.get(weblocators.dd_startAndEndTime).eq(1).click();
  cy.get(weblocators.allAvailableTime).contains(endTime).click();

  // Step 5: Check the remaining checkboxes (2nd onward)
  cy.get(weblocators.cb_days).then(($checkboxes) => {
    for (let i = 1; i < $checkboxes.length; i++) {
      cy.wrap($checkboxes[i]).check();
    }
  });
});


Cypress.Commands.add('UploadFile', (locator, filePath) => {

  cy.get(locator).should('exist').selectFile(filePath, { force: true });
})



  






  


