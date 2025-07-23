import { loginPage } from '../../../pages/loginPage';
//import loginData from '../../fixtures/loginDataStage.json'
//import loginData from '../../../fixtures/loginDataDev.json';
const loginObj = new loginPage();
import { getLoginDataByUrl } from '../../../support/utils/getLoginData';


describe('Login Test', () => {


  beforeEach(function() {
    loginObj.openURL();
    cy.url().then((currentUrl) => {
      return getLoginDataByUrl(currentUrl).then((loadedData) => {
        this.loginData = loadedData; 
      });
    });
  });

 

  

it('Login Case 1: should login successfully and verify URLs', function () {
  
    loginObj.enterEmail(this.loginData.SuperAdmin.email);
    loginObj.enterPassword(this.loginData.SuperAdmin.password);
    loginObj.selectEnglishButton();
    loginObj.btnsubmit();
    loginObj.verifyUrls();
    loginObj.verifyWeatherInfoLoad();
    loginObj.verifySttisticsLoad();
    loginObj.handleModal();
  });




it('Login Case 2: Invalid Password test', function() {
      
      loginObj.enterEmail(this.loginData.SuperAdmin.email);
      loginObj.enterPassword('123456');
      loginObj.selectEnglishButton();
      loginObj.btnsubmit();
      loginObj.verifyWrongPasswordErrorMessage();
      
  });


   it('Login Case 3: Wrong Email test',function (){
    
      loginObj.enterEmail('invalidemail@yopmail.com');
      loginObj.selectEnglishButton();
      loginObj.verifyWrongEmailTextLabel();
      
  });

   it('Login Case 4: Invalid Email test',function () {
      loginObj.enterEmail('invalidemail');
      loginObj.selectEnglishButton();
      loginObj.verifyInvalidEmailTextLabel();

      
  });

   it('Login Case 5: Blank the password filed', function() {
      loginObj.enterEmail(this.loginData.SuperAdmin.email);
      loginObj.enterPassword(this.loginData.SuperAdmin.password);
      loginObj.enterPasswordBlank()
      loginObj.selectEnglishButton();
      loginObj.verifyPasswordfiledblanklabel();

      
  });

});

