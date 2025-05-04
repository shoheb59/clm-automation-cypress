import { loginPage } from '../../pages/loginPage';
import loginData from '../../fixtures/loginDataStage.json'
const loginObj = new loginPage();

describe('Login Test', () => {
  

  it('Login Case 1: should login successfully and verify URLs', () => {
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


});
