import { logisticZone } from "../../pages/CLM/logisticeZonePage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
//import loginData from '../../fixtures/loginDataStage.json';
import loginData from '../../fixtures/loginDataDev.json'

const loginObj  = new loginPage();
const logisticOBJ = new logisticZone();
const siteSelectionOBJ =  new siteSearchandSelect();


describe('Logistic Page Test Scenario', () => {


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

      //site selection

    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Testfeld 2+');
    siteSelectionOBJ.selectSitefromSearch();

    //Check Again
    loginObj.handleModal();

    });

    it('LZ-1: Create Zone with 10 min', () =>{
      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.selectGoogleMapButton();
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      logisticOBJ.enterMapLocation();
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      logisticOBJ.selectSlotDuration10min();
      //logisticOBJ.selectEndDateCalender();
      logisticOBJ.selectAvailablilityMondayFromValue();
      logisticOBJ.selectAvailablilityMondayTOValue();
      logisticOBJ.selectAllOtherDayForAvailability();
      logisticOBJ.verifySundayButtonIsChecked();
      logisticOBJ.saveTheZoneFrom2ndPage();
       

    })


    it('LZ 2: Create Zone with 60 min and later Add vehicle with Google Map', () =>{
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

    it('LZ 3: Create Entry (Gate) with Google Map',()=>{

      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.selectGoogleMapButton();
      logisticOBJ.clickaddButton();
      logisticOBJ.clickEntryPoint();
      logisticOBJ.enterEntryPointName();
      logisticOBJ.enterMapLocation();
      logisticOBJ.clickSaveEntryPoint();



    })

   it('LZ 4: Create Waiting Area with Google Map', ()=>{
    logisticOBJ.clickNavigationButton();
    logisticOBJ.navigateLogisticZones();
    logisticOBJ.selectGoogleMapButton();
    logisticOBJ.clickaddButton();
    logisticOBJ.clickWaitingArea();
    logisticOBJ.enterWaitingAreaName();
    logisticOBJ.enterMapLocation();
    logisticOBJ.clickSaveEntryPoint();


   })


   it('LZ 5: Edit UP for adding Entry Point & Waiting Area', ()=>{
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