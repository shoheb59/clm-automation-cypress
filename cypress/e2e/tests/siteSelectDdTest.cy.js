import { siteSearchandSelect } from "../../pages/siteSearchandSelectPage";
import { loginPage } from "../../pages/loginPage";
import loginData from '../../fixtures/loginData.json';


const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();



describe('Dashboard Page Test', () => {


    before(() => {
      loginObj.openURL();
      loginObj.enterEmail(loginData.email);
      loginObj.enterPassword(loginData.password);
      loginObj.selectEnglishButton();
      loginObj.btnsubmit();
      loginObj.verifyUrls();
      loginObj.handleModal();
    });


it ('Site Selection from the Dropdown', () =>{
    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Home Basic');
    siteSelectionOBJ.selectSitefromSearch();
})

});