export class logisticZone {

    weblocators = {
        
        btn_navigation: '[fusenavbarvertical= "toggleBar"]',  
        btn_LogisticZone: '.nav-link-title.ng-star-inserted', 
        btn_add: '[aria-label="add activity"]',
        txt_id: '[formcontrolname="IdName"]',
        txt_name: '[formcontrolname="ZoneName"]',
        txt_description: '[formcontrolname="ShortDescription"]',
        txt_address: '#mat-input-4',
        map_googlebtn: '[id="googleBtn"]',
        map: '.gm-style > div > div:nth-child(2)',
        btn_saveZonePage1: '.mat-raised-button',
        btn_addorRemoveVehicle: '[data-lang-key="APP_ZONES.ADD_OR_REMOVE"]',
        btn_entryPoint: '[data-lang-key="APP_ZONES.ENTRY_POINTS"]',
        btn_WaitingArea: '[data-lang-key="APP_ZONES.WAITING_AREAS"]',
        btn_btnSaveEP: '[data-lang-key="APP_ZONES.SAVE"]' //save button for entry point and UP


    }

    zoneSchedualeLocators = 
    {
      slotDurationText: '[data-lang-key="APP_EQUIPMENTS.SLOT_DURATION"]',
      allSlotDuration: '.mdc-evolution-chip-set__chips',
      slotDuration10min: '.mat-chip-list-wrapper > :nth-child(2)',
      slotDuration60min: '.mat-chip-list-wrapper > :nth-child(5)',
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
      btn_addIconHourList: '[role="img"]', //contains (add_circle)
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
        cy.get(this.weblocators.txt_name).type(`AutoMation ${random}`);
        cy.get(this.weblocators.txt_description).type('Description Added');
        cy.get(this.weblocators.txt_address).click();
      }

      selectGoogleMapButton()
      {
        cy.wait(1000);
        cy.get(this.weblocators.map_googlebtn).should('be.visible').click({force: true});
  
      }


      //map 
       enterMapLocation()
       {
        cy.wait(4000);
        cy.get(this.weblocators.map).dblclick({force: true});
       }

       enterMap2()
       {
        cy.get(this.weblocators.txt_address).click();
        cy.get('[aria-label="Map"]').then(($map) => {
          // Get the bounding box of the map element
          const rect = $map[0].getBoundingClientRect();
    
          // Calculate the coordinates to click (example: center of the map)
          const x = rect.width / 2; // Adjust as needed for a specific point
          const y = rect.height / 2; // Adjust as needed for a specific point
    
          // Click at the calculated coordinates
          cy.get('[aria-label="Map"]').dblclick(x, y, {force: true});
        });
       }

       clickSaveForSaveZoneFirstPage()
       {

         //scroll up
         cy.get(this.weblocators.txt_description).scrollTo('top', {ensureScrollable: false}) 
         //Save button
         cy.wait(3000)
         cy.get(this.weblocators.btn_btnSaveEP).should('be.visible').click();

       }

      //--------------------- //2nd PAGE --------------------------------

       selectSlotDuration10min()
       {
        cy.get(this.zoneSchedualeLocators.slotDurationText).should('be.visible');
        cy.wait(2000); 
        cy.get(this.zoneSchedualeLocators.allSlotDuration).contains('10').should('be.visible').click({force: true});
       }

       selectSlotDuraiton60min()
       {
         cy.get(this.zoneSchedualeLocators.allSlotDuration).contains('60').should('be.visible').click({force: true});
       }

