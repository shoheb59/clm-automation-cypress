export class shipmentPage

{
    weblocators = 
    {
        btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
        btn_shipment: '.nav-link-title.ng-star-inserted', 
        first_row: 'tbody[role="rowgroup"] tr',
        btn_addShipment: '[id="add_shipment"]',
        btn_calenderOpenSmallicon: '.mat-datepicker-toggle-default-icon.ng-star-inserted',
        btn_calenderNextMonth: '[aria-label="Next month"]',
        btn_selectCalederdate: '[aria-label="3 December 2024"]',
        btn_next: '[type="submit"]', //need to use first()
        //step 2
        btn_materialOptionSelct: 'span[cdk-describedby-host="0"]', //need to use contain
        txt_materialInputField: '[formcontrolname="MaterialQuantity"]',
        btn_addMaterial: '[data-lang-key="APP_SHIPMENTS.ADD"]',

        //step 3
        btn_vehicleSelection: '[id="shipments_unloading_vehiclesForm__0"]',
        //step 4
        btn_nonBookableEquip: '[id="shipments_timeslots_nonBookableEquipments__0"]',
        btn_selectUp: '[data-lang-key="APP_SHIPMENTS.MINUTES_SENTENCE_CASE"]', //Use contain
        btn_SelectUpSlot: '.calendar-slot.ng-star-inserted.h-10', //need to select slot according to enalbe

        //step 5
        btn_addOnSitePerson: '[data-lang-key="APP_SHIPMENTS.ADD_PERSON"]', //First
        btn_addNewPerson: '[data-lang-key="APP_SHIPMENTS.ADD_NEW"]',
        txt_name: '[formcontrolname="Name"]',
        txt_email: '[formcontrolname="Email"]',
        txt_phone: '[formcontrolname="Phone"]',
        btn_saveNewResponsiableperson: '[data-lang-key="SAVE"]',


        //existing
        radiobtn_selectperson: 'span .subtitle-2',
        btn_OkonsiteSave: '[id="shipments_otherInfo_responsiblePersonForm_responsibleModal_add_btn"]', //first

        btn_createShipment: '#shipments_workflow_save_5', //First

        btn_openShipment: '[data-lang-key="APP_SHIPMENTS.OPEN"]',
        btn_approveShipment: '[data-lang-key="APP_SHIPMENTS.APPROVE"]'



    }


    clickNavigationButton()
    {
        cy.get(this.weblocators.btn_navigation).click();
    }
    navigateShipment()
    {
        cy.get(this.weblocators.btn_shipment).contains('Shipments').click();
    }
    selectFirstLeanCard()
    {
        cy.get(this.weblocators.first_row).first().click();
    }
    clickAddshipment()
    {
        cy.get(this.weblocators.btn_addShipment).click();
    }
    selectDateFromCalender()
    {
        cy.get(this.weblocators.btn_calenderOpenSmallicon).click({force: true});
        cy.get(this.weblocators.btn_calenderNextMonth).should('be.visible').click();
        cy.get(this.weblocators.btn_selectCalederdate).click();

    }

    clickNextStep1()
    {
        cy.get(this.weblocators.btn_next).first().click()
    }

    //Step 2

    selectMaterial()
    {
        cy.get(this.weblocators.btn_materialOptionSelct).contains("02 Hasnat").click({force: true});
        cy.get(this.weblocators.txt_materialInputField).should('be.visible').type('50');
        cy.get(this.weblocators.btn_addMaterial).click()

    }
    clickNextStep2()
    {
        cy.get(this.weblocators.btn_next).eq(1).click();
    }

    //step 3

    selectVehicle()
    {
        cy.get(this.weblocators.btn_vehicleSelection).click({force: true});
    }
    clickNextStep3()
    {
        cy.get(this.weblocators.btn_next).eq(1).click({force: true});
    }

    //step 4

    selectNonBookableequip()
    {
        cy.get(this.weblocators.btn_nonBookableEquip).click({timeout: 20000});
    }

    // selectUp()
    // {
    //     cy.get(this.weblocators.btn_selectUp)
    //     .contains('Slot: 10 Minutes').scrollIntoView({block: 'center'}).click();
    // }

    selectUp()
    {
        cy.get('.mtrl-section-title').contains('UP 04').click({force: true});
    }

   



    selectUPslot() {
        cy.get(this.weblocators.btn_SelectUpSlot).each(($el) => {
            if (!$el.hasClass('inactive')) {
                cy.wrap($el).click({ force: true });
    
                // Verify that the slot becomes active after selection
                cy.wrap($el).should('have.class', 'active');
    
                return false; // Exit the loop after selecting an available slot
            }
        });
    }
    

    clickNextStep4()
    {
        cy.get(this.weblocators.btn_next).eq(1).click({force: true});
    }

    //step 5

    clickOnSitePerson()
    {
        cy.get(this.weblocators.btn_addOnSitePerson).first().click({force:true});
    }
    // clickAddnewResponsiablebtn()
    // {
    //     cy.get(this.weblocators.btn_addNewPerson).click();
    // }
    selectRadioButtonWithExistingResponsiableperson()
    {
        cy.get(this.weblocators.radiobtn_selectperson).should('be.visible').eq(1).click({force:true});
        cy.get(this.weblocators.btn_OkonsiteSave).click();
      
    }

    clickShipmentCreateBtn()
    {
        cy.wait(2000);
        cy.get(this.weblocators.btn_createShipment).scrollIntoView({ block: 'end' }).click({force: true});
    }
    clickOpenShipment()
    { 
        cy.wait(4000);
        cy.get(this.weblocators.btn_openShipment).should('be.visible', {timeout: 15000}).click({timeout: 8000});
    }

    clickApproveShipment()
    { 
        cy.wait(5000);
        cy.get(this.weblocators.btn_approveShipment).click({timeout: 8000});
    }





}