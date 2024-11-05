const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { allureCypress } = require ("allure-cypress/reporter");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  watchForFileChanges: false, 

  
  e2e: {
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  env: {
    URL: 'https://clm.selisestage.com/login'
  }
});
