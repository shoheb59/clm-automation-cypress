import { equipMent, equipment } from "../../../pages/CLM/equipmentPage";
import { loginPage } from "../../../pages/loginPage";
import { siteSearchandSelect } from "../../../pages/CLM/siteSearchandSelectPage";
import equipmentTypes from "../../../fixtures/equipmentTypes.json";
//import loginData from '../../fixtures/loginData.json';
//import loginData from '../../../fixtures/loginDataStage.json';
//import loginData from '../../../fixtures/loginDataDev.json'

const loginObj = new loginPage();
const siteSelectionOBJ = new siteSearchandSelect();
const eqOBJ = new equipMent();

describe("Equipment Page Test", () => {
  beforeEach(() => {
    cy.LoginWithCurrentUrlAndSelectSite();
  });

  it("Eq 1: Verify that User can Create non bookable Equipment", () => {
    eqOBJ.clickNavigationButton();
    eqOBJ.navigateMaterial();
    eqOBJ.clickAddEquipment();
    eqOBJ.typeEquipmentId();
    eqOBJ.chooseEquimentIconRandomly();
    eqOBJ.typeEquipmentName();
    eqOBJ.selectDropdownType();
    eqOBJ.enterMaxLoad("500");
    eqOBJ.enterShortDescription("Equipment Non-Bookable");
    eqOBJ.enterAdditionalComment("Our Equipment is non boookable");
    eqOBJ.clickSaveButton();
  });

  it("Eq 2: Verify that User can Create Bookable Equipment", () => {
    eqOBJ.clickNavigationButton();
    eqOBJ.navigateMaterial();
    eqOBJ.clickAddEquipment();
    eqOBJ.typeEquipmentId();
    eqOBJ.chooseEquimentIconRandomly();
    eqOBJ.typeEquipmentName();
    eqOBJ.selectDropdownType();
    eqOBJ.enterMaxLoad("500");
    eqOBJ.enterShortDescription("Equipment Bookable");
    eqOBJ.enterAdditionalComment("Our Equipment is boookable");
    eqOBJ.clickRadioButton();
    eqOBJ.selectPricingModule();
    eqOBJ.clickNextButton();
    eqOBJ.selectSlotDuration15min();
    eqOBJ.selectAvailablilityMondayFromValue();
    eqOBJ.selectAvailablilityMondayTOValue();
    eqOBJ.selectAllOtherDayForAvailability();
    eqOBJ.clickSaveButton();
  });

  it("Eq 3: Verify that User can Create Bookable Equipment", () => {
    eqOBJ.clickNavigationButton();
    eqOBJ.navigateMaterial();
    eqOBJ.clickAddEquipment();
    eqOBJ.typeEquipmentId();
    eqOBJ.chooseEquimentIconRandomly();
    eqOBJ.typeEquipmentName();
    eqOBJ.selectDropdownTypeRandomly();
    eqOBJ.enterMaxLoad("500");
    eqOBJ.enterShortDescription("Equipment Bookable");
    eqOBJ.enterAdditionalComment("Our Equipment is boookable");
    eqOBJ.clickRadioButton();
    eqOBJ.selectPricingModule();
    eqOBJ.clickNextButton();
    cy.ScheduleCreation({
      slotDuration: "30",
      startTime: "07:00",
      endTime: "17:00",
    });
    eqOBJ.clickSaveButton();
  });

  it.only("Eq 4: Verify that User can Create Multiple Bookable Equipment with 30 Min", () => {

    const numberOfEquipments = 5; // 👈 change this to how many you want


     eqOBJ.clickNavigationButton();
     eqOBJ.navigateMaterial();

    for (let i = 0; i < numberOfEquipments; i++) {
      cy.log(`🧩 Creating Equipment #${i + 1}`);

     
      eqOBJ.clickAddEquipment();

      eqOBJ.typeEquipmentId(); // random handled in POM
      eqOBJ.chooseEquimentIconRandomly(); // random handled in POM
      eqOBJ.typeEquipmentName(); // random handled in POM
      eqOBJ.selectDropdownTypeRandomly(); // random handled in POM
      eqOBJ.enterMaxLoad("500");
      eqOBJ.enterShortDescription("Equipment Bookable");
      eqOBJ.enterAdditionalComment("Our Equipment is bookable");
      eqOBJ.clickRadioButton();
      eqOBJ.selectPricingModule();
      eqOBJ.clickNextButton();

      cy.ScheduleCreation({
        slotDuration: "30",
        startTime: "07:00",
        endTime: "17:00",
      });

      eqOBJ.clickSaveButton();
    }
  });

  it("Eq 5: Verify that User can Create Multiple Bookable Equipment with 60 Min", () => {

    const numberOfEquipments = 5; // 👈 change this to how many you want


     eqOBJ.clickNavigationButton();
     eqOBJ.navigateMaterial();

    for (let i = 0; i < numberOfEquipments; i++) {
      cy.log(`🧩 Creating Equipment #${i + 1}`);

     
      eqOBJ.clickAddEquipment();

      eqOBJ.typeEquipmentId(); // random handled in POM
      eqOBJ.chooseEquimentIconRandomly(); // random handled in POM
      eqOBJ.typeEquipmentName(); // random handled in POM
      eqOBJ.selectDropdownTypeRandomly(); // random handled in POM
      eqOBJ.enterMaxLoad("500");
      eqOBJ.enterShortDescription("Equipment Bookable");
      eqOBJ.enterAdditionalComment("Our Equipment is bookable");
      eqOBJ.clickRadioButton();
      eqOBJ.selectPricingModule();
      eqOBJ.clickNextButton();

      cy.ScheduleCreation({
        slotDuration: "60",
        startTime: "07:00",
        endTime: "17:00",
      });

      eqOBJ.clickSaveButton();
    }
  });


 
  it("Eq 3: Verify that User can open any Equipment booking from Equipment Listviw", () => {
    cy.get('[id="view-option"]').eq(0).click();
    cy.get('[data-lang-key="APP_COCKPIT.EQUIPMENT_LIST_VIEW"]').click();
    cy.get('tbody [role="row"]').then(($rows) => {
      if ($rows.length > 0) {
        //cy.get($rows).eq(1).find('td').eq(1).click({force:true});
        cy.ClickFirstShipmentForManage();
        cy.ClickManageButtonAndSelectOption(
          '[data-lang-key="APP_COCKPITS_SIDEBAR.SEE_DETAILS"]'
        );
      } else {
        cy.log("No Equipment found");
      }
    });
  });
});
