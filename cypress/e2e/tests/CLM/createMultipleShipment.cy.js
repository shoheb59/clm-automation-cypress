import { shipmentPage } from "../../../pages/CLM/shipmentPage";
import { loginPage } from "../../../pages/loginPage";
import { siteSearchandSelect } from "../../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
// import loginData from "../../fixtures/loginDataDev.json";
// import loginData from "../../../fixtures/loginDataStage.json";
import predefinedDates from "../../../fixtures/shipmentDate.json";
import materialData from "../../../fixtures/materialValues.json";
import vehicleData from "../../../fixtures/vehicleData.json";
import nonBookableEquipData from "../../../fixtures/nonBookableEquip.json";
import upData from "../../../fixtures/upData.json";
import slotTimesData from "../../../fixtures/slotTimes.json";
import bookableEquipData from "../../../fixtures/bookableEquipData.json";
import equipmentSlotTimesData from "../../../fixtures/equipmentSlotTimes.json";
//import responsiblePersonData from "../../fixtures/responsiblePersonsNew.json";
import randomResponsiblePersonData from "../../../fixtures/randomResponsiblePerson.json";
import buildingData from "../../../fixtures/buildingInfo.json";
import { createDuplicateShipment, discardAndRestartShipment } from "../../../support/helper/shipmentHelper";
import { getLoginDataByUrl } from "../../../support/utils/getLoginData";
import { tags } from "allure-cypress";

const loginObj = new loginPage();
const siteSelectionOBJ = new siteSearchandSelect();
const shipmentOBJ = new shipmentPage();

