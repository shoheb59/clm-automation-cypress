import { KonshubNavigationPage } from "../../../pages/KonsHub/konsubNavigationPage";
import { KonshubShipment } from "../../../pages/KonsHub/konshubShipmentCreationPage";
import { loginPage } from "../../../pages/loginPage";
import { siteSearchandSelect } from "../../../pages/CLM/siteSearchandSelectPage";
import { DeliveriesPage } from "../../../pages/KonsHub/deliveriestabPage";
//import loginData from '../../fixtures/loginData.json';
// import loginData from '../../../fixtures/loginDataStage.json';
import { getLoginDataByUrl } from "../../../support/utils/getLoginData";

const loginObj = new loginPage();
const siteSelectionOBJ = new siteSearchandSelect();
const konsubshipOBJ = new KonshubNavigationPage();
const konsubShipmentOBJ = new KonshubShipment();
const deliveriesOBJ = new DeliveriesPage();

describe("Konshub Test Case", () => {
  beforeEach(function () {
    loginObj.openURL();
    cy.url().then((currentURL) => {
      return getLoginDataByUrl(currentURL).then((loadedData) => {
        this.loginData = loadedData;

        loginObj.enterEmail(this.loginData.SuperAdmin.email);
        loginObj.enterPassword(this.loginData.SuperAdmin.password);
        loginObj.selectEnglishButton();
        loginObj.btnsubmit();
        loginObj.verifyUrls();
        cy.wait(10000);
        loginObj.handleModal();
        // Continue with site selection only after modal handling is complete

        //site selection

        siteSelectionOBJ.clickDropDown();
        siteSelectionOBJ.typeSite("Testfeld 2+");
        siteSelectionOBJ.selectSitefromSearch();

        //konshub navigation
        konsubshipOBJ.clickNavigationButton();
        konsubshipOBJ.navigateToKonshub();
        //konsubshipOBJ.selectLanguage();
      });
    });
  });

  // before(() => {
  //   loginObj.openURL();
  //   loginObj.enterEmail(loginData.SuperAdmin.email);
  //   loginObj.enterPassword(loginData.SuperAdmin.password);
  //   loginObj.selectEnglishButton();
  //   loginObj.btnsubmit();
  //   loginObj.verifyUrls();
  //   cy.wait(10000);
  //   loginObj.handleModal();
  //   // Continue with site selection only after modal handling is complete

  //   //site selection

  //   siteSelectionOBJ.clickDropDown();
  //   siteSelectionOBJ.typeSite("Testfeld 2+");
  //   siteSelectionOBJ.selectSitefromSearch();

  //   //konshub navigation
  //   konsubshipOBJ.clickNavigationButton();
  //   konsubshipOBJ.navigateToKonshub();
  //   //konsubshipOBJ.selectLanguage();
  // });

  it("KC 1: Create an Open Konshub Shipment", function () {
    konsubShipmentOBJ.clickNavButton("SHIPMENTS");
    konsubShipmentOBJ.clickCreateShipmentButton();
    konsubShipmentOBJ.SearchSenderTeam();
    cy.ShipmentRandomDateSelection();
    konsubShipmentOBJ.clickNextStep1();
    cy.MaterialSelection();
    cy.NextButton();
    cy.VehicleSelection();
    cy.NextButton();
    cy.EquipmentSelection();
    cy.UpSelection();
    cy.UpSlotSelection();
    cy.NextButton();
    cy.AddOnSitePerson();
    cy.SaveCreatedShipment();
    cy.OpenOrApproveModal("Open");
  });

  it("KC 2: Create an Approve Konshub Shipment", () => {
    konsubShipmentOBJ.clickNavButton("SHIPMENTS");
    konsubShipmentOBJ.clickCreateShipmentButton();
    konsubShipmentOBJ.SearchSenderTeam();
    cy.ShipmentRandomDateSelection();
    konsubShipmentOBJ.clickNextStep1();
    cy.MaterialSelection();
    cy.NextButton();
    cy.VehicleSelection();
    cy.NextButton();
    cy.EquipmentSelection();
    cy.UpSelection();
    cy.UpSlotSelection();
    cy.NextButton();
    cy.AddOnSitePerson();
    cy.SaveCreatedShipment();
    cy.OpenOrApproveModal("Approve");
  });
}); 

  