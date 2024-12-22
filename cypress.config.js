const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1300, // Set the viewport width
    viewportHeight: 1280, // Set the viewport height
  },
});
