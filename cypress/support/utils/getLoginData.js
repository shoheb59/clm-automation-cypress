export function getLoginDataByUrl(url) {
  if (url.includes('stage')) {
    return cy.fixture('loginDataStage.json');
  } else if (url.includes('local')) {
    return cy.fixture('loginDataDev.json');
  } else {
    throw new Error(`Unknown environment for URL: ${url}`);
  }
}


export function generateRandomZoneData() {
  const randomNum = Math.floor(1000 + Math.random() * 9000); // 1000–9999
  return {
    zoneId: `${randomNum}`,
    zoneName: `UPZone: ${randomNum}`,
    vehicleId: `${randomNum}`,
    vehicleName: `Vehicle: ${randomNum}`,
    storageName: `Storage: ${randomNum}`,
  };
}

export function generateRandomTwoDigitData() {
  const randomNum = Math.floor(1000 + Math.random() * 90); // 1000–9999
  return {
   StorageRowNumber: `${randomNum}`,
   StoragePitchCapacity: `${randomNum}`,
  };
}

 export function genearateRandomResponsiblePerson() { 
  const randomNum = Math.floor(1000 + Math.random() * 9000); // 1000–9999
  return {
    responsiblePersonName: `Person: ${randomNum}`,
    responsiblePersonEmail: `automateuser${randomNum}@yopmail.com`,
    responsiblePersonPhone: `+44909${randomNum}`,
    
  }
};