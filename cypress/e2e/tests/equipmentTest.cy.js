import { equipMent, equipment } from "../../pages/CLM/equipmentPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
//import loginData from '../../fixtures/loginDataStage.json';
import loginData from '../../fixtures/loginDataDev.json'

const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();
const eqOBJ = new equipMent();

describe('Equipment Page Test', () => {


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

    });

    it('Eq 1: Verify that User can Create non bookable Equipment', () =>{
        eqOBJ.clickNavigationButton();
        eqOBJ.navigateMaterial();
        eqOBJ.clickAddEquipment();
        eqOBJ.typeEquipmentId();
        eqOBJ.chooseEquimentIconRandomly();
        eqOBJ.typeEquipmentName();
        eqOBJ.selectDropdownType();
        eqOBJ.enterMaxLoad('500');
        eqOBJ.enterShortDescription('Equipment Non-Bookable');
        eqOBJ.enterAdditionalComment('Our Equipment is non boookable');
        eqOBJ.clickSaveButton();

    })
    it('Eq 2: Verify that User can Create Bookable Equipment',()=>{
      eqOBJ.clickNavigationButton();
      eqOBJ.navigateMaterial();
      eqOBJ.clickAddEquipment();
      eqOBJ.typeEquipmentId();
      eqOBJ.chooseEquimentIconRandomly();
      eqOBJ.typeEquipmentName();
      eqOBJ.selectDropdownType();
      eqOBJ.enterMaxLoad('500');
      eqOBJ.enterShortDescription('Equipment Bookable');
      eqOBJ.enterAdditionalComment('Our Equipment is boookable');
      eqOBJ.clickRadioButton();
      eqOBJ.selectPricingModule();
      eqOBJ.clickNextButton();
      eqOBJ.selectSlotDuration15min();
      eqOBJ.selectAvailablilityMondayFromValue();
      eqOBJ.selectAvailablilityMondayTOValue();
      eqOBJ.selectAllOtherDayForAvailability();
      eqOBJ.clickSaveButton();



    })
});