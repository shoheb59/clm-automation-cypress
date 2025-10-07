import { sitePage } from "../../../pages/CLM/sitePage";
import { loginPage } from '../../../pages/loginPage';
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../../fixtures/loginDataStage.json';
import FilePaths from '../../../support/imgUpload';
import sitesData from '../../../fixtures/sitesToCreate.json';



const siteOBJ = new sitePage();

describe('Site Creation Page Test', () => {


    beforeEach(() => {

     
    cy.LoginWithCurrentUrlAndSelectSite();
      
    });
  
    it('SC 1 :  Create a Single Site', () => {

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
        cy.PlanDateSelection(0, 1); // Start date
        cy.PlanDateSelection(1, 20); //End date
        siteOBJ.selectGenerateCode();
        siteOBJ.selectLeanCardGeneration();
        siteOBJ.typeSiteNotice('Notice: This is a Test Data Site');
        siteOBJ.clickUploadPhotoButton();
        const filePath = FilePaths.IMAGE_PATH;
        siteOBJ.uploadFile(filePath);
        siteOBJ.clickSaveUploadPhotobtn();
        siteOBJ.clickSiteCreateEditSave();
      
    });

    it.only('SC 2: Create Multiple Site', () => {

    const today = new Date().toISOString().slice(5, 10).replace('-', ''); // e.g., "1006"
    

    siteOBJ.clickNavButton();
    siteOBJ.clickProjectButton();
    siteOBJ.typeSearchBtn();
    siteOBJ.selectProject();

    sitesData.forEach((site, index) => {
      const uniqueName = `${site.name}_${today}_${index + 1}`;

      cy.log(`---- Creating Site ${index + 1}: ${uniqueName} ----`);
      siteOBJ.clickAddButton();

      siteOBJ.enterSiteName(uniqueName);
      siteOBJ.enterSiteAddresss(site.address);
      siteOBJ.enterContactPersonName();
      siteOBJ.enterContactPersonEmail();
      siteOBJ.enterContactPersonPhone();

      cy.PlanDateSelection(0, 1); // Start date
      cy.PlanDateSelection(1, 20); // End date

      siteOBJ.selectGenerateCode();
      siteOBJ.selectLeanCardGeneration();
      siteOBJ.typeSiteNotice(site.notice);

      siteOBJ.clickUploadPhotoButton();
      const filePath = FilePaths.IMAGE_PATH;
      siteOBJ.uploadFile(filePath);
      siteOBJ.clickSaveUploadPhotobtn();

      siteOBJ.clickSiteCreateEditSave();

      
    });
  });


  });