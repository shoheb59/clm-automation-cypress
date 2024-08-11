import { loginPage } from '../../pages/loginPage';
import loginData from '../../fixtures/loginData.json'
const loginObj = new loginPage();

describe('Login Test', () => {
  

  it('should login successfully and verify URLs', () => {
    loginObj.openURL();
    loginObj.enterEmail(loginData.email);
    loginObj.enterPassword(loginData.password);
    loginObj.selectEnglishButton();
    loginObj.btnsubmit();
    loginObj.verifyUrls();
    //loginObj.selectEnglish();
    loginObj.handleModal();
  });
});
