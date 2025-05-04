import { konsubShipment } from "../../pages/KonsHub/konsubShipmentPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../fixtures/loginDataStage.json';

const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();
const konsubshipOBJ = new konsubShipment();



describe('Konshub Test Case', () => {


    beforeEach(() => {
      loginObj.openURL();
      loginObj.enterEmail(loginData.SuperAdmin.email);
      loginObj.enterPassword(loginData.SuperAdmin.password);
      loginObj.selectEnglishButton();
      loginObj.btnsubmit();
      loginObj.verifyUrls();
      cy.wait(10000);
      loginObj.handleModal()
        // Continue with site selection only after modal handling is complete
      
   

      //site selection

    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Testfeld 2+');
    siteSelectionOBJ.selectSitefromSearch();

    });

    it.skip('Create Konsub Shipment',()=>{
        konsubshipOBJ.clickNavigationButton();
        konsubshipOBJ.navigateKonsub();
        konsubshipOBJ.selectLanguage();

    });

});