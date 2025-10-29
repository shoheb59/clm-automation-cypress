import { shipmentPage } from "../../pages/CLM/shipmentPage.js";
import vehicleData from "../../fixtures/vehicleData.json";


const shipmentOBJ = new shipmentPage();
const vehicleName = vehicleData.vehicleNames[0] || "Manual Unloading";


 export function discardAndRestartShipment() {
    shipmentOBJ.clickDiscardButton() // your defined function to cancel/discard shipment

    // Restart process
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.verifySlotInactive();
  }

  export function createDuplicateShipment() {
    
    shipmentOBJ.clickAddshipment();
    shipmentOBJ.selectDateFromCalender();
    shipmentOBJ.clickNextStep1();
    shipmentOBJ.selectMaterial();
    shipmentOBJ.clickNextStep2();
    shipmentOBJ.selectVehicle(vehicleName);
    shipmentOBJ.clickNextStep3();
    shipmentOBJ.selectNonBookableequip();
    shipmentOBJ.selectUp();
    shipmentOBJ.verifySlotInactive();
  }
