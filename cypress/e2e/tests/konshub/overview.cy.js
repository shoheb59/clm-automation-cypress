import { KonshubNavigationPage } from "../../../pages/KonsHub/konsubNavigationPage";
import { KonshubShipment } from "../../../pages/KonsHub/konshubShipmentCreationPage";
import { loginPage } from "../../../pages/loginPage";
import { siteSearchandSelect } from "../../../pages/CLM/siteSearchandSelectPage";
import { DeliveriesPage } from "../../../pages/KonsHub/deliveriestabPage";
import { OverviewPage } from "../../../pages/KonsHub/overviewPage";
//import loginData from '../../fixtures/loginData.json';
// import loginData from '../../../fixtures/loginDataStage.json';
import { getLoginDataByUrl } from "../../../support/utils/getLoginData";
import { generateRandomZoneData } from "../../../support/utils/getLoginData";
import { genearateRandomResponsiblePerson } from "../../../support/utils/getLoginData";
import FilePaths from '../../../support/imgUpload'


const loginObj = new loginPage();
const siteSelectionOBJ = new siteSearchandSelect();
const konsubshipOBJ = new KonshubNavigationPage();
const konsubShipmentOBJ = new KonshubShipment();
const deliveriesOBJ = new DeliveriesPage();
const overviewOBj = new OverviewPage();



