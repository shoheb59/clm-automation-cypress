
import {loginPage} from '../pages/loginPage';
import {siteSearchandSelect} from '../pages/CLM/siteSearchandSelectPage';
import loginData from '../fixtures/loginDataDev.json';
import { getLoginDataByUrl } from "../support/utils/getLoginData";

const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();

Cypress.Commands.add('LoginAnSelectSite', () => {
  loginObj.openURL();
  loginObj.enterEmail(loginData.SuperAdmin.email);
  loginObj.enterPassword(loginData.SuperAdmin.password);
  loginObj.selectEnglishButton();
  loginObj.btnsubmit();
  //loginObj.verifyUrls();
  loginObj.verifyWeatherInfoLoad();
  loginObj.verifySttisticsLoad();
  loginObj.handleModal();

  // site selection
  siteSelectionOBJ.clickDropDown();
  siteSelectionOBJ.typeSite('Testfeld 2+');
  siteSelectionOBJ.selectSitefromSearch();

});


Cypress.Commands.add('LoginWithCurrentUrlAndSelectSite', () => {
    let loginData;
      loginObj.openURL();
        cy.url().then((currentUrl) => {
          return getLoginDataByUrl(currentUrl).then((loadedData) => {
            loginData = loadedData;
            loginObj.enterEmail(loginData.SuperAdmin.email);
            loginObj.enterPassword(loginData.SuperAdmin.password);
            
        loginObj.selectEnglishButton();
        loginObj.btnsubmit();
       
        loginObj.verifyWeatherInfoLoad();
        loginObj.verifySttisticsLoad();
        loginObj.handleModal();

    
        siteSelectionOBJ.clickDropDown();
        siteSelectionOBJ.typeSite("CLM Test Data Site");
        siteSelectionOBJ.selectSitefromSearch();

          })
 })

})