export class shipmentPage {
  weblocators = {
    btn_navigation: '[fusenavbarvertical= "toggleBar"]',
    btn_shipment: ".nav-link-title.ng-star-inserted",
    first_row: 'tbody[role="rowgroup"] tr',
    btn_addShipment: '[id="add_shipment"]',
    btn_calenderOpenSmallicon: ".mat-datepicker-toggle-default-icon.ng-star-inserted",
    btn_calenderNextMonth: '[aria-label="Next month"]',
    btn_selectCalederdate: '[aria-label="29 April 2025"]',
    dateInfo_load: '.date-text',
    btn_next: '[data-lang-key="WORKFLOW.NEXT"]', //need to use first()
    btn_discard: '[data-lang-key="APP_SHIPMENTS.DISCARD"]',

    //step 2
    btn_materialOptionSelct: ".mat-mdc-tooltip-trigger", //need to use contain
    txt_materialInputField: '[formcontrolname="MaterialQuantity"]',
    btn_addMaterial: '[data-lang-key="APP_SHIPMENTS.ADD"]',
    btn_AddNewMat: '[data-lang-key="APP_SHIPMENTS.ADD_NEW"]',
    txt_materialName: '[formcontrolname="MaterialName"]',
    dd_unit: '.mat-mdc-select-arrow-wrapper',
    dd_unitBundleOfPipes: '[role="option"]',

    //step 3
    btn_vehicleSelection: '[id="shipments_unloading_vehiclesForm__0"]',

    //step 4 - TimeSlots
    btn_nonBookableEquip: '[id="shipments_timeslots_nonBookableEquipments__0"]',
    btn_allNonBookableEquip: '.name-text',
    title_AllUpName: '.mtrl-section-title',
    btn_selectUp: '[data-lang-key="APP_SHIPMENTS.MINUTES_SENTENCE_CASE"]', //Use contain
    btn_SelectUpSlot: ".calendar-slot.ng-star-inserted.h-10", //need to select slot according to enalbe
    data_slot_value: "[data-slot-value]", //data slot value
    
    btn_selectBookableEquipment: '[id^="shipments_timeslots_bookableEquipments__"]', //Select all boookable equipment, use contains to select exact one

    schedule_data_equipment : '[data-calendar-type="equipment"]', //calender wil select equipment type slot
    schedule_data_up: '[data-calendar-type="up"]',//calender wil select UP type slot

    //step 5
    btn_addOnSitePerson: '[data-lang-key="APP_SHIPMENTS.ADD_PERSON"]', //First
    btn_addNewPerson: '[data-lang-key="APP_SHIPMENTS.ADD_NEW"]',
    txt_name: '[formcontrolname="Name"]',
    txt_email: '[formcontrolname="Email"]',
    txt_phone: '[formcontrolname="Phone"]',
    btn_saveNewResponsiableperson: '[data-lang-key="SAVE"]',

    //Step 6
    title_annotation: '[data-lang-key="APP_SHIPMENTS.FINDINGS"]',
    btn_addAnnotation: '[data-lang-key="APP_SHIPMENTS.ADD_FINDINGS"]',
    txt_WriteAnnotation: '[data-lang-key="APP_SHIPMENTS.WRITE_HERE"]',
    btn_SaveAnnotation: '[data-lang-key="APP_SHIPMENTS.SAVE"]',
    weatherInfo_load: '.caption-2.date-text',
    txt_ShipmentComment: 'shipments_overviewPanel_comments_text',
    save_shipmentComment: '[id="shipments_overviewPanel_comments_save"]',


    //existing
    radiobtn_selectperson: "span .subtitle-2",
    btn_OkonsiteSave:'[id="shipments_otherInfo_responsiblePersonForm_responsibleModal_add_btn"]', //first

    btn_createShipment: "#shipments_workflow_save_5", //First

    btn_openShipment: '[data-lang-key="APP_SHIPMENTS.OPEN"]',
    btn_approveShipment: '[data-lang-key="APP_SHIPMENTS.APPROVE"]',

    //Shipment Headline(open or approve in Lean card)
    label_OpenHeading: ".shipment-headline",

    //Modal/Dialog locator after shipment creation
    modal_dialog: '#mat-mdc-dialog-2',
    modal_dialog_text: '[data-lang-key="APP_SHIPMENTS.SHIPMENT_UPDATED_MODAL_ONE,APP_SHIPMENTS.SHIPMENT_CREATED_MODAL_TWO"]',
    modal_openOrapprove_shipmentName: '[data-lang-key="APP_SHIPMENTS.SHIPMENT_NO"]',

    //Approve Shipment
    btn_approveShipment: '[data-lang-key="APP_SHIPMENTS.APPROVE"]',
    //All the step of the Top (date/materials/transportation/timeslots/otherinfo/Overview
    nav_Tab_step: '[role="tab"]',
  };

