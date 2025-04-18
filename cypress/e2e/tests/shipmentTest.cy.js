import { shipmentPage } from "../../pages/CLM/shipmentPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
//import loginData from "../../fixtures/loginDataStage.json";
import loginData from "../../fixtures/loginDataDev.json"

const loginObj = new loginPage();
const siteSelectionOBJ = new siteSearchandSelect();
const shipmentOBJ = new shipmentPage();

describe("Shipment Test Case", () => {
  // beforeEach(() => {
  //   loginObj.openURL();
  //   loginObj.enterEmail(loginData.SuperAdmin.email);
  //   loginObj.enterPassword(loginData.SuperAdmin.password);
  //   loginObj.selectEnglishButton();
  //   loginObj.btnsubmit();
  //   loginObj.verifyUrls();
  //   loginObj.verifyWeatherInfoLoad();
  //   loginObj.verifySttisticsLoad();
  //   loginObj.handleModal();
  //   // Continue with site selection only after modal handling is complete

  //   //site selection

  //   siteSelectionOBJ.clickDropDown();
  //   siteSelectionOBJ.typeSite("Testfeld 2+");
  //   siteSelectionOBJ.selectSitefromSearch();
  // });

  before(() => {               //Use it when you will login one time, will create multiple Shipment. So it will not login everytime.
    loginObj.openURL();
    loginObj.enterEmail(loginData.SuperAdmin.email);
    loginObj.enterPassword(loginData.SuperAdmin.password);
    loginObj.selectEnglishButton();
    loginObj.btnsubmit();
    loginObj.verifyUrls();
    loginObj.verifyWeatherInfoLoad();
    loginObj.verifySttisticsLoad();
    loginObj.handleModal();
    // Continue with site selection only after modal handling is complete

    //site selection

    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite("Testfeld 2+");
    siteSelectionOBJ.selectSitefromSearch();
  });






  it.only("SC 1: Verify that User Can Create Multiple shipment Shipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();
    for (let i = 1; i <= 400; i++) {
      shipmentOBJ.clickAddshipment();
      shipmentOBJ.selectRandomDate();
      shipmentOBJ.clickNextStep1();
      shipmentOBJ.selectMaterial();
      shipmentOBJ.clickNextStep2();
      shipmentOBJ.selectVehicle();
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

  it("SC 2: Verify that User can Create Single shipment Shipment With OPEN Status", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
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

  it("SC 3:  Verify that User can Create Single shipment Shipment With Approve Status", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
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
    shipmentOBJ.clickApproveShipment();
  });

  it("SC 4:  Verify that User can Create a Shipment With Open Status and Update it with Approve Status", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Shipment modal to collect shipment name
    shipmentOBJ.extractShipmentTextFromModal();
    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //reject Shipment
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

  it("SC 6: Verify that User can Create a shipment Shipment With ADD NEW MATERIAL", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    //Step 2
    shipmentOBJ.clickAddNewMaterial();
    shipmentOBJ.enterMaterialName("Automation-Mat");
    shipmentOBJ.selectUnit();
    shipmentOBJ.clickAddBtnSubmitMaterial();

    shipmentOBJ.selectMaterial();

    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
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

  it("SC 7: Verify Duplicate Shipment creation", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalenderSaveIt(true);
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();

    // Check if the first slot is inactive
    shipmentOBJ.selectFirstSlotFromUP();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();

    // Create Again on the Same Date
    // shipmentOBJ.clickNavigationButton();
    // shipmentOBJ.navigateShipment();
    // shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4 Again
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();

    //Slot Inactive Verification
    shipmentOBJ.verifySlotInactive();
  });

  //random Caldendar date Selection

  it("SC 8: random Calender Date", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
  });

  it("SC 9: Verify Reject Shipment and Book again", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalenderSaveIt(false);
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();

    // Check if the first slot is inactive
    shipmentOBJ.selectFirstSlotFromUP();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Collect the Shipment text for the next search
    // let shipmentText; // Declare a variable outside

    // Extract shipment text from modal
    shipmentOBJ.extractShipmentTextFromModal();
    // cy.get('#mat-mdc-dialog-2')
    //   .find('[data-lang-key="APP_SHIPMENTS.SHIPMENT_UPDATED_MODAL_ONE,APP_SHIPMENTS.SHIPMENT_CREATED_MODAL_TWO"]')
    //   .invoke('text')
    //   .then((fullText) => {
    //       shipmentText = fullText.match(/:\s*(.*?)\s*has/)[1]; // Extract text between ":" and "has"
    //       cy.wrap(shipmentText).as('shipmentText'); // Save it as an alias
    //   });

    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //reject Shipment
    shipmentOBJ.rejectShipment();

    //Create Again on the Same Date

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4 Again
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    //Verify the selection of first slot again
    shipmentOBJ.verifySelectionFirstSlotagainForRejectShipment();
  });

  

  it("SC 10: Verify Cancel Shipment Version and Book again", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalenderSaveIt(false); //Checking that its not the duplicate test case. Different date will select
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();

    // Check if the first slot is inactive
    shipmentOBJ.selectFirstSlotFromUP();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    shipmentOBJ.extractShipmentTextFromModal();

    //Click Open Shipment On modal
    shipmentOBJ.clickApproveShipment();

    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //Cancel Shipment
    shipmentOBJ.clickCancelShipment();
    shipmentOBJ.clickDiscardButton();

    //Create Again on the Same Date

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4 Again
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    //Verify the selection of first slot again
    shipmentOBJ.verifySelectionFirstSlotagainForRejectShipment();
  });


  it("SC 11: Verify User Can Add Annotation", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Shipment modal to collect shipment name
    shipmentOBJ.extractShipmentTextFromModal();
    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //Overview step 6 Shipment
    shipmentOBJ.clickOverviewStep6();
    shipmentOBJ.clickAddAnotationBtn();
    shipmentOBJ.clickSaveAnnotationbtn();
  });

  it("SC 12: Verify User Can Add Comment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Shipment modal to collect shipment name
    shipmentOBJ.extractShipmentTextFromModal();
    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //Overview step 6 Shipment
    shipmentOBJ.clickOverviewStep6();
    shipmentOBJ.enterShipmentCommentStep6();
  });

  it("SC 13: Verify UP shipment Completion wih Logistic Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    //shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectMultipleNonbBookableEquip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();

    //Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
  });

  it("SC 13: Verify UP shipment Completion wih Special Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    //shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectMultipleNonbBookableEquip();
    //select bookable
    shipmentOBJ.selectBookableEquipmentFirst();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.selectEquipmentSlot();
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.clickNextStep4();

    //Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
  });
  it("SC 14: Verify UP shipment Completion wih two Special Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();

    // Step 4
    //shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectMultipleNonbBookableEquip();
    //select bookable
    shipmentOBJ.selectBookableEquipmentFirst();
    shipmentOBJ.selectBookableEquipmentSecond();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.selectEquipmentSlot();
    shipmentOBJ.selectEquipmentSlotTwo(); 
    shipmentOBJ.selectUpNameSlot();

    shipmentOBJ.clickNextStep4();

    //Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
  });
});
