export class equipMent {


    weblocators = {
        btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
        btn_equipment: '.nav-link-title.ng-star-inserted', 
        btn_addEquipment: '[data-lang-key="APP_EQUIPMENTS.ADD_EQUIPMENTS"]',
        choose_iconRandomly: '.inactive-img',
        txt_eqID: '[data-lang-key="APP_EQUIPMENTS.EQUIPMENT_ID"]',
        txt_name: '[formcontrolname="EquipmentName"]',
        dd_type: '[formcontrolname="EquipmentType"]',
        dd_typeSelect: '[role="option"]', //all the Category options
        txt_maxLoad: '[formcontrolname="MaxLoad"]',
        txt_shortDescription: '[formcontrolname="EquipmentDescription"]',
        txt_additionalcomment: '[formcontrolname="EquipmentComment"]',
        btn_equipmentSave: '[type="submit"]',

        //Bookable
        toggle_Bookable: '[role="switch"]',//first
        rd_FreeOfcost: '[type="radio"]', //4th option
        btn_next: '[data-lang-key="NEXT"]',
        slotDurationText: '[data-lang-key="APP_EQUIPMENTS.SLOT_DURATION"]',
        allSlotDuration: '.mdc-evolution-chip-set__chips',
        txt_FROM: '[data-lang-key="APP_EQUIPMENTS.FROM"]',
        txt_TO: '[data-lang-key="APP_EQUIPMENTS.TO"]',
        dd_HoursList: '[role="listbox"]',
      //all the hour list
        hourOptionList: 'mat-option[role="option"]',

      //add icon button to add hour
        btn_addIconHourList: '[role="img"]', //contains (add_circle)

         //Moday Time configuration
      cb_Monday: '[data-lang-key="APP_EQUIPMENTS.MONDAY"]',
      cb_Tuesday: '[data-lang-key="APP_EQUIPMENTS.TUESDAY"]',
      cb_Wednesday: '[data-lang-key="APP_EQUIPMENTS.WEDNESDAY"]',
      cb_Thursday:'[data-lang-key="APP_EQUIPMENTS.THURSDAY"]',
      cb_Friday: '[data-lang-key="APP_EQUIPMENTS.FRIDAY"]',
      cb_Saturday: '[data-lang-key="APP_EQUIPMENTS.SATURDAY"]',
      cb_Sunday: '[data-lang-key="APP_EQUIPMENTS.SUNDAY"]',
      cb_SundayVerify: '[data-lang-key="APP_EQUIPMENTS.SUNDAY"] [type ="checkbox"]',
      txt_FROM: '[data-lang-key="APP_EQUIPMENTS.FROM"]',
      txt_TO: '[data-lang-key="APP_EQUIPMENTS.TO"]',





    }

    clickNavigationButton()
    {
        cy.get(this.weblocators.btn_navigation).click();
    }
    navigateMaterial()
    {
        cy.get(this.weblocators.btn_equipment).contains('Equipment').click();
    }
    clickAddEquipment()
    {
        cy.get(this.weblocators.btn_addEquipment).click({timeout: 3000},{force: true});
    }

    chooseEquimentIconRandomly()
    {
        cy.get(this.weblocators.choose_iconRandomly).then(items =>{
            //expect(items.length).to.eq(12);
            const randomIcon = Math.floor(Math.random() *8);
            cy.wrap(items).eq(randomIcon).click()
        })
    }
    typeEquipmentId()
    {
        const randomId = Math.floor(Math.random() *100);
        cy.get(this.weblocators.txt_eqID).type('1.' + `${randomId}`)
    }
    typeEquipmentName()
    {
        const randomName = Math.floor(Math.random() *1000);
        cy.get(this.weblocators.txt_name).type(`equipment${randomName}`, {force: true});
    }

    selectDropdownType()
    {
        cy.get(this.weblocators.dd_type).click();
        cy.get(this.weblocators.dd_typeSelect).contains('Forklift').click({force: true});
    }
    enterMaxLoad(maxload)
    {
        cy.get(this.weblocators.txt_maxLoad).type(maxload, {force: true});
    }
    enterShortDescription(shortDescription)
    {
        cy.get(this.weblocators.txt_shortDescription).type(shortDescription, {force: true});
    }

    enterAdditionalComment(additionalComment)
    {
        cy.get(this.weblocators.txt_additionalcomment).type(additionalComment, {force: true});
    }
    clickSaveButton()
    {
        cy.get(this.weblocators.btn_equipmentSave).click({force: true});
    }

    //Bookable
    clickRadioButton()
    {
        cy.get(this.weblocators.toggle_Bookable).first().click({force: true});
    }
    selectPricingModule()
    {
        cy.get(this.weblocators.rd_FreeOfcost).eq(3).click({force: true});
    }
    clickNextButton()
    {
        cy.get(this.weblocators.btn_next).click({force: true});
    }


    //15 min slot selection

    selectSlotDuration15min()
       {
        cy.get(this.weblocators.slotDurationText).should('be.visible');
        cy.wait(2000); 
        cy.get(this.weblocators.allSlotDuration).contains('15').should('be.visible').click({force: true});
       }


    selectAvailablilityMondayFromValue()
       {
        //Monday Selection
        cy.get(this.weblocators.cb_Monday).click();
        //From
        cy.get(this.weblocators.txt_FROM).then(($fromValue) =>{
          if ($fromValue.val() === '') {  // Checking if the field is empty
            cy.wrap($fromValue).click({force: true});  // Wrap it back to make Cypress commands chainable
            cy.get(this.weblocators.hourOptionList).contains("06:00").click();
          }
        });
      }

    selectAvailablilityMondayFromValueOWN()
    {
        cy.get('[type="checkbox"]').eq(0).check();
        cy.get('[aria-haspopup="listbox"]').eq(0)
        .find('[role="option"]').contains('06:00').click();
    }


      
    selectAvailablilityMondayTOValue()
      {
              cy.get(this.weblocators.txt_TO).should('be.visible').then(() => {

                for (let i = 0; i < 2; i++) {
                  cy.get(this.weblocators.txt_TO).eq(i).click({force: true});
                  cy.get(this.weblocators.hourOptionList).eq(0).click({ force: true });
                  cy.wait(2000);
                  // Click the add button after selecting the values
                  cy.get(this.weblocators.btn_addIconHourList).contains('add_circle')
                  .click({ force: true});  
                  
                
                }
              });
      }

      selectAllOtherDayForAvailability()
      {
        cy.wait(2000);
        cy.get(this.weblocators.cb_Tuesday).click();
        cy.wait(2000);
        cy.get(this.weblocators.cb_Wednesday).click();
        cy.wait(2000);
        cy.get(this.weblocators.cb_Thursday).click();
        cy.wait(2000);
        cy.get(this.weblocators.cb_Friday).click();
        cy.wait(2000);
        cy.get(this.weblocators.cb_Saturday).click();
        cy.wait(2000);
        cy.get(this.weblocators.cb_Sunday).click();

      }


    



}