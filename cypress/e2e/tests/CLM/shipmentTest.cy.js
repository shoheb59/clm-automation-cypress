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

  it.skip("SC Client: Verify that the user can create shipments scheduled for Mondays in the upcoming month", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectCustomLeanCard();

    shipmentOBJ.selectAndProcessMondays("2025-08-04", 12, (index, done) => {
      // Your steps after selecting each date:
      shipmentOBJ.clickNextStep1();

      const materialValue = materialData.materialValues[index] || 100;
      shipmentOBJ.selectMaterialByName(materialValue);
      shipmentOBJ.clickNextStep2();

      const vehicleName = vehicleData.vehicleNames[index] || "Trailer pull";
      shipmentOBJ.selectVehicle(vehicleName);

      shipmentOBJ.clickNextStep3();

      const nonBookableEquipName =
        nonBookableEquipData.nonBookableEquipment[index] || "Forklift 01";
      shipmentOBJ.selectNonBookableEquipByName(nonBookableEquipName);

      shipmentOBJ.selectUp();
      shipmentOBJ.selectUPSlotSpecificTimeAndSlot([
        "10:00 - 10:10",
        "11:20 - 11:30",
      ]);

      shipmentOBJ.selectBookableEquipmentFirst();
      shipmentOBJ.select1stand2ndEquipmentSlotSpecificTimeAndSlot(0, [
        "10:00 - 10:10",
        "11:20 - 11:30",
      ]);

      shipmentOBJ.selectBookableEquipmentSecond();
      shipmentOBJ.select1stand2ndEquipmentSlotSpecificTimeAndSlot(1, [
        "10:00 - 10:10",
        "11:20 - 11:30",
      ]);

      shipmentOBJ.clickNextStep4();
      shipmentOBJ.clickOnSitePerson();
      shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
      shipmentOBJ.clickOpenShipmentWithCreateBtn();

      cy.wait(1000).then(() => {
        done(); // Go to the next Monday
      });
    });
  });

  //Pre difine date

  it.skip("SC Client: Create shipments on predefined Dates Lean Card A1", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectCustomLeanCard();

    shipmentOBJ.selectAndProcessDates(
      predefinedDates.predefinedays,
      (index, done) => {
        shipmentOBJ.clickNextStep1();

        //shipmentOBJ.selectRecipient();

        const buildingInfo = buildingData.buildingData[index];
        shipmentOBJ.enterBuidingInfo(
          buildingInfo.buildingName,
          buildingInfo.floorName,
          buildingInfo.laydownArea
        );

        const materialValue = materialData.materialValues[index] || 1;
        shipmentOBJ.selectMaterialByName(materialValue);
        shipmentOBJ.clickNextStep2();

        const vehicleName =
          vehicleData.vehicleNames[index] || "Manual Unloading";
        shipmentOBJ.selectVehicle(vehicleName);

        shipmentOBJ.clickNextStep3();

        const nonBookableEquipName =
          nonBookableEquipData.nonBookableEquipment[index] || "Selbstentladung";
        shipmentOBJ.selectNonBookableEquipByName(nonBookableEquipName);

        const upName = upData.upNames[index] || "UP_A";
        shipmentOBJ.selectUp(upName);

        const timeSlotsForShipment = slotTimesData.upSlotTimes[index];
        shipmentOBJ.selectUPSlotSpecificTimeAndSlot(timeSlotsForShipment);

        const firstEquip =
          bookableEquipData.bookableEquipments[index] || "Lift Haus A1";
        shipmentOBJ.selectBookableEquipmentFirstDynamic(firstEquip);

        const timeSlotsForFirst =
          equipmentSlotTimesData.equipmentSlotTimes[index];
        shipmentOBJ.select1stand2ndEquipmentSlotSpecificTimeAndSlot(
          0,
          timeSlotsForFirst
        );

        // shipmentOBJ.selectBookableEquipmentSecond();
        // shipmentOBJ.select1stand2ndEquipmentSlotSpecificTimeAndSlot(1,["12:00 - 12:10","12:20 - 12:30"]);

        shipmentOBJ.clickNextStep4();
        shipmentOBJ.clickOnSitePerson();
        //shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
        shipmentOBJ.clickAddnewResponsiablebtn();
        const personInfo =
          randomResponsiblePersonData.responsiblePersons[index];
        shipmentOBJ.enterInformationResponsiblePerson(
          personInfo.name,
          personInfo.email,
          personInfo.phone
        );

        shipmentOBJ.clickOpenShipmentWithCreateBtn();

        cy.wait(1000).then(() => {
          done();
        });
      }
    );
  });

  it("SC 3: Verify that User can Create Single shipment Shipment With OPEN Status", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

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
  });

  it("SC 4:  Verify that User can Create Single shipment Shipment With Approve Status", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

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
    shipmentOBJ.clickApproveShipment();
  });

  it("SC 5:  Verify that User can Create a Shipment With Open Status and Update it with Approve Status", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
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

  it("SC 6:  Verify that User can Create a Shipment With Approve Status and Complete that Shipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
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

  it("SC 8: Verify that User can Create a shipment Shipment With ADD NEW MATERIAL", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

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

  it("SC 9: Verify Duplicate Shipment creation", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalenderSaveIt(true);
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();

    shipmentOBJ.selectFirstSlotFromUP().then((isActive) => {
      if (!isActive) {
        cy.log("❌ Slot inactive — discarding shipment");
        discardAndRestartShipment(vehicleName);
      } else {
        cy.log("✅ Slot active — continuing shipment");


        //shipmentOBJ.selectFirstSlotFromUP();
        shipmentOBJ.clickNextStep4();
        shipmentOBJ.clickOnSitePerson();
        shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
        shipmentOBJ.clickShipmentCreateBtn();
        shipmentOBJ.clickOpenShipment();

        createDuplicateShipment(vehicleName);
      }
    });
  });

  //random Caldendar date Selection

  it("SC 10: random Calender Date", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
  });

  it("SC 11: Verify Reject Shipment and Book again", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalenderSaveIt(false);
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    // Step 4

    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();

    shipmentOBJ.selectFirstSlotFromUP().then((isActive) => {
      if (!isActive) {
        cy.log("❌ Slot inactive — discarding shipment");
        discardAndRestartShipment(vehicleName);
      } else {
        cy.log("✅ Slot active — continuing shipment");


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
        shipmentOBJ.selectVehicle(vehicleName);
        shipmentOBJ.clickNextStep3();

        // Step 4 Again
        shipmentOBJ.selectNonBookableequip();
        shipmentOBJ.selectUp();
        //Verify the selection of first slot again
        shipmentOBJ.verifySelectionFirstSlotagainForRejectShipment();
      }
      });
    });

  it("SC 12: Verify Cancel Shipment Booking and Book again", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalenderSaveIt(false); //Checking that its not the duplicate test case. Different date will select
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();

    // Check if the first slot is inactive

    shipmentOBJ.selectSecondSlotFromUPforRejectShipment();
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
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    // Step 4 Again
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    //Verify the selection of first slot again
    shipmentOBJ.verifySelectionFirstSlotagainForRejectShipment();
  });

  it("SC 13: Verify User Can Add Annotation", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
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

  it("SC 14: Verify User Can Add Comment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
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

  it("SC 15: Verify UP shipment Creation wih Logistic Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

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
    shipmentOBJ.selectUp("Automation Test Zone");
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();

    //Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
  });

  it("SC 16: Verify UP shipment Creation wih Logistic Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectCustomWorkingPackage("Working Package C");

    for (let i = 1; i < 10; i++) {

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
      shipmentOBJ.selectUp("Automation Test Zone");
      shipmentOBJ.selectUPslot();
      shipmentOBJ.clickNextStep4();

      //Step 5
      shipmentOBJ.clickOnSitePerson();
      shipmentOBJ.clickAddnewResponsiablebtn();
      //shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
      const personInfo = randomResponsiblePersonData.responsiblePersons[i];
      shipmentOBJ.enterInformationResponsiblePerson(
        personInfo.name,
        personInfo.email,
        personInfo.phone
      );
      shipmentOBJ.clickShipmentCreateBtn();

      //Click Open Shipment On modal
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

  it("SC 17: Verify UP shipment Creation wih Special Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

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
    shipmentOBJ.selectBookableEquipmentFirst(0);
    shipmentOBJ.selectEquipmentSlot();

    shipmentOBJ.selectUp("Automation Test Zone");
    shipmentOBJ.selectUpNameSlot();

    shipmentOBJ.clickNextStep4();

    //Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
  });

  it("SC 18: Verify UP shipment Creation wihout Logistic Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
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

  it("SC 19: Verify UP shipment completion wihout Logistic Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
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

  it("SC 20: Verify UP shipment Creation wih Special Equipment Crane", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    // Step 4

    shipmentOBJ.selectMultipleNonbBookableEquip();
    //select bookable equipemnt Crane
    shipmentOBJ.selectBookableEquipmentCrane();
    shipmentOBJ.selectUp("Automation Test Zone");
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

  it("SC 21: Verify UP shipment Completion wih Special Equipment Crane", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    // Step 4

    shipmentOBJ.selectMultipleNonbBookableEquip();
    //select bookable equipemnt Crane
    shipmentOBJ.selectBookableEquipmentCrane();
    shipmentOBJ.selectUp("Automation Test Zone");
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

  it("SC 22: Verify UP shipment Creation wih two Special Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

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
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();

    //Click Open Shipment On modal
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


  it("SC 23: Verify UP shipment Completion wih two Special Equipment", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

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
    shipmentOBJ.selectBookableEquipmentFirst();
    shipmentOBJ.selectEquipmentSlot();

    shipmentOBJ.selectBookableEquipmentFirstDynamic("Automation 2");
    shipmentOBJ.selectEquipmentSlotTwo();

    shipmentOBJ.selectUp();
    shipmentOBJ.selectUpNameSlot();

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
  it("SC 24: Verify User Update Shipment with Delivery responsible Person", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
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

  it("SC 25: Verify User Update Shipment with Order responsible Person", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
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

  it.skip("SC 26: Create two approve shipment & Try to change one shipment with another from the Step 4", () => {
    //incomplete steps

    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    for (let i = 0; i < 2; i++) {
      shipmentOBJ.clickAddshipment();
      shipmentOBJ.selectDateFromCalenderSaveIt(false); //Checking that its not the duplicate test case. Different date will select
      shipmentOBJ.clickNextStep1();
      shipmentOBJ.selectMaterial();
      shipmentOBJ.clickNextStep2();
      shipmentOBJ.selectVehicle(vehicleName);
      shipmentOBJ.clickNextStep3();

      // Step 4
      shipmentOBJ.selectNonBookableequip();
      shipmentOBJ.selectUp();

      // Check if the first slot is inactive

      shipmentOBJ.selectUPSlotand7thnumberChangeFromSmallCaledericoninNextShipment();
      shipmentOBJ.clickNextStep4();

      // Step 5
      shipmentOBJ.clickOnSitePerson();
      shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
      shipmentOBJ.clickShipmentCreateBtn();

      shipmentOBJ.extractShipmentTextFromModal();

      //Click Open Shipment On modal
      shipmentOBJ.clickApproveShipment();
    }

    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();
    //Cancel Shipment
    // shipmentOBJ.clickCancelShipment();
    // shipmentOBJ.clickDiscardButton();

    //Create Again on the Same Date

    // shipmentOBJ.clickAddshipment();
    // shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    //shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    // shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();
    cy.get(".mat-datepicker-toggle-default-icon.ng-star-inserted").click();

    // Step 4 Again
    // shipmentOBJ.selectNonBookableequip();
    // shipmentOBJ.selectUp();
    // //Verify the selection of first slot again
    // shipmentOBJ.verifySelectionFirstSlotagainForRejectShipment();
  });

  it("SC 27: Verify User Can add Sustainbility Address in Step 5", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.addSustainabilityAddresss("230");
    shipmentOBJ.enterKMDistance("100");
    shipmentOBJ.clickShipmentCreateBtn();

    //Shipment modal to collect shipment name
    shipmentOBJ.extractShipmentTextFromModal();
    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();

    //Order Responsible person -  step 5 Shipment
    shipmentOBJ.navigateStep5();
  });

  it("SC 28: Verify User Can add Favourite Sustainbility Address From Dropdown in Update", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.addSustainabilityAddresss("230");
    shipmentOBJ.checkSelectedAddressFavouriteIcon();
    // shipmentOBJ.clearSustainabilityAddress();
    // shipmentOBJ.selectAddressFromtheFavoritesList();

    //shipmentOBJ.makeAddressFavorite();
    shipmentOBJ.enterKMDistance("100");
    shipmentOBJ.clickShipmentCreateBtn();

    //Shipment modal to collect shipment name
    shipmentOBJ.extractShipmentTextFromModal();
    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();

    //Order Responsible person -  step 5 Shipment
    shipmentOBJ.navigateStep5();
    shipmentOBJ.clearSustainabilityAddress();
    //shipmentOBJ.clearSustainabilityAddress();
    shipmentOBJ.selectAddressFromtheFavoritesList();

    // shipmentOBJ.addSustainabilityAddresss('230');
    // shipmentOBJ.verifyFavoriteAddress();
  });

  it("SC 29: Verify User Can add Sustainbility Address without Distance (KM) ", () => {
    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstWorkingPackage();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectRandomDate();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();

    // Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();

    // Step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.addSustainabilityAddresss("230");
    shipmentOBJ.clickShipmentCreateBtn();

    //Shipment modal to collect shipment name
    shipmentOBJ.extractShipmentTextFromModal();
    //Click Open Shipment On modal
    shipmentOBJ.clickOpenShipment();
    //click the Exact shipment created
    shipmentOBJ.clickExactExtractedShipment();

    //Order Responsible person -  step 5 Shipment
    shipmentOBJ.navigateStep5();
  });
});
