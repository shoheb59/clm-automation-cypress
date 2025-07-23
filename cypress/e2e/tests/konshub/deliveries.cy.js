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



  it("Deliveries 1: Create an Approve Konshub Shipment and Check it on the Incomming Tab and move it to Complete Tab", () => {
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
    cy.VerifySaveShipmentTitle();
    cy.OpenOrApproveModal("Approve");
    konsubShipmentOBJ.clickNavButton("DELIVERIES");
    cy.SearchShipmentOnDeliveries();
    cy.ClickManageButtonAndSelectOption(deliveriesOBJ.deliveriesLocator.btn_ArriveManage);
    cy.ArriveInputModal();
    deliveriesOBJ.clickNavigation("UNPLANNED");
    cy.ClickFirstShipmentForManage();
    cy.ClickManageButtonAndSelectOption(deliveriesOBJ.deliveriesLocator.btn_EditManage);
    cy.PlanDateSelection("0");
    deliveriesOBJ.clickEditModalSaveButton();
    deliveriesOBJ.clickNavigation("PLANNED");
    cy.ClickFirstShipmentForManage();
    cy.ClickManageButtonAndSelectOption(
      deliveriesOBJ.deliveriesLocator.btn_deliveredManage
    );
    cy.TextLabelVerification(
      deliveriesOBJ.deliveriesLocator.label_NoDatafound,
      deliveriesOBJ.deliveriesLocator.expectedText
    );
    deliveriesOBJ.clickNavigation("COMPLETED");
    cy.VerifyShipment();

    //cy.VerifySearchResult();
    //''
  });
});
