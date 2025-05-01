import { shipmentPage } from "../../pages/CLM/shipmentPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
//import loginData from "../../fixtures/loginDataStage.json";
import loginData from "../../fixtures/loginDataStage.json"

const loginObj = new loginPage();
const siteSelectionOBJ = new siteSearchandSelect();
const shipmentOBJ = new shipmentPage();

describe("Shipment Test Case", () => {
  beforeEach(() => {
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

  // before(() => {               //Use it when you will login one time, will create multiple Shipment. So it will not login everytime.
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






  it("SC 1: Verify that User Can Create Multiple shipment Shipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();
    for (let i = 1; i < 2; i++) {
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


  it.only("SC Younas: Verify that User Can Create Multiple Shipments for Mondays", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectCustomLeanCard();
   
  
    shipmentOBJ.selectAndProcessMondays("2025-06-03", 2, (index, done) => {
      // Your steps after selecting each date:
      shipmentOBJ.clickNextStep1();
      shipmentOBJ.selectMaterialByName();
      shipmentOBJ.clickNextStep2();
      shipmentOBJ.selectVehicle();
      shipmentOBJ.clickNextStep3();
      shipmentOBJ.selectNonBookableEquipByName();

      shipmentOBJ.selectUp();
      shipmentOBJ.selectUPSlotSpecificTimeAndSlot(["13:00 - 13:10","13:20 - 13:30"]);

      shipmentOBJ.selectBookableEquipmentFirst();
      shipmentOBJ.select1stand2ndEquipmentSlotSpecificTimeAndSlot(0,["13:00 - 13:10","13:20 - 13:30"]);

      shipmentOBJ.selectBookableEquipmentSecond();
      shipmentOBJ.select1stand2ndEquipmentSlotSpecificTimeAndSlot(1,["13:00 - 13:10","13:20 - 13:30"]);

      shipmentOBJ.clickNextStep4();
      shipmentOBJ.clickOnSitePerson();
      shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
      shipmentOBJ.clickOpenShipmentWithCreateBtn();
  
    
      cy.wait(1000).then(() => {
        done(); // Go to the next Monday
      });
    });
    
    

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


  it("SC 5:  Verify that User can Create a Shipment With Approve Status and Complete that Shipment", () => {
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
    //Click approve Shipment On modal
    shipmentOBJ.clickApproveShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //Complete the Shipment
    shipmentOBJ.clickCompleteShipmentButton();
  });

  it("SC 6: Verify that User can Create a shipment Shipment With Multiple Material", () => {
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

  it("SC 7: Verify that User can Create a shipment Shipment With ADD NEW MATERIAL", () => {
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

  it("SC 8: Verify Duplicate Shipment creation", () => {
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

    // Step 4 Check if the first slot is inactive
    cy.wrap(shipmentOBJ.selectFirstSlotFromUP()).then((slotIsActive) => {
      if (!slotIsActive) {
        return; // Exit early, skip Step 4, Step 5, and restart
      }
    
    //shipmentOBJ.selectFirstSlotFromUP();
    shipmentOBJ.clickNextStep4();
   

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickOpenShipment();
    
    //Start again

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
     
  });

  //random Caldendar date Selection

  it("SC 9: random Calender Date", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
  });

  it("SC 10: Verify Reject Shipment and Book again", () => {
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

    cy.wrap(shipmentOBJ.selectFirstSlotFromUP()).then((slotIsActive) => {
      if (!slotIsActive) {
        return; // Exit early, skip Step 4, Step 5, and restart
      }

    // Check if the first slot is inactive
    //shipmentOBJ.selectFirstSlotFromUP();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Collect the Shipment text for the next search

    // Extract shipment text from modal
    shipmentOBJ.extractShipmentTextFromModal();
   

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

  });

  

  it("SC 11: Verify Cancel Shipment Version and Book again", () => {
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

    shipmentOBJ.selectSecondSlotFromUPforRejectShipment() 
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


  it("SC 12: Verify User Can Add Annotation", () => {
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

  it("SC 13: Verify User Can Add Comment", () => {
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

  it("SC 14: Verify UP shipment Creation wih Logistic Equipment", () => {
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

  it("SC 15: Verify UP shipment Creation wih Special Equipment", () => {
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

  it("SC 16: Verify UP shipment Creation wihout Logistic Equipment", () => {
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

  it("SC 17: Verify UP shipment completion wihout Logistic Equipment", () => {
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

    
    //Shipment modal to collect shipment name
    shipmentOBJ.extractShipmentTextFromModal();
    //Click approve Shipment On modal
    shipmentOBJ.clickApproveShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //Complete the Shipment
    shipmentOBJ.clickCompleteShipmentCraneButton();
  });

  it("SC 18: Verify UP shipment Creation wih Special Equipment Crane", () => {
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
   
    shipmentOBJ.selectMultipleNonbBookableEquip();
    //select bookable equipemnt Crane
    shipmentOBJ.selectBookableEquipmentCrane();
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


  it("SC 19: Verify UP shipment Completion wih Special Equipment Crane", () => {
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
   
    shipmentOBJ.selectMultipleNonbBookableEquip();
    //select bookable equipemnt Crane
    shipmentOBJ.selectBookableEquipmentCrane();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.selectEquipmentSlot();
    shipmentOBJ.selectUpNameSlot();
    shipmentOBJ.clickNextStep4();

    //Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    
    
    //Shipment modal to collect shipment name
    shipmentOBJ.extractShipmentTextFromModal();
    //Click approve Shipment On modal
    shipmentOBJ.clickApproveShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //Complete the Shipment
    shipmentOBJ.clickCompleteShipmentCraneButton();

});

  it("SC 20: Verify UP shipment Creation wih two Special Equipment", () => {
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

  it ("SC 21: Verify UP shipment Completion wih two Special Equipment", () => {
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


     //Shipment modal to collect shipment name
     shipmentOBJ.extractShipmentTextFromModal();
     //Click approve Shipment On modal
     shipmentOBJ.clickApproveShipment();
     //click the Exact shipment created
     shipmentOBJ.clickExactExtractedShipment();
     //Complete the Shipment
     shipmentOBJ.clickCompleteShipmentCraneButton();

  
  });
  it("SC 22: Verify User Update Shipment with Delivery responsible Person", () => {
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

    //Order Responsible person -  step 5 Shipment
    shipmentOBJ.navigateStep5();
    shipmentOBJ.clickAddDeliveryResponsiablebtn();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    
  });




  it("SC 23: Verify User Update Shipment with Order responsible Person", () => {
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

    //Order Responsible person -  step 5 Shipment
    shipmentOBJ.navigateStep5();
    shipmentOBJ.clickAddOrderResponsiablebtn();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    
  });


});
