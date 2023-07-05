const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'bpip81',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      // new TestRailReporter(on, config).register()
      return config;
      // implement node event listeners here
    },
    

    specPattern: 'cypress/e2e/streamstudio/*',
    defaultCommandTimeout: 65000,
    reporter: 'mochawesome',
    reporterOptions: {
     reportDir: 'cypress/results',
     overwrite: false,
     html: true,
     json: true,
     timestamp: "ddmmyyyy_HHMMss"

  },
}
});
