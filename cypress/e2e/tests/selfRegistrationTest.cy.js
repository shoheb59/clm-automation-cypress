import { selfregistration } from "../../pages/selfRegistrationPage";

const selfObj = new selfregistration();


describe('self Registration',()=>{

    it('Valide email self reg', ()=>{
        selfObj.openURL();
        selfObj.selectEnglishLanguage();
        selfObj.clickRegistrationButton();
        selfObj.enterFirstName();
        selfObj.enterLastName();
        selfObj.enterEmail();
        selfObj.enterPhoneNumber();
        selfObj.clickSignUpButton();
        selfObj.clickConsets();
       // selfObj.visitMaildropEmail();

    })
})