import { sitePage } from "../../pages/CLM/sitePage";
import { loginPage } from '../../pages/loginPage';
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../fixtures/loginDataStage.json';
import FilePaths from '../../support/imgUpload';


const siteOBJ = new sitePage();
const loginObj = new loginPage();


describe('Site Creation Page Test', () => {


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
  
    it('should perform actions on the site creation page', () => {

        siteOBJ.clickNavButton();
        siteOBJ.clickProjectButton();
        siteOBJ.typeSearchBtn();
        siteOBJ.selectProject();
        siteOBJ.clickAddButton();
        siteOBJ.enterSiteName();
        siteOBJ.enterSiteAddresss('230');
        siteOBJ.enterContactPersonName();
        siteOBJ.enterContactPersonEmail();
        siteOBJ.enterContactPersonPhone();
        siteOBJ.selectGenerateCode();
        siteOBJ.selectLeanCardGeneration();
        siteOBJ.typeSiteNotice('Notice Added');
        siteOBJ.clickUploadPhotoButton();
        const filePath = FilePaths.IMAGE_PATH;
        siteOBJ.uploadFile(filePath);
        siteOBJ.clickSaveUploadPhotobtn();
        //siteOBJ.clickProjectCreateEditSave();
      
    });
  });