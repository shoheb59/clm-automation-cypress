export class ShipmentPage {
    // Locators for all web elements
    locators = {
      // Navigation and basic controls
      navigationButton: '[fusenavbarvertical="toggleBar"]',
      shipmentLink: ".nav-link-title.ng-star-inserted",
      firstRow: 'tbody[role="rowgroup"] tr',
      addShipmentButton: '[id="add_shipment"]',
      calendarIcon: ".mat-datepicker-toggle-default-icon.ng-star-inserted",
      nextMonthButton: '[aria-label="Next month"]',
      specificDateButton: '[aria-label="29 April 2025"]',
      dateInfoLoad: '.date-text',
      nextButton: '[type="submit"]',
      discardButton: '[data-lang-key="APP_SHIPMENTS.DISCARD"]',
      
      // Material selection (Step 2)
      materialOptionSelect: ".mat-mdc-tooltip-trigger",
      materialQuantityField: '[formcontrolname="MaterialQuantity"]',
      addMaterialButton: '[data-lang-key="APP_SHIPMENTS.ADD"]',
      addNewMaterialButton: '[data-lang-key="APP_SHIPMENTS.ADD_NEW"]',
      materialNameField: '[formcontrolname="MaterialName"]',
      unitDropdown: '.mat-mdc-select-arrow-wrapper',
      unitOptions: '[role="option"]',
      
      // Vehicle selection (Step 3)
      vehicleSelection: '[id="shipments_unloading_vehiclesForm__0"]',
      
      // Time slots (Step 4)
      nonBookableEquipment: '[id="shipments_timeslots_nonBookableEquipments__0"]',
      allNonBookableEquipment: '.name-text',
      upTitles: '.mtrl-section-title',
      upSelectButton: '[data-lang-key="APP_SHIPMENTS.MINUTES_SENTENCE_CASE"]',
      upSlot: ".calendar-slot.ng-star-inserted.h-10",
      slotValue: "[data-slot-value]",
      bookableEquipment: '[id^="shipments_timeslots_bookableEquipments__"]',
      equipmentCalendar: '[data-calendar-type="equipment"]',
      upCalendar: '[data-calendar-type="up"]',
      
      // Responsible person (Step 5)
      addOnSitePersonButton: '[data-lang-key="APP_SHIPMENTS.ADD_PERSON"]',
      addNewPersonButton: '[data-lang-key="APP_SHIPMENTS.ADD_NEW"]',
      nameField: '[formcontrolname="Name"]',
      emailField: '[formcontrolname="Email"]',
      phoneField: '[formcontrolname="Phone"]',
      savePersonButton: '[data-lang-key="SAVE"]',
      personRadioButton: "span .subtitle-2",
      saveOnSiteButton: '[id="shipments_otherInfo_responsiblePersonForm_responsibleModal_add_btn"]',
      
      // Overview (Step 6)
      annotationTitle: '[data-lang-key="APP_SHIPMENTS.FINDINGS"]',
      addAnnotationButton: '[data-lang-key="APP_SHIPMENTS.ADD_FINDINGS"]',
      annotationTextField: '[data-lang-key="APP_SHIPMENTS.WRITE_HERE"]',
      saveAnnotationButton: '[data-lang-key="APP_SHIPMENTS.SAVE"]',
      weatherInfoLoad: '.caption-2.date-text',
      shipmentCommentField: 'shipments_overviewPanel_comments_text',
      saveCommentButton: '[id="shipments_overviewPanel_comments_save"]',
      
      // Shipment actions
      createShipmentButton: "#shipments_workflow_save_5",
      openShipmentButton: '[data-lang-key="APP_SHIPMENTS.OPEN"]',
      approveShipmentButton: '[data-lang-key="APP_SHIPMENTS.APPROVE"]',
      shipmentHeading: ".shipment-headline",
      
      // Modal dialogs
      modalDialog: '#mat-mdc-dialog-2',
      modalDialogText: '[data-lang-key="APP_SHIPMENTS.SHIPMENT_UPDATED_MODAL_ONE,APP_SHIPMENTS.SHIPMENT_CREATED_MODAL_TWO"]',
      shipmentNameInModal: '[data-lang-key="APP_SHIPMENTS.SHIPMENT_NO"]',
      navTabSteps: '[role="tab"]',
      
      // Shipment actions
      rejectShipment: '[data-lang-key="APP_SHIPMENTS.REJECT"]',
      rejectMessage: '[data-lang-key="APP_SHIPMENTS.COMMENT_MSG"]',
      confirmButton: '[data-lang-key="APP_SHIPMENTS.DISCARD_SHIPMENT_CONFIRM"]',
      cancelShipmentButton: '[data-lang-key="APP_SHIPMENTS.CANCEL_SHIPMENT"]'
    };
  
    // Navigation methods
    openNavigation() {
      cy.get(this.locators.navigationButton).click();
      return this;
    }
    
    navigateToShipments() {
      cy.get(this.locators.shipmentLink).contains("Shipments").click();
      return this;
    }
    
    selectFirstCard() {
      cy.get(this.locators.firstRow).first().click();
      return this;
    }
    
    // Shipment creation methods
    clickAddShipment() {
      cy.get(this.locators.addShipmentButton).click();
      return this;
    }
    
    selectSpecificDate() {
      cy.get(this.locators.calendarIcon).click({ force: true });
      cy.get(this.locators.nextMonthButton).should("be.visible").click();
      cy.get(this.locators.specificDateButton).dblclick({ force: true });
      return this;
    }
    
    selectRandomDate() {
      cy.get(this.locators.calendarIcon).click({ force: true });
      cy.get('[role="gridcell"] button:not(.mat-calendar-body-disabled)')
        .first()
        .dblclick({ force: true });
      return this;
    }
    
    proceedToNextStep() {
      cy.wait(3000);
      cy.get(this.locators.nextButton).first().scrollIntoView().click({ force: true });
      return this;
    }
    
    // Material selection methods
    addNewMaterial(materialName) {
      cy.get(this.locators.addNewMaterialButton).should('be.visible').click({ force: true });
      
      const randomId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      cy.get(this.locators.materialNameField).type(`${materialName} ${randomId}`);
      
      cy.get(this.locators.unitDropdown).click({ setTimeout: 3000 }, { force: true });
      cy.get(this.locators.unitOptions).eq(0).click({ force: true });
      
      cy.get(this.locators.addMaterialButton).dblclick({ force: true });
      return this;
    }
    
    selectMaterial() {
      cy.get(this.locators.materialOptionSelect).eq(1).click({ force: true });
      cy.get(this.locators.materialQuantityField)
        .should("be.visible")
        .type("50");
      cy.get(this.locators.addMaterialButton).dblclick({ force: true });
      return this;
    }
    
    selectMultipleMaterials() {
      const quantities = ["50", "52", "54"];
      
      quantities.forEach((quantity, index) => {
        cy.get(this.locators.materialOptionSelect)
          .eq(index + 1)
          .click({ force: true });
          
        cy.get(this.locators.materialQuantityField)
          .should("be.visible")
          .type(quantity);
          
        cy.get(this.locators.addMaterialButton).click();
      });
      return this;
    }
    
    // Vehicle selection methods
    selectVehicle() {
      cy.get(this.locators.vehicleSelection).click({ force: true });
      return this;
    }
    
    // Equipment selection methods
    selectNonBookableEquipment() {
      cy.get(this.locators.nonBookableEquipment).click({ timeout: 20000 });
      return this;
    }
    
    selectMultipleNonBookableEquipment() {
      cy.get(this.locators.allNonBookableEquipment).eq(1).click({ force: true });
      cy.get(this.locators.allNonBookableEquipment).eq(2).click({ force: true });
      return this;
    }
    
    selectBookableEquipment(name) {
      cy.get(this.locators.bookableEquipment)
        .contains(name)
        .click({ force: true });
      return this;
    }
    
    selectUnloadingPoint(name = "Automation Test Zone") {
      cy.get(this.locators.upTitles)
        .contains(name)
        .click({ force: true });
      return this;
    }
    
    selectFirstSlot() {
      cy.get(this.locators.slotValue)
        .first()
        .then(($slot) => {
          if (!$slot.hasClass("inactive")) {
            cy.get(this.locators.slotValue)
              .first()
              .click({ force: true });
          } else {
            cy.log("Slot is inactive, unable to select");
          }
        });
      return this;
    }
    
    selectAvailableSlot() {
      cy.get(this.locators.upSlot).each(($el) => {
        if (!$el.hasClass("inactive")) {
          cy.wrap($el).click({ force: true });
          cy.wrap($el).should("have.class", "active");
          return false; // Exit loop after finding a slot
        }
      });
      return this;
    }
    
    selectEquipmentSlot(index = 0) {
      cy.get(this.locators.equipmentCalendar).eq(index).scrollIntoView()
        .find(this.locators.upSlot).each(($el) => {
          if (!$el.hasClass("inactive")) {
            cy.wrap($el).click({ force: true });
            cy.wrap($el).should("have.class", "active");
            return false; // Exit loop after finding a slot
          }
        });
      return this;
    }
    
    selectUpSlot() {
      cy.get(this.locators.upCalendar).scrollIntoView()
        .find(this.locators.upSlot).each(($el) => {
          cy.wrap($el).scrollIntoView();
          if (!$el.hasClass("inactive")) {
            cy.wrap($el).click({ force: true });
            cy.wrap($el).should("have.class", "active");
            return false; // Exit loop after finding a slot
          }
        });
      return this;
    }
    
    // Responsible person methods
    addOnSitePerson() {
      cy.get(this.locators.addOnSitePersonButton).first().click({ force: true });
      return this;
    }
    
    selectExistingPerson() {
      cy.get(this.locators.personRadioButton)
        .should("be.visible")
        .eq(1)
        .click({ force: true });
      cy.get(this.locators.saveOnSiteButton).click();
      return this;
    }
    
    // Shipment finalization methods
    createShipment() {
      cy.wait(2000);
      cy.get(this.locators.createShipmentButton)
        .scrollIntoView({ block: "end" })
        .dblclick({ force: true });
      return this;
    }
    
    openShipment() {
      cy.wait(4000);
      cy.get(this.locators.openShipmentButton)
        .should("be.visible", { timeout: 15000 })
        .click({ timeout: 8000 });
      return this;
    }
    
    approveShipment() {
      cy.wait(5000);
      cy.get(this.locators.approveShipmentButton).click({ timeout: 8000 });
      return this;
    }
    
    // Shipment extraction and actions
    extractShipmentNumber() {
      cy.get(this.locators.modalDialog)
        .find(this.locators.modalDialogText)
        .invoke("text")
        .then((fullText) => {
          const shipmentText = fullText.match(/:\s*(.*?)\s*has/)[1];
          cy.wrap(shipmentText).as("shipmentNumber");
        });
      return this;
    }
    
    selectExtractedShipment() {
      cy.get('@shipmentNumber').then((shipmentNumber) => {
        cy.get(this.locators.shipmentNameInModal)
          .each(($el) => {
            const elementText = $el.text().trim();
            if (elementText === shipmentNumber.trim()) {
              cy.wrap($el).click();
              cy.get('.date-text').should('be.visible');
            }
          });
      });
      return this;
    }
    
    approveSelectedShipment() {
      cy.get(this.locators.approveShipmentButton).click();
      cy.get(this.locators.confirmButton).click();
      return this;
    }
    
    rejectSelectedShipment(reason = 'Rejected') {
      cy.get(this.locators.rejectShipment).click();
      cy.get(this.locators.rejectMessage).type(reason);
      cy.get(this.locators.confirmButton).click();
      return this;
    }
    
    cancelSelectedShipment(reason = 'Canceled by automation, Try to Book again') {
      cy.get(this.locators.cancelShipmentButton).click();
      cy.get(this.locators.rejectMessage).type(reason);
      cy.get(this.locators.confirmButton).click();
      return this;
    }
    
    // Verification methods
    verifySlotInactive() {
      cy.get(this.locators.slotValue)
        .first()
        .should("have.class", "inactive")
        .then(() => {
          cy.log("Test Passed: Slot is inactive on second attempt");
        });
      return this;
    }
    
    verifySlotAvailable() {
      cy.get(this.locators.slotValue).first().click({ force: true }).then(() => {
        cy.log('Test Passed: Slot is active on second attempt');
      });
      return this;
    }
    
    // Overview tab actions
    navigateToOverview() {
      cy.get(this.locators.dateInfoLoad).each(($el) => {
        cy.wrap($el).should('be.visible');
      });
      cy.get(this.locators.navTabSteps).eq(5).click({ force: true });
      return this;
    }
    
    addAnnotation(text = 'Annotation For documentation Or Incident') {
      cy.get(this.locators.weatherInfoLoad).should('be.visible');
      cy.get(this.locators.annotationTitle).click({ force: true });
      cy.get(this.locators.addAnnotationButton).click({ force: true });
      cy.get(this.locators.annotationTextField).eq(1).type(text);
      return this;
    }
    
    saveAnnotation() {
      cy.get(this.locators.saveAnnotationButton).click({ force: true });
      return this;
    }
    
    addShipmentComment(comment = 'Shipment comment By Automation') {
      cy.get(this.locators.weatherInfoLoad).should('be.visible');
      cy.get(this.locators.shipmentCommentField).type(comment, { force: true });
      cy.get(this.locators.saveCommentButton).click({ force: true });
      return this;
    }
    
    clickDiscard() {
      cy.get(this.locators.discardButton).first().click({ force: true });
      return this;
    }
    
    // Combined workflows for common patterns
    createBasicShipment(useRandomDate = true) {
      this.openNavigation()
          .navigateToShipments()
          .selectFirstCard()
          .clickAddShipment();
          
      if (useRandomDate) {
        this.selectRandomDate();
      } else {
        this.selectSpecificDate();
      }
      
      return this.proceedToNextStep()
          .selectMaterial()
          .proceedToNextStep()
          .selectVehicle()
          .proceedToNextStep();
    }
    
    completeResponsiblePerson() {
      return this.addOnSitePerson()
          .selectExistingPerson();
    }
    
    selectEquipmentAndUnloadingPoint(equipmentType = 'single') {
      if (equipmentType === 'single') {
        this.selectNonBookableEquipment();
      } else if (equipmentType === 'multiple') {
        this.selectMultipleNonBookableEquipment();
      } else if (equipmentType === 'bookable1') {
        this.selectMultipleNonBookableEquipment()
            .selectBookableEquipment("Automation 1");
      } else if (equipmentType === 'bookable2') {
        this.selectMultipleNonBookableEquipment()
            .selectBookableEquipment("Automation 1")
            .selectBookableEquipment("Automation 2");
      }
      
      return this.selectUnloadingPoint()
          .selectAvailableSlot();
    }
  }