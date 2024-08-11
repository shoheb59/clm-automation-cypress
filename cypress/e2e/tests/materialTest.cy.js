import { material } from "../../pages/materialPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/siteSearchandSelectPage";
import loginData from '../../fixtures/loginData.json';

const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();
const materialOBJ = new material();


describe('Dashboard Page Test', () => {


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

    it('Create Material', () =>{
        materialOBJ.clickNavigationButton();
        materialOBJ.navigateMaterial();
        materialOBJ.clickCreateMaterial();
        //materialOBJ.verifyMaterialInfoPage();
        materialOBJ.enterMaterialName('Material Cement');
        materialOBJ.selectUnit();
        materialOBJ.enterLength();
        materialOBJ.enterWidth();
        materialOBJ.selectTeam();
        materialOBJ.typeDescription('Description Added');
        materialOBJ.clickSaveButton();

    })

    it.only('should delete the first material name and search for it', () => {
      // Visit the page
      // Check if there is any row with role="row"
      materialOBJ.clickNavigationButton();
      materialOBJ.navigateMaterial();
      materialOBJ.collectMaterialName((materialName) =>{
      materialOBJ.hoeverRow();
      materialOBJ.deleteorKeepRow();
      materialOBJ.clickSearchIcon();
      materialOBJ.typeValue(materialName);

      });
      
  
     
    });
      




});