import { material } from "../../../pages/CLM/materialPage";
import { loginPage } from "../../../pages/loginPage";
import { siteSearchandSelect } from "../../../pages/CLM/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
import loginData from "../../../fixtures/loginDataStage.json";

const loginObj = new loginPage();
const siteSelectionOBJ = new siteSearchandSelect();
const materialOBJ = new material();

describe("Material Page Test", () => {
  beforeEach(() => {
    cy.LoginWithCurrentUrlAndSelectSite();
  });

  it("MC 1: Create Material", () => {
    materialOBJ.clickNavigationButton();
    materialOBJ.navigateMaterial();
    materialOBJ.clickCreateMaterial();
    //materialOBJ.verifyMaterialInfoPage();
    materialOBJ.enterMaterialName("Material Cement");
    materialOBJ.selectUnit();
    materialOBJ.enterLength();
    materialOBJ.enterWidth();
    materialOBJ.selectTeam();
    materialOBJ.typeDescription("Description Added");
    materialOBJ.clickSaveButton();
  });

  it.only("MAT 02: Create Multiple Materials from Fixture Data", () => {
    materialOBJ.clickNavigationButton();
    materialOBJ.navigateMaterial();
    cy.fixture("materialData").then((materials) => {
      materials.forEach((data) => {
        cy.log(`Creating Material with Unit: ${data.unit}`);
        materialOBJ.createMaterial(data);
      });
    });
  });

  it("MC 2: Verify that User can Delete or Keep the Material", () => {
    // Visit the page
    // Check if there is any row with role="row"
    materialOBJ.clickNavigationButton();
    materialOBJ.navigateMaterial();
    materialOBJ.collectMaterialName((materialName) => {
      materialOBJ.hoeverRow();
      materialOBJ.deleteorKeepRow();
      //materialOBJ.clickSearchIcon();
      materialOBJ.typeValue(materialName);
    });
  });
});
