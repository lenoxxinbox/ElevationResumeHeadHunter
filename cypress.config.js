const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
          const width = 2400
          const height = 1500
          console.log('setting the browser window size to', width, height);
          if (browser.name === 'chrome') {
            launchOptions.args.push(`--window-size=${width},${height}`)
            launchOptions.args.push('--force-device-scale-factor=1')
          };
          return launchOptions;
        })
    },
    baseUrl: 'https://hh.ru',
    projectId: "mhpy6x",
    defaultCommandTimeout: 100000,
  },
});
