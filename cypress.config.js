const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  watchForFileChanges: false,
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    env: {
      URL: 'https://clm.selisestage.com',
      ALLURE_RESULTS_PATH: 'allure-results', // Optional: configure as needed
    },
    setupNodeEvents(on, config) {
      // Set up Allure plugin
      allureWriter(on, config);

      // Ensure task setup for Allure to handle messages
      on('task', {
        writeAllureResults: () => {
          return null; // Placeholder for writing Allure results, provided by the plugin
        },
        reportAllureCypressSpecMessages: () => {
          return null; // Placeholder for report handling, if needed
        },
        reportFinalAllureCypressSpecMessages: () => {
          return null; // Ensuring the final report task is registered to avoid errors
        },
      });

      return config;
    },
    baseUrl: 'http://clm.selisestage.com',
  },
};