  //Shipment Reject Locator
  shipmentRejectLocator = {
    reject_Shipment: '[data-lang-key="APP_SHIPMENTS.REJECT"]',
    reject_Message: '[data-lang-key="APP_SHIPMENTS.COMMENT_MSG"]',
    rejectorApprove_Confirm: '[data-lang-key="APP_SHIPMENTS.DISCARD_SHIPMENT_CONFIRM"]',
  }
  

  clickNavigationButton() {
    cy.get(this.weblocators.btn_navigation).click({force: true});
  }
  navigateShipment() {
    cy.get(this.weblocators.btn_shipment).contains("Shipments").click({force: true});
  }
  selectFirstLeanCard() {
    cy.get(this.weblocators.first_row).first().click({force: true});
  }
  clickAddshipment() {
    cy.get(this.weblocators.btn_addShipment).click({force: true});
  }

  //Date Related function
  
  selectDateFromCalenderSaveIt(isDuplicateTest = false) {
    
    cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });
    cy.get(this.weblocators.btn_calenderNextMonth).should("be.visible").click({force: true});
    
    if(!isDuplicateTest)
    {
      cy.get('[role="gridcell"] button:not(.mat-calendar-body-disabled)')
    .eq(2)
    .then(($el) => {
      const selectedDate = $el.text().trim(); // Extract the text
      cy.wrap(selectedDate).as('savedDate'); // Save the date as an alias
      cy.wrap($el).dblclick({ force: true }); // Now dblclick on the actual element
    });

    }
    else{
      cy.get('[role="gridcell"] button:not(.mat-calendar-body-disabled)')
      .eq(4)
      .then(($el) => {
        const selectedDate = $el.text().trim(); // Extract the text
        cy.wrap(selectedDate).as('savedDate'); // Save the date as an alias
        cy.wrap($el).dblclick({ force: true }); // Now dblclick on the actual element
      });

    }
    
    
  }

  selectDateFromCalender() {
    // cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });
    // cy.get(this.weblocators.btn_calenderNextMonth).should("be.visible").click();
    // cy.get(this.weblocators.btn_selectCalederdate).dblclick({force: true});

    cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });
    cy.get(this.weblocators.btn_calenderNextMonth).should("be.visible").click();

    cy.get('@savedDate').then((savedDate) => {
      cy.get('[role="gridcell"] button')
        .contains(savedDate) // Find the previously selected date
        .click({ force: true });
    });
    
  }


  //Select Random Available Date From Caleder

  selectRandomDate() {
    const randomIndex = Math.floor(Math.random() * 5) + 2; // gives 2, 3, or 4
    cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });
    cy.get('[role="gridcell"] button:not(.mat-calendar-body-disabled)')
    .eq(randomIndex)
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true, timeout:3000 });


    // Retry click if calendar didn’t close
  cy.get('body').then($body => {
    if ($body.find('#mat-datepicker-3').length > 0) {
      cy.log('Retrying date click...');
      cy.get('[role="gridcell"] button:not(.mat-calendar-body-disabled)')
        .eq(randomIndex)
        .click({ force: true });
    }
  });


    

  }



  clickNextStep1() {
    
    cy.get('[id="mat-datepicker-3"]').should('not.exist');
    cy.get('.active-box').should('be.exist');
    cy.get(this.weblocators.btn_next).should('be.enabled').first().scrollIntoView().click({force: true});
  }

  //Step 2
  //Add New Material
  clickAddNewMaterial()
  {
    cy.get(this.weblocators.btn_AddNewMat).should('be.visible').click({force: true});

  }

  enterMaterialName(materialname)
    {
        const randomFourDigitInteger = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        cy.get(this.weblocators.txt_materialName).type(`${materialname} ${randomFourDigitInteger}`)
    }

  selectUnit()
    {
        
        //cy.get(this.weblocators.dd_unit).click();
        cy.get(this.weblocators.dd_unit).click({setTimeout: 3000}, {force: true});
        cy.get(this.weblocators.dd_unitBundleOfPipes).eq(0).click({force: true});
        
    }
  clickAddBtnSubmitMaterial()
  {
       cy.get(this.weblocators.btn_addMaterial).dblclick({force: true});
  }

  selectMaterial() {
    cy.get(this.weblocators.btn_materialOptionSelct).eq(0).click({ force: true });
    cy.get(this.weblocators.txt_materialInputField)
      .should("be.visible")
      .type("50");
    cy.get(this.weblocators.btn_addMaterial).dblclick({force: true});
  }
