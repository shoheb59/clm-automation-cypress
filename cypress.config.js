const { defineConfig } = require("cypress");

module.exports = defineConfig({

  watchForFileChanges: false, 

  
  e2e: {
    defaultCommandTimeout: 10000, 
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:
  {
    URL: 'http://clm.seliselocal.com/login'
  }
  
});
