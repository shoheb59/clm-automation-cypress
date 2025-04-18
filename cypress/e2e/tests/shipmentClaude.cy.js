import { shipmentPage } from "../../pages/CLM/shipmentPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/CLM/siteSearchandSelectPage";
import loginData from "../../fixtures/loginDataStage.json";

const loginObj = new loginPage();
const siteSelectionOBJ = new siteSearchandSelect();
const shipmentOBJ = new shipmentPage();

describe("Shipment Test Case", () => {
  beforeEach(() => {
    // Login and site selection - common setup for all tests
    cy.log('Performing login and site selection');
    loginObj.openURL();
    loginObj.enterEmail(loginData.SuperAdmin.email);
    loginObj.enterPassword(loginData.SuperAdmin.password);
    loginObj.selectEnglishButton();
    loginObj.btnsubmit();
    loginObj.verifyUrls();
    loginObj.verifyWeatherInfoLoad();
    loginObj.verifySttisticsLoad();
    loginObj.handleModal();

    // Site selection
    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite("Testfeld 2+");
    siteSelectionOBJ.selectSitefromSearch();
  });

  // Helper function for common shipment creation steps
  const createBasicShipment = (dateSelectionMethod = 'random') => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();
    shipmentOBJ.clickAddshipment();
    
    // Date selection based on parameter
    if (dateSelectionMethod === 'random') {
      shipmentOBJ.selectRandomDate();
    } else {
      shipmentOBJ.selectDateFromCalender();
    }
    
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();
  };

  // Helper function for equipment and unloading point selection
  const selectEquipmentAndUP = (equipmentType = 'nonBookable') => {
    if (equipmentType === 'nonBookable') {
      shipmentOBJ.selectNonBookableequip();
    } else if (equipmentType === 'multiple') {
      shipmentOBJ.selectMultipleNonbBookableEquip();
    } else if (equipmentType === 'bookable1') {
      shipmentOBJ.selectMultipleNonbBookableEquip();
      shipmentOBJ.selectBookableEquipmentFirst();
    } else if (equipmentType === 'bookable2') {
      shipmentOBJ.selectMultipleNonbBookableEquip();
      shipmentOBJ.selectBookableEquipmentFirst();
      shipmentOBJ.selectBookableEquipmentSecond();
    }
    
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
  };

  // Helper function for completing the responsible person step
  const completeResponsiblePerson = () => {
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
  };

  it("SC 1: Verify that User Can Create Multiple shipment Shipment", () => {
    for (let i = 0; i < 2; i++) {
      createBasicShipment('random');
      selectEquipmentAndUP();
      shipmentOBJ.clickNextStep4();
      completeResponsiblePerson();
      shipmentOBJ.clickShipmentCreateBtn();
      shipmentOBJ.clickOpenShipment();
      
      // If not the last iteration, start a new shipment
      if (i < 1) {
        shipmentOBJ.clickNavigationButton();
        shipmentOBJ.navigateShipment();
        shipmentOBJ.selectFirstLeanCard();
      }
    }
  });

  it("SC 2: Verify that User can Create Single shipment Shipment With OPEN Status", () => {
    createBasicShipment('random');
    selectEquipmentAndUP();
    shipmentOBJ.clickNextStep4();
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();
  });

  it("SC 3: Verify that User can Create Single shipment Shipment With Approve Status", () => {
    createBasicShipment('random');
    selectEquipmentAndUP();
    shipmentOBJ.clickNextStep4();
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickApproveShipment();
  });

  it("SC 4: Verify that User can Create a Shipment With Open Status and Update it with Approve Status", () => {
    createBasicShipment('random');
    selectEquipmentAndUP();
    shipmentOBJ.clickNextStep4();
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();

    // Extract and track the shipment for later actions
    shipmentOBJ.extractShipmentTextFromModal();
    shipmentOBJ.clickOpenShipment();
    shipmentOBJ.clickExactExtractedShipment();
    shipmentOBJ.clickApproveShipmentbutton();
  });

  it("SC 5: Verify that User can Create a shipment Shipment With Multiple Material", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();
    
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMultipleMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();
    
    selectEquipmentAndUP();
    shipmentOBJ.clickNextStep4();
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();
  });

  it("SC 6: Verify that User can Create a shipment Shipment With ADD NEW MATERIAL", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();
    
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    
    // Add new material
    shipmentOBJ.clickAddNewMaterial();
    shipmentOBJ.enterMaterialName("Automation-Mat");
    shipmentOBJ.selectUnit();
    shipmentOBJ.clickAddBtnSubmitMaterial();
    
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();
    
    selectEquipmentAndUP();
    shipmentOBJ.clickNextStep4();
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();
  });

  it("SC 7: Verify Duplicate Shipment creation", () => {
    // Create first shipment
    createBasicShipment('calendar');
    
    // Select equipment and specific slot
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectFirstSlotFromUP();
    shipmentOBJ.clickNextStep4();
    
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();
    
    // Attempt to create duplicate shipment
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();
    
    // Verify slot is inactive for the duplicate
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.verifySlotInactive();
  });

  it("SC 8: Random Calender Date Selection", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
  });

  it("SC 9: Verify Reject Shipment and Book again", () => {
    // Create shipment
    createBasicShipment('calendar');
    
    // Select specific slot
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectFirstSlotFromUP();
    shipmentOBJ.clickNextStep4();
    
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    
    // Track and reject the shipment
    shipmentOBJ.extractShipmentTextFromModal();
    shipmentOBJ.clickOpenShipment();
    shipmentOBJ.clickExactExtractedShipment();
    shipmentOBJ.rejectShipment();
    
    // Verify slot can be rebooked
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();
    
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.verifySelectionFirstSlotagainForRejectShipment();
  });

  it("SC 10: Verify Cancel Shipment and Book again", () => {
    // Create shipment
    createBasicShipment('calendar');
    
    // Select specific slot
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectFirstSlotFromUP();
    shipmentOBJ.clickNextStep4();
    
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    
    // Track and cancel the shipment
    shipmentOBJ.extractShipmentTextFromModal();
    shipmentOBJ.clickApproveShipment();
    shipmentOBJ.clickExactExtractedShipment();
    shipmentOBJ.clickCancelShipment();
    shipmentOBJ.clickDiscardButton();
    
    // Verify slot can be rebooked
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();
    
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.verifySelectionFirstSlotagainForRejectShipment();
  });

  it("SC 11: Verify User Can Add Annotation", () => {
    // Create shipment
    createBasicShipment('random');
    selectEquipmentAndUP();
    shipmentOBJ.clickNextStep4();
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    
    // Add annotation
    shipmentOBJ.extractShipmentTextFromModal();
    shipmentOBJ.clickOpenShipment();
    shipmentOBJ.clickExactExtractedShipment();
    shipmentOBJ.clickOverviewStep6();
    shipmentOBJ.clickAddAnotationBtn();
    shipmentOBJ.clickSaveAnnotationbtn();
  });

  it("SC 12: Verify User Can Add Comment", () => {
    // Create shipment
    createBasicShipment('random');
    selectEquipmentAndUP();
    shipmentOBJ.clickNextStep4();
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    
    // Add comment
    shipmentOBJ.extractShipmentTextFromModal();
    shipmentOBJ.clickOpenShipment();
    shipmentOBJ.clickExactExtractedShipment();
    shipmentOBJ.clickOverviewStep6();
    shipmentOBJ.enterShipmentCommentStep6();
  });

  it("SC 13: Verify UP shipment Completion with Logistic Equipment", () => {
    // Create shipment with multiple equipment
    createBasicShipment('random');
    
    shipmentOBJ.selectMultipleNonbBookableEquip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();
    
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();
  });

  it("SC 14: Verify UP shipment Completion with One Special Equipment", () => {
    // Create shipment with bookable equipment
    createBasicShipment('random');
    
    shipmentOBJ.selectMultipleNonbBookableEquip();
    shipmentOBJ.selectBookableEquipmentFirst();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.selectEquipmentSlot();
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.clickNextStep4();
    
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();
  });

  it.only("SC 15: Verify UP shipment Completion with two Special Equipment", () => {
    // Create shipment with multiple bookable equipment
    createBasicShipment('random');
    
    shipmentOBJ.selectMultipleNonbBookableEquip();
    shipmentOBJ.selectBookableEquipmentFirst();
    shipmentOBJ.selectBookableEquipmentSecond();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.selectEquipmentSlot();
    shipmentOBJ.selectEquipmentSlotTwo(); 
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.clickNextStep4();
    
    completeResponsiblePerson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();
  });
});