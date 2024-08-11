import { equipMent, equipment } from "../../pages/equipmentPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/siteSearchandSelectPage";
import loginData from '../../fixtures/loginData.json';

const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();
const eqOBJ = new equipMent();

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
    siteSelectionOBJ.typeSite('Z- Site');
    siteSelectionOBJ.selectSitefromSearch();

    });

    it('Create non bookable Equipment', () =>{
        eqOBJ.clickNavigationButton();
        eqOBJ.navigateMaterial();
        eqOBJ.clickAddEquipment();
        eqOBJ.typeEquipmentId();
        eqOBJ.chooseEquimentIconRandomly();
        eqOBJ.typeEquipmentName();
        eqOBJ.selectDropdownType();
        eqOBJ.enterMaxLoad('500');
        eqOBJ.enterShortDescription('Short Description for the Equipment Hasnat Test');
        eqOBJ.enterAdditionalComment('Our Equipment is non boookable');
        eqOBJ.clickSaveButton();

    })
});