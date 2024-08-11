import { sitePage } from "../../pages/sitePage";
import { loginPage } from '../../pages/loginPage';
import loginData from '../../fixtures/loginData.json';

const siteOBJ = new sitePage();
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
  
    it('should perform actions on the site creation page', () => {

        siteOBJ.clickNavButton();
        siteOBJ.clickProjectButton();
        siteOBJ.typeSearchBtn();
        siteOBJ.selectProject();
        siteOBJ.clickAddButton();
        siteOBJ.enterSiteName();
        siteOBJ.enterSiteAddresss('8767 Wilshire Boulevard, Beverly Hills, CA, USA');
        siteOBJ.enterContactPersonName();
        siteOBJ.enterContactPersonEmail();
        siteOBJ.enterContactPersonPhone();
        siteOBJ.selectGenerateCode();
        siteOBJ.selectLeanCardGeneration();
        siteOBJ.typeSiteNotice('Notice Added')
      
    });
  });