import { projectPage } from "../../../pages/CLM/projectPage";
import { loginPage } from '../../../pages/loginPage';
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../../fixtures/loginDataStage.json'
import FilePaths from '../../../support/imgUpload';

const projectOBJ = new projectPage();
const loginObj = new loginPage();


describe('Dashboard Page Test', () => {


  beforeEach(() => {
    
    cy.LoginWithCurrentUrlAndSelectSite();

  });

  it('Project Case 1: Project Creation', () => {
    projectOBJ.clickNavButton();
    projectOBJ.clickProjectButton();
    projectOBJ.clickCreateProject();
    projectOBJ.enterProjectName();
    projectOBJ.enterClientName('SELISE Test Data');
    // projectOBJ.toggleDatePicker();
    // projectOBJ.selectCurrentStartDate();
    // projectOBJ.selectRandomEndFutureDate();
    projectOBJ.clickhasKonshubCheckbox();
    //projectOBJ.selectStartDate();
    cy.PlanDateSelection(0, 1); // Start date
    cy.PlanDateSelection(1, 24); //End date
    // //projectOBJ.selectEndDate();
    //projectOBJ.clickUploadPhotoButton();
    const filePath = FilePaths.IMAGE_PATH;
    projectOBJ.uploadFile(filePath);
    //projectOBJ.clickSaveUploadPhotobtn();
    //cy.get('#image-coropper-cancel').click();
    //projectOBJ.clickProjectCreateEditSave();
  });
});
