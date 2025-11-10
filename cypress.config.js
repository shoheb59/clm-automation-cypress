const { allureCypress } = require("allure-cypress/reporter");

module.exports = {
  retries: 2,
  watchForFileChanges: false,
  e2e: {
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 50000,
    env: {
      URL: 'https://clm.selisestage.com',
      //URL: "http://clm.seliselocal.com",
    },
    setupNodeEvents(on, config) {
      // Set up Allure plugin
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: "http://clm.selisestage.com",
    specPattern: [
      "cypress/e2e/tests/CLM/teamTest.cy.js",
      "cypress/e2e/tests/CLM/materialTest.cy.js",
      "cypress/e2e/tests/CLM/equipmentTest.cy.js",
      "cypress/e2e/tests/CLM/logisticTest.cy.js",
      "cypress/e2e/tests/CLM/shipmentTest.cy.js",
      "cypress/e2e/tests/CLM/createMultipleShipment.cy.js",
    ],
  },
};
