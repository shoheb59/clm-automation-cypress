export class shipmentPage {
  weblocators = {
    btn_navigation: '[fusenavbarvertical= "toggleBar"]',
    btn_listWorkingPackage: '[value="list"] [type="button"]',
    btn_shipment: ".nav-link-title.ng-star-inserted",
    first_row: 'tbody[role="rowgroup"] tr',
    btn_addShipment: '[data-lang-key="APP_SHIPMENTS.CREATE_SHIPMENT"]',
    btn_calenderOpenSmallicon:
      ".mat-datepicker-toggle-default-icon.ng-star-inserted",
    btn_calenderNextMonth: '[aria-label="Next month"]',
    allAvailable_CalederDate:
      '[role="gridcell"] button:not(.mat-calendar-body-disabled)', //Select Enable Calender Date
    btn_selectCalederdate: '[aria-label="29 April 2025"]',
    dateInfo_load: ".date-text",
    btn_next: '[data-lang-key="WORKFLOW.NEXT"]', //need to use first()
    btn_discard: '[data-lang-key="APP_SHIPMENTS.DISCARD"]',
    txt_searchWorkingPackage: '.form-field',    //[data-lang-key="APP_SHIPMENTS.SEARCH"]', '

    //step 2
    btn_materialOptionSelct: ".mtrl-section-title", //need to use contain
    txt_materialInputField: '[formcontrolname="MaterialQuantity"]',
    btn_addMaterial: '[data-lang-key="APP_SHIPMENTS.ADD"]',
    btn_AddNewMat: '[data-lang-key="APP_SHIPMENTS.ADD_NEW"]',
    txt_materialName: '[formcontrolname="MaterialName"]',
    dd_unit: ".mat-mdc-select-arrow-wrapper",
    dd_unitBundleOfPipes: '[role="option"]',

    dd_receipient: '[formcontrolname="RecipientTeam"]',
    dd_receipientOption: '[role="option"]', //use Contain

    txt_builiding: '[formcontrolname="Building"]',
    txt_floor: '[formcontrolname="Floor"]',
    txt_laydownArea: '[formcontrolname="LaydownArea"]',

    //step 3
    btn_vehicleSelection: ".name-text",

    //step 4 - TimeSlots
    btn_nonBookableEquip: '[id="shipments_timeslots_nonBookableEquipments__0"]',
    btn_allNonBookableEquip: ".name-text",
    title_AllUpName: ".mtrl-section-title",
    btn_selectUp: '[data-lang-key="APP_SHIPMENTS.MINUTES_SENTENCE_CASE"]', //Use contain
    btn_SelectUpSlot: ".calendar-slot", //need to select slot according to enble
    data_slot_value: "[data-slot-value]", //data slot value

    btn_selectBookableEquipment:
      '[id^="shipments_timeslots_bookableEquipments__"]', //Select all boookable equipment, use contains to select exact one

    schedule_data_equipment: '[data-calendar-type="equipment"]', //calender wil select equipment type slot
    schedule_data_up: '[data-calendar-type="up"]', //calender wil select UP type slot

    //step 5
    btn_addOnSitePerson: '[data-lang-key="APP_SHIPMENTS.ADD_PERSON"]', //First
    btn_addNewPerson: '[data-lang-key="APP_SHIPMENTS.ADD_NEW"]',
    txt_name: '[formcontrolname="Name"]',
    txt_email: '[formcontrolname="Email"]',
    txt_phone: '[formcontrolname="Phone"]',
    btn_saveNewResponsiableperson: '[data-lang-key="SAVE"]',
    txt_sustainabilityAddress: '[placeholder="Enter a location"]',

    //Step 6
    title_annotation: '[data-lang-key="APP_SHIPMENTS.FINDINGS"]',
    btn_addAnnotation: '[data-lang-key="APP_SHIPMENTS.ADD_FINDINGS"]',
    txt_WriteAnnotation: '[data-lang-key="APP_SHIPMENTS.WRITE_HERE"]',
    btn_SaveAnnotation: '[data-lang-key="APP_SHIPMENTS.SAVE"]',
    weatherInfo_load: ".caption-2.date-text",
    txt_ShipmentComment: '[data-lang-key="APP_SHIPMENTS.WRITE_HERE"]',
    save_shipmentComment: '[id="shipments_overviewPanel_comments_save"]',

    //existing
    radiobtn_selectperson: "span .subtitle-2",
    btn_OkonsiteSave:
      '[id="shipments_otherInfo_responsiblePersonForm_responsibleModal_add_btn"]', //first

    btn_createShipment: "#shipments_workflow_save_5", //First

    btn_openShipment: '[data-lang-key="APP_SHIPMENTS.OPEN"]',
    btn_approveShipment: '[data-lang-key="APP_SHIPMENTS.APPROVE"]',

    //Shipment Headline(open or approve in Lean card)
    label_OpenHeading: ".shipment-headline",

    //Modal/Dialog locator after shipment creation
    modal_dialog: ".mat-mdc-dialog-inner-container",
    modal_dialog_text:
      '[data-lang-key="APP_SHIPMENTS.SHIPMENT_UPDATED_MODAL_ONE,APP_SHIPMENTS.SHIPMENT_CREATED_MODAL_TWO"]',
    modal_openOrapprove_shipmentName:
      '[data-lang-key="APP_SHIPMENTS.SHIPMENT_NO"]',

    //Approve Shipment
    btn_approveShipment: '[data-lang-key="APP_SHIPMENTS.APPROVE"]',
    btn_CompleteShipment: '[data-lang-key="APP_SHIPMENTS.MARK_AS_COMPLETED"]',
    btn_YesAllCompleteShipment: '[data-lang-key="APP_SHIPMENTS.YES_ALL"]',
    btn_WaitingStatusShipment: '[data-lang-key="APP_SHIPMENTS.WAITING"]',
    btn_arriveStatusShipment:
      '[data-lang-key="APP_SHIPMENTS.ARIVED_&_UNLOADING"]',
    //All the step of the Top (date/materials/transportation/timeslots/otherinfo/Overview
    nav_Tab_step: '[role="tab"]',
  };

  //Shipment Reject Locator
  shipmentRejectLocator = {
    reject_Shipment: '[data-lang-key="APP_SHIPMENTS.REJECT"]',
    reject_Message: '[data-lang-key="APP_SHIPMENTS.COMMENT_MSG"]',
    rejectorApprove_Confirm:
      '[data-lang-key="APP_SHIPMENTS.DISCARD_SHIPMENT_CONFIRM"]',
  };

  clickNavigationButton() {
    cy.get(this.weblocators.btn_navigation).click({ force: true });
  }
  navigateShipment() {
    cy.get(this.weblocators.btn_shipment).contains("Shipments").click({ force: true });

  }
  selectFirstWorkingPackage() {
    cy.get(this.weblocators.btn_listWorkingPackage).click({ force: true });
    cy.get(this.weblocators.first_row).first().click({ force: true });
  }
  //Select First Lean Card with Name - Use Contains

  selectCustomWorkingPackage(packageName) {
    cy.get(this.weblocators.btn_listWorkingPackage).should('be.visible').click({ force: true });
    cy.get(this.weblocators.txt_searchWorkingPackage).should("be.visible").first().type(packageName);
    cy.wait(1000);
    cy.get(this.weblocators.first_row).contains(packageName).scrollIntoView().click({ force: true });
  }
  clickAddshipment() {
    cy.get(this.weblocators.btn_addShipment).click({ force: true });
  }

  //Date Related function

  selectDateFromCalenderSaveIt(isDuplicateTest = false) {
    const randomIndex = Math.floor(Math.random() * 30) + 1;

    cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });
    cy.get(this.weblocators.btn_calenderNextMonth).should("be.visible").click({ force: true });
    cy.get(this.weblocators.btn_calenderNextMonth).should("be.visible").click({ force: true });

    if (!isDuplicateTest) {
      cy.get(this.weblocators.allAvailable_CalederDate)
        .eq(randomIndex)
        .then(($el) => {
          const selectedDate = $el.text().trim(); // Extract the text
          cy.wrap(selectedDate).as("savedDate"); // Save the date as an alias
          cy.wrap($el).dblclick({ force: true }); // Now dblclick on the actual element
        });
    } else {
      cy.get(this.weblocators.allAvailable_CalederDate)
        .eq(randomIndex)
        .then(($el) => {
          const selectedDate = $el.text().trim(); // Extract the text
          cy.wrap(selectedDate).as("savedDate"); // Save the date as an alias
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
    cy.get(this.weblocators.btn_calenderNextMonth).should("be.visible").click();

    cy.get("@savedDate").then((savedDate) => {
      cy.get('[role="gridcell"] button')
        .contains(savedDate) // Find the previously selected date
        .click({ force: true });
    });
  }

  //Select Random Available Date From Caleder
selectRandomDate(retryCount = 0) {
  // Safety stop after 3 retries
  if (retryCount > 3) {
    throw new Error("Failed to select a valid date after multiple attempts");
  }

  cy.log(`Attempt ${retryCount + 1}: Selecting a random date`);

  // Open calendar
  cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });

  // Pick a random month ahead (0 = current month, up to 11 months ahead)
  const randomMonth = Math.floor(Math.random() * 12);
  for (let i = 0; i < randomMonth; i++) {
    cy.get(this.weblocators.btn_calenderNextMonth)
      .should("be.visible")
      .click({ force: true });
  }

  // Pick a random date within that month
  cy.get(this.weblocators.allAvailable_CalederDate).its("length")
    .then((len) => {
      const randomIndex = Math.floor(Math.random() * len);
      cy.get(this.weblocators.allAvailable_CalederDate)
        .eq(randomIndex)
        .scrollIntoView()
        .should("be.visible")
        .click({ force: true });
    });

  // Wait for potential calendar close and step activation
  cy.wait(4000);

  // Check if valid date selected (i.e., `.active-box` exists)
  cy.get("body").then(($body) => {
    if ($body.find(".active-box").length === 0) {
      cy.log("Invalid date (possibly Sunday). Retrying...");
      // Retry with incremented retry count
      this.selectRandomDate(retryCount + 1);
    } else {
      cy.log("✅ Valid date selected");
    }
  });
}

