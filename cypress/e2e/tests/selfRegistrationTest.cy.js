import { selfregistration } from "../../pages/selfRegistrationPage";

const selfObj = new selfregistration();


describe('Self Registration Test Case',()=>{

    it('SRC 1: Verify that user can register with the Valid Email', ()=>{
        selfObj.openURL();
        selfObj.selectEnglishLanguage();
        selfObj.clickRegistrationButton();
        selfObj.enterFirstName();
        selfObj.enterLastName();
        selfObj.enterEmail();
        selfObj.enterPhoneNumber();
        selfObj.clickSignUpButton();
        selfObj.clickConsets();
        selfObj.clickLoginBtn();
       // selfObj.visitMaildropEmail();

    })


    it('SRC 2: Verify that user can register with multiple Valid Email', ()=>{
        selfObj.openURL();
        
        for(let i=1; i<1;i++)
        {
            selfObj.selectEnglishLanguage();
            selfObj.clickRegistrationButton();
            selfObj.enterFirstName();
            selfObj.enterLastName();
            selfObj.enterEmail();
            selfObj.enterPhoneNumber();
            selfObj.clickSignUpButton();
            selfObj.clickConsets();
            selfObj.clickLoginBtn();

        }
       

    })
})