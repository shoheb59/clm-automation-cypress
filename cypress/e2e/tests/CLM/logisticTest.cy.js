import { logisticZone } from "../../../pages/CLM/logisticeZonePage";
import { loginPage } from "../../../pages/loginPage";
import { siteSearchandSelect } from "../../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../../fixtures/loginDataStage.json';
//import loginData from '../../../fixtures/loginDataDev.json'

const loginObj  = new loginPage();
const logisticOBJ = new logisticZone();
const siteSelectionOBJ =  new siteSearchandSelect();


describe('Logistic Page Test Scenario', () => {


    beforeEach(() => {

        cy.LoginWithCurrentUrlAndSelectSite();

    });

    it('LZ-1: Create Zone with 10 min With OSM MAP', () =>{
      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      cy.SelectZoneAddressFromMap();
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      logisticOBJ.selectSlotDuration10min();
      //logisticOBJ.selectEndDateCalender();
      logisticOBJ.selectAvailablilityMondayFromValue();
      logisticOBJ.selectAvailablilityMondayTOValue();
      logisticOBJ.selectAllOtherDayForAvailability();
      logisticOBJ.verifySundayButtonIsChecked();
      logisticOBJ.saveTheZoneFrom2ndPage();
       

    })

    it('LZ-2: Create Zone with 30 min With OSM MAP', () =>{
      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      cy.SelectZoneAddressFromMap();
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      cy.ScheduleCreation({slotDuration: '30', startTime: '07:00', endTime: '17:00'});
      //logisticOBJ.verifySundayButtonIsChecked();
      logisticOBJ.saveTheZoneFrom2ndPage();
       

    })

    it('LZ-3: Create Zone with 10 min With Google MAP', () =>{
      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.selectGoogleMapButton();
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      logisticOBJ.enterMapLocation();
      
      //cy.SelectZoneAddressFromMap();
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      logisticOBJ.selectSlotDuration10min();
      //logisticOBJ.selectEndDateCalender();
      logisticOBJ.selectAvailablilityMondayFromValue();
      logisticOBJ.selectAvailablilityMondayTOValue();
      logisticOBJ.selectAllOtherDayForAvailability();
      logisticOBJ.verifySundayButtonIsChecked();
      logisticOBJ.saveTheZoneFrom2ndPage();
       

    })


    it('LZ 4: Create Zone with 60 min and later Add vehicle with Google Map', () =>{
      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.selectGoogleMapButton();
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      logisticOBJ.enterMapLocation();
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      logisticOBJ.selectSlotDuraiton60min();
      //logisticOBJ.selectEndDateCalender();
      logisticOBJ.selectAvailablilityMondayFromValue();
      logisticOBJ.selectAvailablilityMondayTOValuefor60min();
      logisticOBJ.selectAllOtherDayForAvailability();
      logisticOBJ.verifySundayButtonIsChecked();
      logisticOBJ.saveTheZoneFrom2ndPage();
      logisticOBJ.clickAddorRemoveVehicle();
       

    })


     it('LZ 5: Create Zone with 60 min and later Add vehicle with OSM Map', () =>{
      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      cy.SelectZoneAddressFromMap(300,250);
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      logisticOBJ.selectSlotDuraiton60min();
      //logisticOBJ.selectEndDateCalender();
      logisticOBJ.selectAvailablilityMondayFromValue();
      logisticOBJ.selectAvailablilityMondayTOValuefor60min();
      logisticOBJ.selectAllOtherDayForAvailability();
      logisticOBJ.verifySundayButtonIsChecked();
      logisticOBJ.saveTheZoneFrom2ndPage();
      logisticOBJ.clickAddorRemoveVehicle();
      logisticOBJ.selectAllVehicleCheckBox();
      logisticOBJ.saveAllVehicle();

       

    })

    it('LZ 6: Create Zone with 30 min and later Add vehicle, Equipment with OSM Map', () =>{
      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      cy.SelectZoneAddressFromMap(300,250);
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      cy.ScheduleCreation({slotDuration: '30', startTime: '07:00', endTime: '17:00'});
      logisticOBJ.saveTheZoneFrom2ndPage();
      logisticOBJ.clickAddorRemoveVehicle();
      logisticOBJ.selectAllVehicleOrEquipmentCheckBox();
      logisticOBJ.saveAllVehicleOrEquipment();
      logisticOBJ.clickAddorRemoveEquipment();
      logisticOBJ.selectAllVehicleOrEquipmentCheckBox();
      logisticOBJ.switchToBookableEquipment();
      logisticOBJ.selectAllVehicleOrEquipmentCheckBox();
      logisticOBJ.saveAllVehicleOrEquipment();


       

    })

    it('LZ 7: Create Multiple Zone with 30 min and later Add vehicle, Equipment with OSM Map', () =>{
      
      for(let i = 1 ; i<3; i++) {
      logisticOBJ.clickNavigationButton();  
      logisticOBJ.navigateLogisticZones();
      
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      cy.SelectZoneAddressFromMap(300,250);
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      cy.ScheduleCreation({slotDuration: '30', startTime: '07:00', endTime: '17:00'});
      logisticOBJ.saveTheZoneFrom2ndPage();
      logisticOBJ.clickAddorRemoveVehicle();
      logisticOBJ.selectAllVehicleOrEquipmentCheckBox();
      logisticOBJ.saveAllVehicleOrEquipment();
      logisticOBJ.clickAddorRemoveEquipment();
      logisticOBJ.selectAllVehicleOrEquipmentCheckBox();
      logisticOBJ.switchToBookableEquipment();
      logisticOBJ.selectAllVehicleOrEquipmentCheckBox();
      logisticOBJ.saveAllVehicleOrEquipment();
      }


       

    })

    it('LZ 8: Create Entry (Gate) with Google Map',()=>{

      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.selectGoogleMapButton();
      logisticOBJ.clickaddButton();
      logisticOBJ.clickEntryPoint();
      logisticOBJ.enterEntryPointName();
      logisticOBJ.enterMapLocation();
      logisticOBJ.clickSaveEntryPoint();
      //cy.SelectZoneAddressFromMap(300,250);



    })

    it('LZ 9: Create Entry (Gate) with OSM Map',()=>{

      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.clickaddButton();
      logisticOBJ.clickEntryPoint();
      logisticOBJ.enterEntryPointName();
      cy.SelectZoneAddressFromMap(300,200);
      logisticOBJ.clickSaveEntryPoint();
      //cy.SelectZoneAddressFromMap(300,250);



    })

   it('LZ 10: Create Waiting Area with OSM Map', ()=>{
    logisticOBJ.clickNavigationButton();
    logisticOBJ.navigateLogisticZones();
    logisticOBJ.clickaddButton();
    logisticOBJ.clickWaitingArea();
    logisticOBJ.enterWaitingAreaName();
    cy.SelectZoneAddressFromMap(200,250);
    logisticOBJ.clickSaveEntryPoint();


   })

    it('LZ 11: Create Waiting Area with Google Map', ()=>{
    logisticOBJ.clickNavigationButton();
    logisticOBJ.navigateLogisticZones();
    logisticOBJ.selectGoogleMapButton();
    logisticOBJ.clickaddButton();
    logisticOBJ.clickWaitingArea();
    logisticOBJ.enterWaitingAreaName();
    logisticOBJ.enterMapLocation();
    logisticOBJ.clickSaveEntryPoint();


   })


   it('LZ 12: Edit UP for adding Entry Point & Waiting Area', ()=>{
    logisticOBJ.clickNavigationButton();
    logisticOBJ.navigateLogisticZones();
    logisticOBJ.selectOSMMapButton();
    logisticOBJ.editButtonZone();
    logisticOBJ.selectEntryPointForZone();
    logisticOBJ.selectWaitingAreaForZone();
    logisticOBJ.clickUpdateZone();
    logisticOBJ.saveTheZoneFrom2ndPage();
    logisticOBJ.verifyEntryPointLocation();
    logisticOBJ.verifyWaitingAreaLocation();

   })
});