//Multiple Material Selection By Loop  

 selectMultipleMaterial() {
  const materialValues = ["50", "52", "54"];

  materialValues.forEach((value, index) => {
    cy.get(this.weblocators.btn_materialOptionSelct)
      .eq(index + 1) // Assuming the index starts from 1 in the original code
      .click({ force: true });

    cy.get(this.weblocators.txt_materialInputField)
      .should("be.visible")
      .type(value);

    cy.get(this.weblocators.btn_addMaterial).click();
  });
}


  clickNextStep2() {
    cy.get(this.weblocators.btn_next).click({force: true});
  }

  //step 3

  selectVehicle() {
    cy.get(this.weblocators.btn_vehicleSelection).click({ force: true });
  }
  clickNextStep3() {
    cy.get(this.weblocators.btn_next).click({ force: true });
  }

  //step 4

  selectNonBookableequip() {
    cy.get(this.weblocators.btn_nonBookableEquip).click({ timeout: 20000 });
  }

  //Multiple Non bookable Element
  selectMultipleNonbBookableEquip()
  {
    cy.get(this.weblocators.btn_allNonBookableEquip).eq(1).click({force: true});
    cy.get(this.weblocators.btn_allNonBookableEquip).eq(2).click({force: true});
  }

  //Bookable Equipment 1

  selectBookableEquipmentFirst()
  {
    cy.get(this.weblocators.btn_selectBookableEquipment)
      .contains("Automation 1") // Change 'Automation' to the text you want to match
      .click({ force: true });
  }
  //Bookable Equipment 1

  selectBookableEquipmentSecond()
  {
    cy.get(this.weblocators.btn_selectBookableEquipment)
      .contains("Automation 2") // Change 'Automation' to the text you want to match
      .click({ force: true });
  }

  selectUp() {
    cy.get(this.weblocators.title_AllUpName)
      .contains("Automation Test Zone")
      .click({ force: true });
  }

  //Only first slot selection - We will reject/cancel later that y specific slot selection
  selectFirstSlotFromUP() {
    cy.get(this.weblocators.data_slot_value)
      .first()
      .then(($slot) => {
        if ($slot.hasClass("inactive")) {
          cy.log("Slot is inactive, skipping shipment creation");
        } else {
          cy.get(this.weblocators.data_slot_value)
            .first()
            .click({ force: true });
        }
      });
  }

  //Upslot has issue, this caldender can select Equipment slot ! common for both. 

  selectUPslot() {
    cy.get(this.weblocators.btn_SelectUpSlot).each(($el) => {
      if (!$el.hasClass("inactive")) {
        cy.wrap($el).click({ force: true });

        // Verify that the slot becomes active after selection
        cy.wrap($el).should("have.class", "active");

        return false; // Exit the loop after selecting an available slot
      }
    });
  }

  //Select Equipment with Name - it takes the Type from the Calender then Choose

  selectEquipmentSlot() {
    cy.get(this.weblocators.schedule_data_equipment).eq(0).scrollIntoView()
    .find(this.weblocators.btn_SelectUpSlot).each(($el) => {
      if (!$el.hasClass("inactive")) {
        cy.wrap($el).click({ force: true });

        // Verify that the slot becomes active after selection
        cy.wrap($el).should("have.class", "active");

        return false; // Exit the loop after selecting an available slot
      }
    });
  }

  selectEquipmentSlotTwo() {
    cy.get(this.weblocators.schedule_data_equipment).eq(1).scrollIntoView()
    .find(this.weblocators.btn_SelectUpSlot).each(($el) => {
      if (!$el.hasClass("inactive")) {
        cy.wrap($el).click({ force: true });

        // Verify that the slot becomes active after selection
        cy.wrap($el).should("have.class", "active");

        return false; // Exit the loop after selecting an available slot
      }
    });
  }



  //select UP with Name - it takes the Type from the Calender then Choose -It separate equipment & UP calender

  selectUpNameSlot() {
    
    cy.get(this.weblocators.schedule_data_up).scrollIntoView()
    .find(this.weblocators.btn_SelectUpSlot).each(($el) => {
      cy.wrap($el).scrollIntoView();
      if (!$el.hasClass("inactive")) {
        cy.wrap($el).click({ force: true });

        // Verify that the slot becomes active after selection
        cy.wrap($el).should("have.class", "active");

        return false; // Exit the loop after selecting an available slot
      }
    });
  }


  

 


  clickNextStep4() {
    cy.get(this.weblocators.btn_next).click({ force: true });
  }

  //step 5

  clickOnSitePerson() {
    cy.get(this.weblocators.btn_addOnSitePerson).first().click({ force: true });
  }
  // clickAddnewResponsiablebtn()
  // {
  //     cy.get(this.weblocators.btn_addNewPerson).click();
  // }

  selectRadioButtonWithExistingResponsiableperson() {
    cy.get(this.weblocators.radiobtn_selectperson)
      .should("be.visible")
      .eq(1)
      .click({ force: true });
    cy.get(this.weblocators.btn_OkonsiteSave).click();
  }

  clickShipmentCreateBtn() {
    cy.wait(2000);
    cy.get(this.weblocators.btn_createShipment)
      .scrollIntoView({ block: "end" })
      .dblclick({ force: true });
  }
  clickOpenShipment() {
    cy.wait(4000);
    cy.get(this.weblocators.btn_openShipment)
      .should("be.visible", { timeout: 15000 })
      .click({ timeout: 8000 });
  }

  clickApproveShipment() {
    cy.wait(5000);
    cy.get(this.weblocators.btn_approveShipment).click({ timeout: 8000 });
  }

  findOpenShipment() {
    cy.get(this.weblocators.label_OpenHeading)
      .invoke("text")
      .then((text) => {
        if (text.trim() === "Open") {
          cy.get(this.weblocators.label_OpenHeading).eq(0).click();
          cy.wait(3000);
        }
      });
  }

  //Slot Inactive Verification
  verifySlotInactive() {
    cy.get(this.weblocators.data_slot_value)
      .first()
      .should("have.class", "inactive")
      .then(() => {
        cy.log("Test Passed: Slot is inactive on second attempt");
      });
  }

  // Extract shipment text from modal
  extractShipmentTextFromModal() {
    let shipmentText; // Declare a variable outside

    // Extract shipment text from modal
    cy.get(this.weblocators.modal_dialog)
      .find(this.weblocators.modal_dialog_text)
      .invoke("text")
      .then((fullText) => {
        shipmentText = fullText.match(/:\s*(.*?)\s*has/)[1]; // Extract text between ":" and "has"
        cy.wrap(shipmentText).as("shipmentText"); // Save it as an alias
        
      });
  }
  clickExactExtractedShipment()
  {
    cy.get('@shipmentText').then((savedText) => {
        cy.get(this.weblocators.modal_openOrapprove_shipmentName) // Locate all shipment number elements
          .each(($el) => {
              const elementText = $el.text().trim();
              if (elementText === savedText.trim()) {
                  cy.wrap($el).click(); // Click on the matched element
                  cy.get('.date-text').should('be.visible');
              }
          });
    });

  }

  clickApproveShipmentbutton()
  {
    cy.get(this.weblocators.btn_approveShipment).click();
    cy.get(this.shipmentRejectLocator.rejectorApprove_Confirm).click()
  }
  //reject Shipment
  rejectShipment()
  {
    cy.get(this.shipmentRejectLocator.reject_Shipment).click();
    cy.get(this.shipmentRejectLocator.reject_Message).type('Rejected');
    cy.get(this.shipmentRejectLocator.rejectorApprove_Confirm).click();
  }
  //cancel Shipment
  clickCancelShipment()
  {
    cy.get('[data-lang-key="APP_SHIPMENTS.CANCEL_SHIPMENT"]').click();
    cy.get(this.shipmentRejectLocator.reject_Message).type('Canceled by automation, Try to Book again');
    cy.get(this.shipmentRejectLocator.rejectorApprove_Confirm).click();
  }

  verifySelectionFirstSlotagainForRejectShipment()
  {
    cy.get(this.weblocators.data_slot_value).first().click({force: true}).then(() => {
        cy.log('Test Passed: Slot is active on second attempt');
      });
  }

  clickOverviewStep6()
  {
    cy.get(this.weblocators.dateInfo_load).each(($el)=>{
      cy.wrap($el).should('be.visible'); //load step 1  - all the date //if date not loaded, all other steps faces issues
    })
    cy.get(this.weblocators.nav_Tab_step).eq(5).click({force: true});

  }
  clickAddAnotationBtn()
  {
    cy.get(this.weblocators.weatherInfo_load).should('be.visible');
    cy.get(this.weblocators.title_annotation).click({force: true});
    cy.get(this.weblocators.btn_addAnnotation).click({force: true});
    cy.get(this.weblocators.txt_WriteAnnotation).eq(1).type('Annotation For documentation Or Incident');
  }

  clickSaveAnnotationbtn()
  {
    cy.get(this.weblocators.btn_SaveAnnotation).click({force: true});
  }
  enterShipmentCommentStep6()
  {
    cy.get(this.weblocators.weatherInfo_load).should('be.visible');
    cy.get(this.weblocators.txt_ShipmentComment).type('Shipment comment By Automation', { force: true });
    cy.get(this.weblocators.save_shipmentComment).click({force: true})

  }
  clickDiscardButton()
  {
    cy.get(this.weblocators.btn_discard).first().click({force: true});
  }


}
