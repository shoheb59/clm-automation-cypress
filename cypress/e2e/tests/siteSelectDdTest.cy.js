import { siteSearchandSelect } from "../../pages/CLM/siteSearchandSelectPage";
import { loginPage } from "../../pages/loginPage";
import loginData from '../../fixtures/loginData.json';


const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();



describe('Dashboard Page Test', () => {


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
    });


it ('Site Selection from the Dropdown', () =>{
    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Testfeld 2+');
    siteSelectionOBJ.selectSitefromSearch();
})

});