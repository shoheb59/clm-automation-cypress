import { logisticZone } from "../../pages/logisticeZonePage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/siteSearchandSelectPage";
import loginData from '../../fixtures/loginData.json';

const loginObj  = new loginPage();
const logisticOBJ = new logisticZone();
const siteSelectionOBJ =  new siteSearchandSelect();


describe('Equipment Page Test', () => {


    before(() => {
      loginObj.openURL();
      loginObj.enterEmail(loginData.email);
      loginObj.enterPassword(loginData.password);
      loginObj.selectEnglishButton();
      loginObj.btnsubmit();
      loginObj.verifyUrls();
      loginObj.handleModal();

      //site selection

    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Test the Zone Pre-requisite date creation');
    siteSelectionOBJ.selectSitefromSearch();

    });

    it('Create Zone with 10 min', () =>{
      logisticOBJ.clickNavigationButton();
      logisticOBJ.navigateLogisticZones();
      logisticOBJ.clickaddButton();
      logisticOBJ.enterZoneDetails();
      logisticOBJ.enterMapLocation();
      logisticOBJ.clickSaveForSaveZoneFirstPage();
      logisticOBJ.selectSlotDuration10min();
      logisticOBJ.selectEndDateCalender();
      logisticOBJ.selectAvailablilityMondayFromValue();
      logisticOBJ.selectAvailablilityMondayTOValue();
      logisticOBJ.selectAllOtherDayForAvailability();
      logisticOBJ.verifySundayButtonIsChecked();
      logisticOBJ.saveTheZoneFrom2ndPage();
       

    })
});