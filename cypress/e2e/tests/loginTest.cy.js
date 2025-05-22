import { loginPage } from '../../pages/loginPage';
//import loginData from '../../fixtures/loginDataStage.json'
import loginData from '../../fixtures/loginDataDev.json';
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

    it('Login Case 2: Invalid Password test', () => {
      loginObj.openURL();
      loginObj.enterEmail(loginData.SuperAdmin.email);
      loginObj.enterPassword('123456');
      loginObj.selectEnglishButton();
      loginObj.btnsubmit();
      loginObj.verifyWrongPasswordErrorMessage();
      
  });


   it('Login Case 3: Wrong Email test', () => {
      loginObj.openURL();
      loginObj.enterEmail('invalidemail@yopmail.com');
      loginObj.selectEnglishButton();
      loginObj.verifyWrongEmailTextLabel();
      
  });

   it('Login Case 4: Invalid Email test', () => {
      loginObj.openURL();
      loginObj.enterEmail('invalidemail');
      loginObj.selectEnglishButton();
      loginObj.verifyInvalidEmailTextLabel();

      
  });

   it('Login Case 5: Blank the password filed', () => {
      loginObj.openURL();
      loginObj.enterEmail(loginData.SuperAdmin.email);
      loginObj.enterPassword(loginData.SuperAdmin.password);
      loginObj.enterPasswordBlank()
      loginObj.selectEnglishButton();
      loginObj.verifyPasswordfiledblanklabel();

      
  });



});
