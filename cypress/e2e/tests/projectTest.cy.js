import { projectPage } from "../../pages/projectPage";
import { loginPage } from '../../pages/loginPage';
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../fixtures/loginDataStage.json'
import FilePaths from '../../support/imgUpload';

const projectOBJ = new projectPage();
const loginObj = new loginPage();


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

  it('should perform actions on the dashboard page', () => {
    projectOBJ.clickNavButton();
    projectOBJ.clickProjectButton();
    projectOBJ.clickCreateProject();
    projectOBJ.enterProjectName('Project Automation')
    projectOBJ.enterClientName('HASNAT');
    // projectOBJ.toggleDatePicker();
    // projectOBJ.selectCurrentStartDate();
    // projectOBJ.selectRandomEndFutureDate();
    projectOBJ.clickMatCheckbox();
    projectOBJ.selectStartDate();
    projectOBJ.selectEndDate();
    projectOBJ.clickUploadPhotoButton();
    const filePath = FilePaths.IMAGE_PATH;
    projectOBJ.uploadFile(filePath);
    projectOBJ.clickSaveUploadPhotobtn();
    projectOBJ.clickProjectCreateEditSave();
  });
});