describe("Konshub Test Case", () => {
  beforeEach(function () {
        cy.LoginWithCurrentUrlAndSelectSite();

    
   

        //konshub navigation
        konsubshipOBJ.clickNavigationButton();
        konsubshipOBJ.navigateToKonshub();
        //konsubshipOBJ.selectLanguage();

        //
        konsubShipmentOBJ.clickNavButton("DASHBOARD");
        konsubShipmentOBJ.clickNavButton("OVERVIEW");
      });
    
  

  it("OV 1: Create an 10 min UP with OSM Map", () => {
    const { zoneId, zoneName } = generateRandomZoneData();  
    konsubShipmentOBJ.clickNavButton("DASHBOARD");
    konsubShipmentOBJ.clickNavButton("OVERVIEW");
    overviewOBj.clickAddNewZone();
    overviewOBj.enterZoneId(zoneId);
    overviewOBj.enterZoneName(zoneName);
    cy.SelectZoneAddressFromMap();
    overviewOBj.clickNextButtonForSchedule();
    cy.ScheduleCreation({slotDuration: '10'});
    cy.PlanDateSelection('1')
    overviewOBj.clickNextButtonForSchedule();

}); 


 it("OV 2: Create an 15 min UP with OSM Map", () => {
    const { zoneId, zoneName } = generateRandomZoneData();  
    konsubShipmentOBJ.clickNavButton("DASHBOARD");
    konsubShipmentOBJ.clickNavButton("OVERVIEW");
    overviewOBj.clickAddNewZone();
    overviewOBj.enterZoneId(zoneId);
    overviewOBj.enterZoneName(zoneName);
    cy.SelectZoneAddressFromMap();
    overviewOBj.clickNextButtonForSchedule();
    cy.ScheduleCreation({slotDuration: '15'});
    cy.PlanDateSelection('1')
    overviewOBj.clickNextButtonForSchedule();

});


it("OV 3: Create an 20 min UP with OSM Map", () => {
    const { zoneId, zoneName } = generateRandomZoneData();  
    konsubShipmentOBJ.clickNavButton("DASHBOARD");
    konsubShipmentOBJ.clickNavButton("OVERVIEW");
    overviewOBj.clickAddNewZone();
    overviewOBj.enterZoneId(zoneId);
    overviewOBj.enterZoneName(zoneName);
    cy.SelectZoneAddressFromMap();
    overviewOBj.clickNextButtonForSchedule();
    cy.ScheduleCreation({slotDuration: '20'});
    cy.PlanDateSelection('1')
    overviewOBj.clickNextButtonForSchedule();

});


it("OV 4: Create an 30 min UP with OSM Map", () => {
    const { zoneId, zoneName } = generateRandomZoneData();  
    konsubShipmentOBJ.clickNavButton("DASHBOARD");
    konsubShipmentOBJ.clickNavButton("OVERVIEW");
    overviewOBj.clickAddNewZone();
    overviewOBj.enterZoneId(zoneId);
    overviewOBj.enterZoneName(zoneName);
    cy.SelectZoneAddressFromMap();
    overviewOBj.clickNextButtonForSchedule();
    cy.ScheduleCreation({slotDuration: '30'});
    cy.PlanDateSelection('1')
    overviewOBj.clickNextButtonForSchedule();

});

it.only("OV 5: Create an 60 min UP with OSM Map", () => {
    const { zoneId, zoneName } = generateRandomZoneData();  
    konsubShipmentOBJ.clickNavButton("DASHBOARD");
    konsubShipmentOBJ.clickNavButton("OVERVIEW");
    overviewOBj.clickAddNewZone();
    overviewOBj.enterZoneId(zoneId);
    overviewOBj.enterZoneName(zoneName);
    cy.SelectZoneAddressFromMap();
    overviewOBj.clickNextButtonForSchedule();
    cy.ScheduleCreation({slotDuration: '60'});
    cy.PlanDateSelection('1')
    overviewOBj.clickNextButtonForSchedule();

})

it('OV 6: Add a small truck Vehicle',()=>{
  const { vehicleId, vehicleName} = generateRandomZoneData();
  overviewOBj.addNewVehicle('small',vehicleId, vehicleName);


})

it('OV 7: Add a Medium truck Vehicle',()=>{
  const { vehicleId, vehicleName} = generateRandomZoneData();
  overviewOBj.addNewVehicle('medium',vehicleId, vehicleName);


})
it('OV 8: Add a Big truck Vehicle',()=>{
  const { vehicleId, vehicleName} = generateRandomZoneData();
  overviewOBj.addNewVehicle('big',vehicleId, vehicleName);
});

it('OV 9: Add a Zug Vehicle',()=>{
  const { vehicleId, vehicleName} = generateRandomZoneData();
  overviewOBj.addNewVehicle('zug',vehicleId, vehicleName);
});


it('OV 10: Edit Zone Name and Save it',()=>{
  const {zoneName} = generateRandomZoneData();
  cy.HoveAllElementandEdit(overviewOBj.overviewPageLocator.allSchedule,overviewOBj.overviewPageLocator.editSchedule)
  overviewOBj.enterZoneName(zoneName);
  overviewOBj.clickNextButtonForSchedule();
  overviewOBj.clickNextButtonForSchedule();
})

it('OV 11: Edit Vehicle Name and Save it',()=>{
  const {vehicleName} = generateRandomZoneData();
  cy.HoveAllElementandEdit(overviewOBj.overviewPageLocator.allVehicle, overviewOBj.overviewPageLocator.editVehicle);
  overviewOBj.enterVehicleName(vehicleName);
  overviewOBj.saveVehicle();

})
it('OV 12: Add a New Storage',()=>{
  overviewOBj.addNewStorage();
  

})

it('OV 13: Add 5 New Storage',()=>{
  for (let i = 0; i <= 5; i++) {
  overviewOBj.addNewStorage();
  }
  

})

it('OV 14: Edit a Storage',()=>{
  cy.HoveAllElementandEdit(overviewOBj.overviewPageLocator.allStorage, overviewOBj.overviewPageLocator.editStorage);
  overviewOBj.enterStorageName();
  overviewOBj.enterStorageRow();
  overviewOBj.enterStoragePitchCapacity();
  overviewOBj.saveStorage();
  

})
 

it('OV 15: Upload a Document', () => {
  // Ensure the uploader is visible
  overviewOBj.clickAddDocument();
  cy.UploadFile(overviewOBj.overviewPageLocator.uploadDocument,FilePaths.PDF_PATH );
  overviewOBj.enterDocumentName('PdfTest.pdf');
  overviewOBj.enterDocDescription('This is a test document for Konshub overview page.');
  overviewOBj.selectDocumentCoverPage();
  overviewOBj.clickSaveDocument();
  overviewOBj.verifyDocumentUpload('PdfTest.pdf');
});


it('OV 16: Upload an Image Photos Section',()=>{
  cy.UploadFile(overviewOBj.overviewPageLocator.uploadImage,FilePaths.KONSHUB_IMG_PATH );
  overviewOBj.clickSaveImageInphontos();
 
})

it('OV 17: Remove an Image Photos Section',()=>{
 overviewOBj.clickRemoveButton();
 overviewOBj.clickRemoveButtonConfirm();
 overviewOBj.clickSaveImageInphontos();
})

it('Ov 18: Add a Responsible Person',()=>{
  const responsiblePersonData = genearateRandomResponsiblePerson();
  overviewOBj.clickAddNewResponsiblePerson();
  overviewOBj.enterResponsiblePersonName(responsiblePersonData.responsiblePersonName);
  overviewOBj.enterResponsiblePersonEmail(responsiblePersonData.responsiblePersonEmail);
  overviewOBj.enterResponsiblePersonPhone(responsiblePersonData.responsiblePersonPhone);
  overviewOBj.saveResponsiblePerson();
  
});





});