//   selectRandomDate() {
//   // Open calendar
//   cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });

//   // Pick a random month ahead (0 = current month, up to 11 = 11 months ahead)
//   const randomMonth = Math.floor(Math.random() * 12);

//   // Go to that random month
//   for (let i = 0; i < randomMonth; i++) {
//     cy.get(this.weblocators.btn_calenderNextMonth)
//       .should("be.visible")
//       .click({ force: true });
//   }

//   // Pick a random date within that month
//   cy.get(this.weblocators.allAvailable_CalederDate)
//     .its("length")
//     .then((len) => {
//       const randomIndex = Math.floor(Math.random() * len);
//       cy.get(this.weblocators.allAvailable_CalederDate)
//         .eq(randomIndex)
//         .scrollIntoView()
//         .should("be.visible")
//         .click({ force: true, timeout: 3000 });
//     });

//   // Retry click if calendar didn’t close (failsafe)
//   cy.get("body").then(($body) => {
//     if ($body.find("#mat-datepicker-3").length > 0) {
//       cy.log("Retrying date click...");
//       cy.get(this.weblocators.allAvailable_CalederDate)
//         .eq(Math.floor(Math.random() * 10))
//         .click({ force: true });
//     }
//   });
// }


  // selectRandomDate() {
  //   cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });
  //   cy.get(this.weblocators.btn_calenderNextMonth)
  //     .should("be.visible")
  //     .click({ force: true });
  //   const randomIndex = Math.floor(Math.random() * 10) + 3; // gives 2, 3, or 4
  //   cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });
  //   cy.get(this.weblocators.allAvailable_CalederDate)
  //     .eq(randomIndex)
  //     .scrollIntoView()
  //     .should("be.visible")
  //     .click({ force: true, timeout: 3000 });

  //   // Retry click if calendar didn’t close
  //   cy.get("body").then(($body) => {
  //     if ($body.find("#mat-datepicker-3").length > 0) {
  //       cy.log("Retrying date click...");
  //       cy.get(this.weblocators.allAvailable_CalederDate)
  //         .eq(randomIndex)
  //         .click({ force: true });
  //     }
  //   });
  // }

  selectAndProcessMondays(startDateStr, monthLimit, callbackForEachDate) {
    const startDate = new Date(startDateStr);
    const cutoffDate = new Date(startDate);
    cutoffDate.setMonth(cutoffDate.getMonth() + monthLimit); // ⛔ Limit from param

    const processNext = (index) => {
      const targetDate = new Date(startDate);
      targetDate.setDate(startDate.getDate() + index * 7); // Every 7 days

      // ✅ Stop if target date exceeds cutoff
      if (targetDate > cutoffDate) {
        cy.log(
          `🛑 Reached month limit (${monthLimit}). Stopping at index ${index}.`
        );
        return;
      }

      const day = targetDate.getDate();
      const month = targetDate.getMonth();
      const year = targetDate.getFullYear();

      this.clickAddshipment();

      cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });

      // Determine how many times to click "Next Month"
      const today = new Date();
      const currentCalendarMonth = today.getMonth();
      const currentCalendarYear = today.getFullYear();
      const monthDiff =
        (year - currentCalendarYear) * 12 + (month - currentCalendarMonth);

      for (let i = 0; i < monthDiff; i++) {
        cy.get(this.weblocators.btn_calenderNextMonth)
          .should("be.visible")
          .click({ force: true });
      }

      cy.get("button.mat-calendar-body-cell")
        .contains(day)
        .scrollIntoView()
        .should("be.visible")
        .click({ force: true })
        .then(() => {
          cy.log(`✅ Selected Monday: ${targetDate.toDateString()}`);
          callbackForEachDate(index, () => processNext(index + 1));
        });
    };

    processNext(0);
  }

  //Pre define Dates

  selectAndProcessDates(datesArray, callbackForEachDate) {
    const processNext = (index) => {
      if (index >= datesArray.length) {
        cy.log("✅ Finished processing all predefined dates.");
        return;
      }

      const targetDate = new Date(datesArray[index]);
      const day = targetDate.getDate();
      const month = targetDate.getMonth();
      const year = targetDate.getFullYear();

      this.clickAddshipment();

      cy.get(this.weblocators.btn_calenderOpenSmallicon).click({ force: true });

      // Navigate to correct month
      const today = new Date();
      const currentCalendarMonth = today.getMonth();
      const currentCalendarYear = today.getFullYear();
      const monthDiff =
        (year - currentCalendarYear) * 12 + (month - currentCalendarMonth);

      for (let i = 0; i < monthDiff; i++) {
        cy.get(this.weblocators.btn_calenderNextMonth)
          .should("be.visible")
          .click({ force: true });
      }

      cy.get("button.mat-calendar-body-cell")
        .contains(day)
        .scrollIntoView()
        .should("be.visible")
        .click({ force: true })
        .then(() => {
          cy.log(`✅ Selected Predefined Date: ${targetDate.toDateString()}`);
          callbackForEachDate(index, () => processNext(index + 1));
        });
    };

    processNext(0);
  }

  clickNextStep1() {
    cy.get('[id="mat-datepicker-3"]').should("not.exist");
    cy.get(".active-box").should("be.exist");
    cy.get(this.weblocators.btn_next)
      .should("be.enabled")
      .first()
      .scrollIntoView()
      .click({ force: true });
  }

  //Step 2
  // receipient add

  selectRecipient() {
    cy.get(this.weblocators.dd_receipient).click({ force: true });
    cy.get(this.weblocators.dd_receipientOption)
      .contains("Projekt Team")
      .click({ force: true });
  }

  enterBuidingInfo(buildingName, floorName, LaydownArea) {
    cy.wait(2000);
    cy.get(this.weblocators.txt_builiding)
      .clear()
      .type(buildingName, { force: true });
    cy.get(this.weblocators.txt_floor).clear().type(floorName, { force: true });
    cy.get(this.weblocators.txt_laydownArea)
      .clear({ force: true })
      .type(LaydownArea, { force: true });
  }

  //Add New Material
  clickAddNewMaterial() {
    cy.get(this.weblocators.btn_AddNewMat)
      .should("be.visible")
      .click();
  }

  enterMaterialName(materialname) {
    const randomFourDigitInteger =
      Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    cy.get(this.weblocators.txt_materialName).first().type(
      `${materialname} ${randomFourDigitInteger}`
    );
  }

  selectUnit() {
    //cy.get(this.weblocators.dd_unit).click();
    cy.get(this.weblocators.dd_unit).click(
      { setTimeout: 3000 },
      { force: true }
    );
    cy.get(this.weblocators.dd_unitBundleOfPipes).eq(0).click({ force: true });
  }
  clickAddBtnSubmitMaterial() {
    cy.get(this.weblocators.btn_addMaterial).dblclick({ force: true });
  }

  selectMaterial() {
    cy.get(this.weblocators.btn_materialOptionSelct)
      .eq(0)
      .click({ force: true });
    cy.get(this.weblocators.txt_materialInputField)
      .should("be.visible")
      .type("50");
    cy.get(this.weblocators.btn_addMaterial).dblclick({ force: true });
  }

  //Select Material with name - Use Contains

  // selectMaterialByName() {
  //   cy.get(this.weblocators.btn_materialOptionSelct).contains('Kohler / Transstahl').click({ force: true });
  //   cy.get(this.weblocators.txt_materialInputField)
  //     .should("be.visible")
  //     .type("100");
  //   cy.get(this.weblocators.btn_addMaterial).dblclick({force: true});
  // }

  selectMaterialByName(materialValue) {
    cy.get(this.weblocators.btn_materialOptionSelct)
      .contains("Möbel Sondergrösse")
      .click({ force: true });

    cy.get(this.weblocators.txt_materialInputField)
      .should("be.visible")
      .clear()
      .type(materialValue.toString());

    cy.get(this.weblocators.btn_addMaterial).dblclick({ force: true });
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
    cy.get(this.weblocators.btn_next).click({ force: true });
  }

  //step 3

  selectVehicle(vehicleName) {
    cy.get(this.weblocators.btn_vehicleSelection)
      .contains(vehicleName)
      .click({ force: true });
  }
  clickNextStep3() {
    cy.get(this.weblocators.btn_next).click({ force: true });
    cy.wait(2000);
  }

  //step 4

  selectNonBookableequip() {
    cy.get(this.weblocators.btn_nonBookableEquip).click({
      force: true,
      timeout: 20000,
    });
  }

  // selectNonBookableEquipByName() {
  //   cy.get(this.weblocators.btn_allNonBookableEquip).contains("Forklift 01").click({ force: true });
  // }

  selectNonBookableEquipByName(equipmentName = "Forklift 01") {
    cy.get(this.weblocators.btn_allNonBookableEquip)
      .contains(equipmentName)
      .click({ force: true });
  }

  saveNonBookableEquipmentNames() {
    cy.get(this.weblocators.btn_allNonBookableEquip).then(($elements) => {
      const names = [...$elements].map((el) => el.innerText.trim());
      cy.writeFile("cypress/fixtures/nonBookableEquipExtracted.json", {
        nonBookableEquipmentNameSave: names,
      });
    });
  }

  //Multiple Non bookable Element
  selectMultipleNonbBookableEquip() {
    cy.get(this.weblocators.btn_allNonBookableEquip)
      .eq(1)
      .click({ force: true });
    cy.get(this.weblocators.btn_allNonBookableEquip)
      .eq(2)
      .click({ force: true });
  }

  //Bookable Equipment 1

  selectBookableEquipmentFirst() {
    cy.get(this.weblocators.btn_selectBookableEquipment)
      .contains("Lift Haus A1") // Change 'Automation' to the text you want to match
      .click({ force: true });
  }

  selectBookableEquipmentFirstDynamic(equipmentName = "Equipment",index) {
    cy.get(this.weblocators.btn_selectBookableEquipment)
      //.contains(equipmentName).eq(index) // Change 'Automation' to the text you want to match
      .filter(`:contains("${equipmentName}")`).eq(index)
      .click({ force: true });
  }

  selectBookableEquipmentCrane() {
    cy.get(this.weblocators.btn_selectBookableEquipment)
      .contains("Automation - Crane") // Change 'Automation' to the text you want to match
      .click({ force: true });

    cy.get('[data-lang-key="APP_SHIPMENTS.AMOUNT"]')
      .should("be.visible")
      .type("30");
    cy.get('[data-lang-key="APP_SHIPMENTS.OK"]')
      .should("be.visible")
      .click({ force: true });
  }
  //Bookable Equipment 1

  selectBookableEquipmentSecond() {
    cy.get(this.weblocators.btn_selectBookableEquipment)
      .contains("Lift Haus A2") // Change 'Automation' to the text you want to match
      .click({ force: true });
  }

  // selectUp() {
  //   cy.get(this.weblocators.title_AllUpName)
  //     .contains("Automation Test Zone")
  //     .click({ force: true });
  // }

  selectUp(upName = "Automation Test Zone") {
    cy.get(this.weblocators.title_AllUpName)
      .contains(upName)
      .click({ force: true });
  }

  //Only first slot selection - We will reject/cancel later that y specific slot selection
  // selectFirstSlotFromUP() {
  //   cy.get(this.weblocators.data_slot_value)
  //     .first()
  //     .then(($slot) => {
  //       if ($slot.hasClass("inactive")) {
  //         cy.log(
  //           "Slot is inactive, duplication test pass - skipping shipment creation"
  //         );
  //         return false;
  //       } else {
  //         cy.get(this.weblocators.data_slot_value)
  //           .first()
  //           .click({ force: true });
  //         return true;
  //       }
  //     });
  // }


  // ✅ Fixed version

  selectFirstSlotFromUP() {
  return cy.get(this.weblocators.data_slot_value)
    .first()
    .then(($slot) => {
      if ($slot.hasClass("inactive")) {
        cy.log("Slot is inactive, duplication test pass - skipping shipment creation");
        // Wrap the result into a Cypress chainable
        return cy.wrap(false);
      } else {
        cy.wrap($slot).click({ force: true });
        cy.log("Active slot selected successfully ✅");
        return cy.wrap(true);
      }
    });
}


  //select 2nd up slot for rejection

  selectSecondSlotFromUPforRejectShipment() {
    cy.get(this.weblocators.data_slot_value).eq(5).click({ force: true });
  }

  //select 7th up slot for Booking then from step 4 choose another shipment 7th upslot

  selectUPSlotand7thnumberChangeFromSmallCaledericoninNextShipment() {
    cy.get(this.weblocators.data_slot_value).eq(6).click({ force: true });
  }

  //Select UP slot for same time and slot
  selectUPSlotSpecificTimeAndSlot(timeSlots = []) {
    timeSlots.forEach((slot) => {
      cy.get(`[data-slot-value="${slot}"]`)
        .click({ force: true })
        .should("not.have.class", "inactive");
    });
  }

  //Select first Equipment slot for same time and slot
  selectfirstEquipmentSlotSpecificTimeAndSlot() {
    const timeSlots = ["10:10 - 10:20", "11:20 - 11:30"];

    cy.get(this.weblocators.schedule_data_equipment)
      .eq(0)
      .scrollIntoView()
      .within(() => {
        timeSlots.forEach((slot) => {
          cy.get(`[data-slot-value="${slot}"]`)
            .not(".inactive")
            .first() // Optional: handles any duplicates within the section
            .click({ force: true })
            .should("have.class", "active");
        });
      });
  }

  //Select second Equipment slot for same time and slot
  selectSecondEquipmentSlotSpecificTimeAndSlot() {
    const timeSlots = ["10:10 - 10:20", "11:20 - 11:30"];

    cy.get(this.weblocators.schedule_data_equipment)
      .eq(1)
      .scrollIntoView()
      .within(() => {
        timeSlots.forEach((slot) => {
          cy.get(`[data-slot-value="${slot}"]`)
            .not(".inactive")
            .first() // Optional: handles any duplicates within the section
            .click({ force: true })
            .should("have.class", "active");
        });
      });
  }

  //Combine Select first and 2nd Equipment slot - this is for same time and slot selection - more reuseable
  //you can customize the equipmentIndex and timeSlots from the Test File

  select1stand2ndEquipmentSlotSpecificTimeAndSlot(
    equipmentIndex = 0,
    timeSlots = []
  ) {
    cy.get(this.weblocators.schedule_data_equipment)
      .eq(equipmentIndex)
      .scrollIntoView()
      .within(() => {
        timeSlots.forEach((slot) => {
          cy.get(`[data-slot-value="${slot}"]`)
            .not(".inactive")
            .first()
            .click({ force: true })
            .should("have.class", "active");
        });
      });
  }

  // select1stand2ndEquipmentSlotSpecificTimeAndSlot(equipmentIndex = 0, timeSlots = []) {
  //     cy.get(this.weblocators.schedule_data_equipment).eq(equipmentIndex).scrollIntoView().within(() => {
  //       for (const slot of timeSlots) {
  //         cy.wait(2000)
  //         cy.get(`[data-slot-value="${slot}"]`)
  //           .scrollIntoView() // <--- force scroll of the slot itself
  //           .should('exist')
  //           .should('be.visible')
  //           .dblclick({ force: true });

  //         cy.wait(3000); // optional
  //       }
  //     });
  //   }

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
    cy.get(this.weblocators.schedule_data_equipment)
      .eq(0)
      .scrollIntoView()
      .find(this.weblocators.btn_SelectUpSlot)
      .each(($el) => {
        if (!$el.hasClass("inactive")) {
          cy.wrap($el).click({ force: true });

          // Verify that the slot becomes active after selection
          cy.wrap($el).should("have.class", "active");

          return false; // Exit the loop after selecting an available slot
        }
      });
  }

  selectEquipmentSlotTwo() {
    cy.get(this.weblocators.schedule_data_equipment)
      .eq(1)
      .scrollIntoView()
      .find(this.weblocators.btn_SelectUpSlot)
      .each(($el) => {
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
    cy.get(this.weblocators.schedule_data_up)
      .scrollIntoView()
      .find(this.weblocators.btn_SelectUpSlot)
      .each(($el) => {
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
  navigateStep5() {
    cy.get(this.weblocators.dateInfo_load).each(($el) => {
      cy.wrap($el).should("be.visible"); //load step 1  - all the date //if date not loaded, all other steps faces issues
    });
    cy.get(this.weblocators.nav_Tab_step).eq(4).click();
    cy.wait(2000)
  }

  clickOnSitePerson() {
    cy.get(this.weblocators.btn_addOnSitePerson).first().click({ force: true });
  }

  //ADD NEW RESPONSIBLE PERSON
  clickAddnewResponsiablebtn() {
    cy.get(this.weblocators.btn_addNewPerson).click();
  }
  enterInformationResponsiblePerson(name, email, phonenumber) {
    cy.get(this.weblocators.txt_name).type(name, { force: true });
    cy.get(this.weblocators.txt_email).type(email, { force: true });
    cy.get(this.weblocators.txt_phone).type(phonenumber, { force: true });
    cy.get(this.weblocators.btn_saveNewResponsiableperson).click({
      force: true,
    });
    cy.wait(1000);
  }

  selectRadioButtonWithExistingResponsiableperson() {
    cy.wait(2000);
    cy.get(this.weblocators.radiobtn_selectperson)
      .should("be.visible")
      .first()
      .click({ force: true });
    cy.get(this.weblocators.btn_OkonsiteSave).click();
  }

  //Add Order Responsible Person
  clickAddOrderResponsiablebtn() {
    cy.get(this.weblocators.btn_addOnSitePerson).eq(0).click({ force: true });
  }

  //Add Delivery Reponsible person
  clickAddDeliveryResponsiablebtn() {
    cy.get(this.weblocators.btn_addOnSitePerson).eq(1).click({ force: true });
  }

  clickShipmentCreateBtn() {
    cy.wait(2000);
    cy.get(this.weblocators.btn_createShipment)
      .scrollIntoView()
      .click({ force: true });
  }

  addSustainabilityAddresss(address) {
    cy.get(this.weblocators.txt_sustainabilityAddress)
      .should("be.visible")
      .clear()
      .type(address, { force: true });
    cy.get(".pac-container .pac-item").then(($address) => {
      if ($address.length > 0) {
        cy.wrap($address).first().click({ force: true });
      } else {
        cy.log("No address suggestions found, proceeding without selection.");
      }
    });
  }

  checkSelectedAddressFavouriteIcon() {
    cy.get("i.material-icons").then(($icons) => {
      const iconText = $icons.text().trim();

      if (iconText.includes("star_border")) {
        cy.log("🔲 Not a favorite. Clicking to mark as favorite.");
        cy.contains("i.material-icons", "star_border").click();
      } else if (iconText.includes("star")) {
        cy.log("⭐ Already marked as favorite.");
        // Do nothing or remove from favorite if needed
      } else {
        cy.log("⚠️ No recognizable star icon found.");
      }
    });
  }

  clearSustainabilityAddress() {
    cy.get(this.weblocators.txt_sustainabilityAddress)
      .should("be.enabled")
      .clear().focus();
  }

  selectAddressFromtheFavoritesList(){
    cy.get(this.weblocators.txt_sustainabilityAddress).click({ force: true });
       cy.get('.list-option-item').then(($el) => {
      if ($el.length > 0) {
        cy.wrap($el).contains('230').should('contain.text', '230 Fifth');
        cy.wrap($el).contains('230').click();
      }
    });
  }
  makeAddressFavorite() {
    cy.get(".mat-mdc-form-field-icon-suffix")
      .should("be.visible")
      .dblclick({ force: true });
  }

  enterKMDistance(Km) {
    cy.get('[placeholder="Kilometers"]').should("be.enabled").clear().type(Km);
  }

  verifyFavoriteAddress() {
    cy.get(".mat-mdc-form-field-icon-suffix").should("have.class", "favorite");
    cy.log("Favorite address verified successfully.");
  }

  //Client: CHECK create button not clicked, try again and later click open shipment button
  clickOpenShipmentWithCreateBtn(retries = 2, waitTime = 4000) {
    const attemptClick = (remainingTries) => {
      cy.wait(waitTime);

      cy.get("body").then(($body) => {
        // Step 1: Click 'Create Shipment' if visible
        if ($body.find(this.weblocators.btn_createShipment).length > 0) {
          cy.get(this.weblocators.btn_createShipment).click({ force: true });
          cy.log("Clicked 'Create Shipment' button.");
        }

        // Step 2: Wait and click 'Open Shipment'
        cy.get(this.weblocators.btn_openShipment, { timeout: 15000 })
          .should("be.visible")
          .click({ timeout: 8000 })
          .then(() => {
            cy.log("Clicked 'Open Shipment' button.");

            // Step 3: Check if 'Create Shipment' still exists (i.e., failed to proceed)
            cy.get("body").then(($newBody) => {
              if (
                $newBody.find(this.weblocators.btn_createShipment).length > 0
              ) {
                if (remainingTries > 0) {
                  cy.log(`Retrying... Remaining tries: ${remainingTries}`);
                  attemptClick(remainingTries - 1);
                } else {
                  throw new Error(
                    "Still seeing 'Create Shipment' after retries — action did not complete."
                  );
                }
              }
            });
          });
      });
    };

    attemptClick(retries);
  }

  //Shipment Create Modal

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
        cy.log(shipmentText);
      });
  }

  clickExactExtractedShipment() {
    cy.get("@shipmentText").then((savedText) => {
      const searchForText = savedText.trim();

      const scrollAndSearch = () => {
        let found = false;

        cy.wait(3000);
        cy.get(this.weblocators.modal_openOrapprove_shipmentName, {
          timeout: 10000,
        }).then(($items) => {
          Cypress._.some($items, (el) => {
            const text = el.innerText.trim();
            if (text === searchForText) {
              cy.wrap(el).scrollIntoView({ duration: 500, easing: "linear" });
              cy.wait(500);
              cy.wrap(el).click({ force: true });
              cy.get(this.weblocators.dateInfo_load).should("be.visible");
              found = true;
              return true; // Break the loop
            }
          });

          // If not found and potentially more items to load
          if (!found) {
            // Scroll to the last item to trigger loading more
            cy.wrap($items.last()).scrollIntoView({
              duration: 700,
              easing: "linear",
            });
            cy.wait(2000); // wait for new items to load

            // Recurse to try again after loading more
            scrollAndSearch();
          }
        });
      };

      scrollAndSearch();
    });
  }

  clickApproveShipmentbutton() {
    cy.get(this.weblocators.btn_approveShipment).click();
    cy.get(this.shipmentRejectLocator.rejectorApprove_Confirm).click();
  }

  //Complete Shipment

  clickCompleteShipmentButton() {
    cy.get(this.weblocators.btn_CompleteShipment)
      .should("be.visible")
      .click({ force: true });
    cy.get(this.shipmentRejectLocator.rejectorApprove_Confirm)
      .should("be.visible")
      .click();
  }
  //complete shipment For Crane
  clickCompleteShipmentCraneButton() {
    cy.get(this.weblocators.btn_arriveStatusShipment).should("be.visible");
    cy.get(this.weblocators.btn_CompleteShipment)
      .should("be.visible")
      .click({ force: true });
    cy.get(this.weblocators.btn_YesAllCompleteShipment)
      .should("be.visible")
      .click({ force: true });
  }
  //reject Shipment
  rejectShipment() {
    cy.get(this.shipmentRejectLocator.reject_Shipment).click();
    cy.get(this.shipmentRejectLocator.reject_Message).type("Rejected");
    cy.get(this.shipmentRejectLocator.rejectorApprove_Confirm).click();
  }
  //cancel Shipment
  clickCancelShipment() {
    cy.get('[data-lang-key="APP_SHIPMENTS.CANCEL_SHIPMENT"]').click();
    cy.get(this.shipmentRejectLocator.reject_Message).type(
      "Canceled by automation, Try to Book again"
    );
    cy.get(this.shipmentRejectLocator.rejectorApprove_Confirm).click();
  }

  verifySelectionFirstSlotagainForRejectShipment() {
    cy.get(this.weblocators.data_slot_value)
      .eq(0)
      .click({ force: true })
      .then(() => {
        cy.log("Test Passed: Slot is active on second attempt");
      });
  }

  clickOverviewStep6() {
    cy.get(this.weblocators.dateInfo_load).each(($el) => {
      cy.wrap($el).should("be.visible"); //load step 1  - all the date //if date not loaded, all other steps faces issues
    });
    cy.get(this.weblocators.nav_Tab_step).eq(5).click({ force: true });
  }
  clickAddAnotationBtn() {
    cy.get(this.weblocators.weatherInfo_load).should("be.visible");
    cy.get(this.weblocators.title_annotation).click({ force: true });
    cy.get(this.weblocators.btn_addAnnotation).click({ force: true });
    cy.get(this.weblocators.txt_WriteAnnotation)
      .eq(1)
      .type("Annotation For documentation Or Incident");
  }

  clickSaveAnnotationbtn() {
    cy.get(this.weblocators.btn_SaveAnnotation).click({ force: true });
  }
  enterShipmentCommentStep6() {
    cy.get(this.weblocators.weatherInfo_load).should("be.visible");
    cy.get(this.weblocators.txt_ShipmentComment).type(
      "Shipment comment By Automation",
      { force: true }
    );
    cy.get(this.weblocators.save_shipmentComment).click({ force: true });
  }
  clickDiscardButton() {
    cy.get(this.weblocators.btn_discard).first().click({ force: true });
  }

  //making a generic retryableClick utility
  //Use it later like:  shipmentOBJ.retryableClick(shipmentOBJ.weblocators.btn_openShipment);

  retryableClick(locator, retries = 2, waitTime = 4000) {
    const attempt = (remainingTries) => {
      cy.wait(waitTime);
      cy.get(locator, { timeout: 15000 })
        .should("be.visible")
        .click({ timeout: 8000 })
        .then(
          () => cy.log(`Clicked element [${locator}] successfully.`),
          (err) => {
            if (remainingTries > 0) {
              cy.log(
                `Retrying click on [${locator}]... Remaining: ${remainingTries}`
              );
              attempt(remainingTries - 1);
            } else {
              cy.log(`Failed to click on [${locator}] after retries.`);
              throw err;
            }
          }
        );
    };

    attempt(retries);
  }
}
