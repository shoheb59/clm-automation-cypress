import { shipmentPage } from "../../pages/shipmentPage";
import { loginPage } from "../../pages/loginPage";
import { siteSearchandSelect } from "../../pages/siteSearchandSelectPage";
//import loginData from '../../fixtures/loginData.json';
import loginData from '../../fixtures/loginDataStage.json';

const loginObj  = new loginPage();
const siteSelectionOBJ =  new siteSearchandSelect();
const shipmentOBJ = new shipmentPage();


describe('Team Test Case', () => {


    beforeEach(() => {
      loginObj.openURL();
      loginObj.enterEmail(loginData.email);
      loginObj.enterPassword(loginData.password);
      loginObj.selectEnglishButton();
      loginObj.btnsubmit();
      loginObj.verifyUrls();
      cy.wait(10000);
      loginObj.handleModal()
        // Continue with site selection only after modal handling is complete
      
   

      //site selection

    siteSelectionOBJ.clickDropDown();
    siteSelectionOBJ.typeSite('Testfeld 2+');
    siteSelectionOBJ.selectSitefromSearch();

    });

    it('Create Multiple shipment Shipment',()=>{

        shipmentOBJ.clickNavigationButton();
        shipmentOBJ.navigateShipment();
        shipmentOBJ.selectFirstLeanCard();
        for(let i=1; i<10; i++)
        {

        shipmentOBJ.clickAddshipment();
        shipmentOBJ.selectDateFromCalender();
        shipmentOBJ.clickNextStep1();
        shipmentOBJ.selectMaterial();
        shipmentOBJ.clickNextStep2();
        shipmentOBJ.selectVehicle();
        shipmentOBJ.clickNextStep3();
        //Step 4
        shipmentOBJ.selectNonBookableequip();
        shipmentOBJ.selectUp();
        shipmentOBJ.selectUPslot();
        shipmentOBJ.clickNextStep4();


        //step 5
        shipmentOBJ.clickOnSitePerson();
        shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
        shipmentOBJ.clickShipmentCreateBtn();
        shipmentOBJ.clickOpenShipment();


        }
        

    })

    it('Create Single shipment Shipment With OPEN Status',()=>{

      shipmentOBJ.clickNavigationButton();
      shipmentOBJ.navigateShipment();
      shipmentOBJ.selectFirstLeanCard();

      shipmentOBJ.clickAddshipment();
      shipmentOBJ.selectDateFromCalender();
      shipmentOBJ.clickNextStep1();
      shipmentOBJ.selectMaterial();
      shipmentOBJ.clickNextStep2();
      shipmentOBJ.selectVehicle();
      shipmentOBJ.clickNextStep3();
      //Step 4
      shipmentOBJ.selectNonBookableequip();
      shipmentOBJ.selectUp();
      shipmentOBJ.selectUPslot();
      shipmentOBJ.clickNextStep4();


      //step 5
      shipmentOBJ.clickOnSitePerson();
      shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
      shipmentOBJ.clickShipmentCreateBtn();
      shipmentOBJ.clickOpenShipment();



      

  })


  it.only('Create Single shipment Shipment With Approve Status',()=>{

    shipmentOBJ.clickNavigationButton();
    shipmentOBJ.navigateShipment();
    shipmentOBJ.selectFirstLeanCard();

    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle();
    shipmentOBJ.clickNextStep3();
    //Step 4
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.selectUPslot();
    shipmentOBJ.clickNextStep4();


    //step 5
    shipmentOBJ.clickOnSitePerson();
    shipmentOBJ.selectRadioButtonWithExistingResponsiableperson();
    shipmentOBJ.clickShipmentCreateBtn();
    shipmentOBJ.clickApproveShipment();



    

})


});
