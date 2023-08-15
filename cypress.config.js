const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'https://hh.ru',
    projectId: "mhpy6x",
    defaultCommandTimeout: 100000,
  },
});
