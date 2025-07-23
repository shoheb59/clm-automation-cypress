import { generateRandomZoneData } from "../../support/utils/getLoginData";
import { generateRandomTwoDigitData } from "../../support/utils/getLoginData";

export class OverviewPage {
  overviewPageLocator = {
    btn_AddNewZone: ".zoneSchedul__boxWrapper__addNew",
    txt_ZoneId: '[formcontrolname="IdName"]',
    txt_ZoneName: '[formcontrolname="ZoneName"]',
    map_osm: "#osm-map",
    map_google: "#map-canvas-zone",
    btn_googleMap: "#googleBtn",
    btn_Next: '[type="submit"]',

    //vehicle
    btn_AddNewVehicle: ".truckInfo__boxWrapper__addNew",
    vehicle_type: (vehicleType) => `[value = "${vehicleType}"]`,
    txt_vehicleId: '[formcontrolname="VehicleId"]',
    txt_vehicleName: '[formcontrolname="VehicleName"]',
    txt_vehiclePitchCapacity: '[formcontrolname="PitchCapacity"]',
    btn_SaveVehicle: '[aria-label="Save"]',

    //Edit option for Zone or Vehicle or storage
    allSchedule: ".zoneSchedul__boxWrapper__box",
    editSchedule: ".edit-zoneSchedule",
    allVehicle: ".truckInfo__boxWrapper__box",
    editVehicle: ".editTruckInfo",
    allStorage: ".hoverEffect",
    editStorage: ".editStroage",

    //storage

    addorEditStorage: '[aria-haspopup="menu"] .edit-zoneSchedule',
    btn_AddNewStorage: '[role="menuitem"]', //Add and Edit button use eq
    txt_StorageRow: '[formcontrolname="Row"]',
    txt_StoragePitchCapacity: '[formcontrolname="Pitch"]',

    //upload Document
    uploadDocument: 'input[type="file"].file',
    txt_docName: '[formcontrolname="Name"]',
    txt_docDescription: '[formcontrolname="Description"]',
    coverPageSelection: ".image-container",
    btn_SaveDocument: ".mdc-dialog__actions .mdc-button__label",
    loader: ".mdc-circular-progress__determinate-circle",

    //Upload Image
    uploadImage: 'input[type="file"][accept="image/*"]',
    btn_SaveImage: '.photosInfo__top .mdc-button__label',
    allImageList: '.photosInfo__boxWrapper__imgList',
    btn_RemoveIcon: '.photo-remove-btn',
    btn_ConfirmRemove: '.mdc-dialog__actions .mdc-button__label',

    //Responsible Person
    btn_AddNewResponsiblePerson: '.responsilbe-person__boxWrapper__addNew',
    txt_responsiblePersonName: '[formcontrolname="Name"]',
    txt_responsiablePersonEmail: '[formcontrolname="Email"]',
    txt_responsiablePersonPhone: '[formcontrolname="Phone"]',
    btn_SaveResponsiblePerson: '[type="submit"]',

  };

  clickAddNewZone() {
    cy.get(this.overviewPageLocator.btn_AddNewZone)
      .should("be.visible")
      .click();
  }

  enterZoneId(zoneId) {
    cy.get(this.overviewPageLocator.txt_ZoneId)
      .should("be.visible")
      .type(zoneId);
  }
  enterZoneName(zoneName) {
    cy.get(this.overviewPageLocator.txt_ZoneName)
      .should("be.visible")
      .clear()
      .type(zoneName);
  }
  enterZoneAddress() {
    cy.get("#googleBtn").click();
    cy.get("#map-canvas-zone").click(200, 150); // click at x=200, y=150 relative to top-left of map
  }

  clickNextButtonForSchedule() {
    cy.get(this.overviewPageLocator.btn_Next).should("be.visible").click();
  }

  enterVehicleName(vehicleName) {
    cy.get(this.overviewPageLocator.txt_vehicleName).clear().type(vehicleName);
  }
  saveVehicle() {
    cy.get(this.overviewPageLocator.btn_SaveVehicle)
      .should("be.enabled")
      .click();
  }

  addNewVehicle(vehicleType, vehicleId, vehicleName) {
    cy.get(this.overviewPageLocator.btn_AddNewVehicle).scrollIntoView().click();
    cy.get(this.overviewPageLocator.vehicle_type(vehicleType)).first().click(); //small, medium, big,zug
    cy.get(this.overviewPageLocator.txt_vehicleId).type(vehicleId);
    cy.get(this.overviewPageLocator.txt_vehicleName).type(vehicleName);
    cy.get(this.overviewPageLocator.txt_vehiclePitchCapacity).type("10");
    cy.get(this.overviewPageLocator.btn_SaveVehicle)
      .should("be.enabled")
      .click();
  }

