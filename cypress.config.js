const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { allureCypress } = require("allure-cypress/reporter");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  watchForFileChanges: false,

  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      on('task', {
        reportAllureCypressSpecMessages: allureCypress.reportAllureCypressSpecMessages, // Corrected the function reference
        writeAllureResults: allureWriter.writeAllureResults // Make sure this task is also registered if needed
      });
    },
  },
  env: {
    URL: 'https://clm.selisestage.com/login'
  }
});