       selectEndDateCalender()
       {
        //  cy.get(this.zoneSchedualeLocators.endDateFieldClear).clear({force: true});
        //  cy.wait(3000);
        //  cy.get(this.zoneSchedualeLocators.endDateFiled).click({force: true});
         cy.get(this.zoneSchedualeLocators.btn_smallCalenderIconButton).eq(1).click({force: true});
         cy.wait(3000);
         
         //navigate to YEAR section
         cy.get(this.zoneSchedualeLocators.dd_yearSelection).click({force: true});


         //Year Selection
         cy.get(this.zoneSchedualeLocators.calenderContentForYearandMonth).contains('2026').click({force: true});
         cy.get(this.zoneSchedualeLocators.calenderContentForYearandMonth).contains('JAN').click({force: true});
         cy.get(this.zoneSchedualeLocators.calenderContentForDaySelection).contains('17').click({force: true});

         
       }
       selectAvailablilityMondayFromValue()
       {
        //Monday Selection
        cy.get(this.zoneSchedualeLocators.cb_Monday).click();
        //From
        cy.get(this.zoneSchedualeLocators.txt_FROM).then(($fromValue) =>{
          if ($fromValue.val() === '') {  // Checking if the field is empty
            cy.wrap($fromValue).click({force: true});  // Wrap it back to make Cypress commands chainable
            cy.get(this.zoneSchedualeLocators.hourOptionList).contains("06:00").click();
          }
        });
      }

      
      selectAvailablilityMondayTOValue()
      {
              cy.get(this.zoneSchedualeLocators.txt_TO).should('be.visible').then(() => {

                for (let i = 0; i < 2; i++) {
                  cy.get(this.zoneSchedualeLocators.txt_TO).eq(i).click({force: true});
                  cy.get(this.zoneSchedualeLocators.hourOptionList).eq(0).click({ force: true });
                  cy.wait(2000);
                  // Click the add button after selecting the values
                  cy.get(this.zoneSchedualeLocators.btn_addIconHourList).contains('add_circle')
                  .click({ force: true});  
                  
                
                }
              });
      }

      //60 min Time Value section

      selectAvailablilityMondayTOValuefor60min()
      {
              cy.get(this.zoneSchedualeLocators.txt_TO).should('be.visible').then(() => {

                for (let i = 0; i < 1; i++) {
                  cy.get(this.zoneSchedualeLocators.txt_TO).eq(i).click({force: true});
                  cy.get(this.zoneSchedualeLocators.hourOptionList).eq(0).click({ force: true });
                  cy.wait(2000);
                  // Click the add button after selecting the values
                  cy.get(this.zoneSchedualeLocators.btn_addIconHourList).contains('add_circle')
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
        cy.get(this.zoneSchedualeLocators.cb_SundayVerify).should('be.checked');

      }


      
 //save the zone from 2nd page

      saveTheZoneFrom2ndPage() {
        cy.get(this.zoneSchedualeLocators.allSlotDuration)
          .contains('10')
          .scrollTo('top', { ensureScrollable: false });
      
        cy.get(this.zoneSchedualeLocators.btn_saveZonePageLast)
          .scrollTo('bottom', { ensureScrollable: false });
      
        let attempts = 0;
      
        function tryClickSaveButton() {
          if (attempts >= 3) return;
      
          cy.get(this.zoneSchedualeLocators.btn_saveZonePageLast).then(($btn) => {
            if ($btn.is(':enabled')) {
              cy.wrap($btn).click({ force: true });
              cy.log(`Button clicked on attempt ${attempts + 1}`);
              return; // Stop further attempts after successful click
            } else {
              cy.log(`Button not enabled on attempt ${attempts + 1}, retrying...`);
              attempts++;
              cy.wait(3000).then(() => tryClickSaveButton.call(this));
            }
          });
        }
      
        tryClickSaveButton.call(this);
      }
      

      clickAddorRemoveVehicle()
      {
        cy.get(this.weblocators.btn_addorRemoveVehicle).scrollIntoView();
        cy.get(this.weblocators.btn_addorRemoveVehicle).should('be.visible').click();
      }


      //Cretate Entry Point

      clickEntryPoint()
      {
        cy.get(this.weblocators.btn_entryPoint).eq(0).click();
      }

      enterEntryPointName()
      {
        const random = Math.floor(Math.random()*10000)
        cy.get(this.weblocators.txt_name).type(`EntryPoint: ${random}`);
      }

      clickSaveEntryPoint()
      {
        cy.get(this.weblocators.btn_btnSaveEP).click();
      }


    //Create Waiting Area
    
    clickWaitingArea()
    {
      cy.get(this.weblocators.btn_WaitingArea).eq(0).click();

    }
    enterWaitingAreaName()
    {
      const random = Math.floor(Math.random()*10000);
      cy.get(this.weblocators.txt_name).type(`Waiting Area: ${random}`);

    }
  
}


      



