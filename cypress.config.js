
const { allureCypress } = require ("allure-cypress/reporter");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  watchForFileChanges: false, 

  
  e2e: {
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
      // implement node event listeners here
    },
  },
  env:
  {
    URL: 'https://clm.selisestage.com/login'
      
  }
  
});