describe("Shipment Test Case", () => {
  beforeEach(() => {
    cy.LoginWithCurrentUrlAndSelectSite();
  });

  const vehicleName = vehicleData.vehicleNames[0] || "Manual Unloading";

  it("SC 1: Verify that User Can Create Multiple shipment Shipment with New Add Material",{tags: '@client'}, () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectCustomWorkingPackage("Working Package B");
    for (let i = 1; i < 10; i++) {
      shipmentOBJ.clickAddshipment();
      shipmentOBJ.selectRandomDate();
      shipmentOBJ.clickNextStep1();

      shipmentOBJ.clickAddNewMaterial();
      shipmentOBJ.enterMaterialName("Automation-Mat");
      shipmentOBJ.selectUnit();
      shipmentOBJ.clickAddBtnSubmitMaterial();
      shipmentOBJ.selectMaterial();

      shipmentOBJ.clickNextStep2();
      shipmentOBJ.selectVehicle(vehicleName);
      shipmentOBJ.clickNextStep3();
      //Step 4
      shipmentOBJ.selectNonBookableequip();
      shipmentOBJ.selectUp();
      shipmentOBJ.selectUPslot();
      shipmentOBJ.clickNextStep4();

      //step 5
      shipmentOBJ.clickOnSitePerson();
      //shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();

      shipmentOBJ.clickAddnewResponsiablebtn();
      const personInfo = randomResponsiblePersonData.responsiblePersons[i];
      shipmentOBJ.enterInformationResponsiblePerson(
        personInfo.name,
        personInfo.email,
        personInfo.phone
      );
      shipmentOBJ.clickShipmentCreateBtn();
      // shipmentOBJ.clickOpenShipment();
      // shipmentOBJ.clickApproveShipment();

      // 🔹 Randomly choose between "Open" or "Approve"
      const randomAction = Math.random() < 0.5 ? "approve" : "open";

      if (randomAction === "open") {
        cy.log(`Shipment ${i}: Opening shipment`);
        shipmentOBJ.clickOpenShipment();
      } else {
        cy.log(`Shipment ${i}: Approving shipment`);
        shipmentOBJ.clickApproveShipment();
      }
    }
  });

   it("SC 2: Verify that User Can Create Multiple shipment Shipment with New existing Material", {tags: '@client'}, () => {
      shipmentOBJ.clickNavigationButton();
      shipmentOBJ.navigateShipment();
      shipmentOBJ.selectFirstWorkingPackage();
      for (let i = 1; i < 2; i++) {
        shipmentOBJ.clickAddshipment();
        shipmentOBJ.selectRandomDate();
        shipmentOBJ.clickNextStep1();
        shipmentOBJ.selectMaterial();
        shipmentOBJ.clickNextStep2();
        shipmentOBJ.selectVehicle(vehicleName);
        shipmentOBJ.clickNextStep3();
        //Step 4
        shipmentOBJ.selectNonBookableequip();
        shipmentOBJ.selectUp();
        shipmentOBJ.selectUPslot();
        shipmentOBJ.clickNextStep4();
  
        //step 5
        shipmentOBJ.clickOnSitePerson();
        shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
        shipmentOBJ.clickShipmentCreateBtn();
        shipmentOBJ.clickOpenShipment();
      }
    });

    it("SC 7: Verify that User can Create a shipment Shipment With Multiple Material", {tags: '@client'}, () => {
        shipmentOBJ.clickNavigationButton();
        shipmentOBJ.navigateShipment();
        shipmentOBJ.selectFirstWorkingPackage();
    
        shipmentOBJ.clickAddshipment();
        shipmentOBJ.selectRandomDate();
        shipmentOBJ.clickNextStep1();
        shipmentOBJ.selectMultipleMaterial();
        shipmentOBJ.clickNextStep2();
        shipmentOBJ.selectVehicle(vehicleName);
        shipmentOBJ.clickNextStep3();
        //Step 4
        shipmentOBJ.selectNonBookableequip();
        shipmentOBJ.selectUp();
        shipmentOBJ.selectUPslot();
        shipmentOBJ.clickNextStep4();
    
        //step 5
        shipmentOBJ.clickOnSitePerson();
        shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
        shipmentOBJ.clickShipmentCreateBtn();
        shipmentOBJ.clickOpenShipment();
      });

  
  

  

  it("SC 23: Verify multiple UP shipment Creation wih two Special Equipment",{tags: '@client'}, () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    //shipmentOBJ.selectFirstWorkingPackage();
    shipmentOBJ.selectCustomWorkingPackage("A -");

    for (let i = 0; i < 10; i++) {

      shipmentOBJ.clickAddshipment();
      shipmentOBJ.selectRandomDate();
      shipmentOBJ.clickNextStep1();
      shipmentOBJ.selectMaterial();
      shipmentOBJ.clickNextStep2();
      shipmentOBJ.selectVehicle(vehicleName);
      shipmentOBJ.clickNextStep3();

      // Step 4
      //shipmentOBJ.selectNonBookableequip();
      shipmentOBJ.selectMultipleNonbBookableEquip();
      //select bookable
      shipmentOBJ.selectBookableEquipmentFirstDynamic("Equipment", 0);
      shipmentOBJ.selectEquipmentSlot();

      shipmentOBJ.selectBookableEquipmentFirstDynamic("Equipment", 1);
      shipmentOBJ.selectEquipmentSlotTwo();

      shipmentOBJ.selectUp();
      shipmentOBJ.selectUpNameSlot();

      shipmentOBJ.clickNextStep4();

      //Step 5
      shipmentOBJ.clickOnSitePerson()
      shipmentOBJ.clickAddnewResponsiablebtn();
      const personInfo = randomResponsiblePersonData.responsiblePersons[i];
      shipmentOBJ.enterInformationResponsiblePerson(
        personInfo.name,
        personInfo.email,
        personInfo.phone
      );
      shipmentOBJ.clickShipmentCreateBtn();
      // 🔹 Randomly choose between "Open" or "Approve"
      const randomAction = Math.random() < 0.5 ? "approve" : "open";

      if (randomAction === "open") {
        cy.log(`Shipment ${i}: Opening shipment`);
        shipmentOBJ.clickOpenShipment();
      } else {
        cy.log(`Shipment ${i}: Approving shipment`);
        shipmentOBJ.clickApproveShipment();
      }

    }
  });


 


});
