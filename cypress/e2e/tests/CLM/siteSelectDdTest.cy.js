import { siteSearchandSelect } from "../../../pages/CLM/siteSearchandSelectPage";
import { loginPage } from "../../../pages/loginPage";
import loginData from '../../../fixtures/loginData.json';


const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();



describe('Dashboard Page Test - Site Selection', () => {


    beforeEach(() => {
      
    cy.LoginWithCurrentUrlAndSelectSite();

    });


it ('Site Selection from the Dropdown', () =>{
    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Testfeld 2+');
    siteSelectionOBJ.selectSitefromSearch();
})

});