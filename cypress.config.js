const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/userLogin.cy.js', 
        'cypress/e2e/gettingUserList.cy.js',
        'cypress/e2e/creatingUser.cy.js',
        'cypress/e2e/deletingUser.cy.js'
      ]
      return config;
    },
  },
});