  editZoneorVehicle(zoneorVehicleEdit, editButton) {
    cy.get(zoneorVehicleEdit).then(($elements) => {
      if ($elements.length > 0) {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        cy.wrap($elements[randomIndex]).trigger("mouseover");
        cy.get(zoneorVehicleEdit)
          .eq(randomIndex)
          .find(editButton)
          .click({ force: true });
      }
    });
  }

  addNewStorage() {
    const { storageName } = generateRandomZoneData();
    cy.wait(2000);
    cy.get(this.overviewPageLocator.addorEditStorage).scrollIntoView().click();
    cy.get(this.overviewPageLocator.btn_AddNewStorage).should("be.visible").eq(0).click();
    cy.get(this.overviewPageLocator.txt_ZoneName).should("be.visible").type(storageName);
    cy.get(this.overviewPageLocator.txt_StorageRow).should("be.visible").type("1");
    cy.get(this.overviewPageLocator.txt_StoragePitchCapacity).should("be.visible").type("10");
    cy.get(this.overviewPageLocator.btn_SaveVehicle).eq(1).should("be.enabled").click();
  }
  enterStorageName() {
    const { storageName } = generateRandomZoneData();
    cy.get(this.overviewPageLocator.txt_ZoneName).should("be.visible").clear().type(storageName);
  }
  enterStorageRow() {
    const { StorageRowNumber } = generateRandomTwoDigitData();
    cy.get(this.overviewPageLocator.txt_StorageRow).should("be.visible").clear().type(StorageRowNumber);
  }

  enterStoragePitchCapacity() {
    const { StoragePitchCapacity } = generateRandomTwoDigitData();
    cy.get(this.overviewPageLocator.txt_StoragePitchCapacity).should("be.visible").clear().type(StoragePitchCapacity);
  }

  saveStorage() {
   
    cy.get(this.overviewPageLocator.btn_SaveVehicle).should("be.enabled").click();
  }

  clickAddDocument() {
    cy.wait(5000)
    cy.contains('ADD DOCUMENTS').scrollIntoView().click();

  }

  enterDocumentName(documentName) {
    cy.get(this.overviewPageLocator.txt_docName).type(documentName);
  }
  enterDocDescription(docDescription) {
    cy.get(this.overviewPageLocator.txt_docDescription).type(docDescription);
  }
  selectDocumentCoverPage() {
     cy.get(this.overviewPageLocator.coverPageSelection).should('be.visible').eq(1).click();
  }
  clickSaveDocument() {
    cy.wait(10000);
    cy.get(this.overviewPageLocator.btn_SaveDocument).eq(1).click({ force: true });
    cy.get(this.overviewPageLocator.loader).should("not.exist"); // Ensure the progress indicator is gone
  }
  
  verifyDocumentUpload(documentName) {
    cy.contains(documentName).should("exist");
  }

  clickSaveImageInphontos()
  {
    cy.get(this.overviewPageLocator.btn_SaveImage).click();
  }

  clickRemoveButton() {
    cy.get(this.overviewPageLocator.allImageList).should('exist').find(this.overviewPageLocator.btn_RemoveIcon).first().click();
  }
  clickRemoveButtonConfirm() {
        cy.get(this.overviewPageLocator.btn_ConfirmRemove).eq(1).click();
    }

   clickAddNewResponsiblePerson() {
    cy.get(this.overviewPageLocator.btn_AddNewResponsiblePerson).scrollIntoView().click();
    }
    enterResponsiblePersonName(name) {  
      cy.get(this.overviewPageLocator.txt_responsiblePersonName).should("be.visible").type(name);
    }
    enterResponsiblePersonEmail(email) {
      cy.get(this.overviewPageLocator.txt_responsiablePersonEmail).should("be.visible").type(email);
    }
    enterResponsiblePersonPhone(phone) {
      cy.get(this.overviewPageLocator.txt_responsiablePersonPhone).should("be.visible").type(phone);
    }
    saveResponsiblePerson() {
      cy.get(this.overviewPageLocator.btn_SaveResponsiblePerson).should("be.visible").click ({ force: true });
    }

}
