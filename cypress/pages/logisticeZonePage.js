export class logisticZone {

    weblocators = {
        
        btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
        btn_LogisticZone: '.nav-link-title.ng-star-inserted', 
        btn_add: '[aria-label="add activity"]',
        txt_id: '[formcontrolname="IdName"]',
        txt_name: '[formcontrolname="ZoneName"]',
        txt_description: '[formcontrolname="ShortDescription"]',
        txt_address: '#mat-input-4',
        map: '.gm-style > div > div:nth-child(2)',
        btn_saveZonePage1: '.mat-raised-button'


    }

    zoneSchedualeLocators = 
    {
      slotDuration10min: '.mat-chip-list-wrapper > :nth-child(1)',
      endDateFieldClear: '#mat-input-8',
      endDateFiled: '[data-lang-key="APP_EQUIPMENTS.END_DATE"]',
      btn_smallCalenderIconButton: '.mat-datepicker-toggle-default-icon.ng-star-inserted',
      dd_yearSelection: '.mat-calendar-period-button > .mat-button-wrapper',
      calenderContentForYearandMonth: '.mat-calendar-content',
      calenderContentForDaySelection: '.mat-calendar-table',
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
      
      dd_HoursList: '[role="listbox"]',
      //all the hour list
      hourOptionList: 'mat-option[role="option"]',

      //add icon button to add hour
      btn_addIconHourList: '.mat-focus-indicator.mat-button.mat-button-base.mat-primary',
      //save the Zone 2nd page
      btn_saveZonePageLast: '[data-lang-key="APP_EQUIPMENTS.SAVE"]'

      



    }

      clickNavigationButton()
      {
          cy.get(this.weblocators.btn_navigation).click();
      }
      navigateLogisticZones()
      {
          cy.get(this.weblocators.btn_LogisticZone).contains('Logistics Zones').click();
      }
      clickaddButton()
      {
        cy.get(this.weblocators.btn_add).click();
      }
      enterZoneDetails()
      {
        const random = Math.floor(Math.random()*10000)
        cy.get(this.weblocators.txt_id).type(random);
        cy.get(this.weblocators.txt_name).type(`Has71 ${random}`);
        cy.get(this.weblocators.txt_description).type('Description Added');
        cy.get(this.weblocators.txt_address).click();
      }


      //map 
       enterMapLocation()
       {
        cy.get(this.weblocators.map).dblclick({force: true});
       }

       clickSaveForSaveZoneFirstPage()
       {

         //scroll up
         cy.get(this.weblocators.txt_description).scrollTo('top', {ensureScrollable: false}) 
         //Save button
         cy.wait(3000)
         cy.get(this.weblocators.btn_saveZonePage1).should('be.visible').click();

       }

      //--------------------- //2nd PAGE --------------------------------

       selectSlotDuration10min()
       {
         cy.get(this.zoneSchedualeLocators.slotDuration10min).should('be.visible').click();
       }

       selectEndDateCalender()
       {
         cy.get(this.zoneSchedualeLocators.endDateFieldClear).clear({force: true});
         cy.wait(3000);
         cy.get(this.zoneSchedualeLocators.endDateFiled).click();
         cy.get(this.zoneSchedualeLocators.btn_smallCalenderIconButton).eq(1).click();
         cy.wait(3000);
         
         //navigate to YEAR section
         cy.get(this.zoneSchedualeLocators.dd_yearSelection).click();


         //Year Selection
         cy.get(this.zoneSchedualeLocators.calenderContentForYearandMonth).contains('2028').click();
         cy.get(this.zoneSchedualeLocators.calenderContentForYearandMonth).contains('JAN').click();
         cy.get(this.zoneSchedualeLocators.calenderContentForDaySelection).contains('17').click();

         
       }
       selectAvailablilityMondayFromValue()
       {
        //Monday Selection
        cy.get(this.zoneSchedualeLocators.cb_Monday).click();
        //From
        cy.get(this.zoneSchedualeLocators.txt_FROM).then(($fromValue) =>{
          if ($fromValue.val() === '') {  // Checking if the field is empty
            cy.wrap($fromValue).click({force: true});  // Wrap it back to make Cypress commands chainable
            cy.get(this.zoneSchedualeLocators.dd_HoursList).contains('00:10').click();
          }
        });
      }
      selectAvailablilityMondayTOValue()
      {
              cy.get(this.zoneSchedualeLocators.txt_TO).should('be.visible').then(() => {

                for (let i = 0; i < 72; i++) {
                  cy.get(this.zoneSchedualeLocators.txt_TO).eq(i).click({force: true});
                  cy.get(this.zoneSchedualeLocators.hourOptionList).eq(0).click({ force: true });
                  cy.wait(2000);
                  // Click the add button after selecting the values
                  cy.get(this.zoneSchedualeLocators.btn_addIconHourList)
                  .eq(1)
                  .should('be.enabled')
                  .click({ force: true});  
                  
                
                }
              });
      }

       

      selectAllOtherDayForAvailability()
      {
        cy.wait(2000);
        cy.get(this.zoneSchedualeLocators.cb_Tuesday).click();
        cy.wait(2000);
        cy.get(this.zoneSchedualeLocators.cb_Wednesday).click();
        cy.wait(2000);
        cy.get(this.zoneSchedualeLocators.cb_Thursday).click();
        cy.wait(2000);
        cy.get(this.zoneSchedualeLocators.cb_Friday).click();
        cy.wait(2000);
        cy.get(this.zoneSchedualeLocators.cb_Saturday).click();
        cy.wait(2000);
        cy.get(this.zoneSchedualeLocators.cb_Sunday).click();

      }

      verifySundayButtonIsChecked()
      {
        cy.get(this.zoneSchedualeLocators.cb_SundayVerify).should('have.attr', 'aria-checked', 'true');

      }
      saveTheZoneFrom2ndPage()
      {
        cy.get(this.zoneSchedualeLocators.btn_saveZonePageLast).should('be.enabled').click();
      }
  
}


      



