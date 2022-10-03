const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout:60000,
  requestTimeout : 30000,
  numTestsKeptInMemory: 0,
  responseTimeout : 50000,
  pageLoadTimeout: 60000,
  reporter: "mochawesome",
  chromeWebSecurity: false,
  reporterOptions:{
    charts:true,
    overwrite:false,
    html:false,
    json:true,
    reportDir:"reports"
  },
  e2e: {
    baseUrl:"https://dev.p2p.alamisharia.co.id/",
    supportFile: "./cypress/support/e2e.js",
    specPattern: "./cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    watchForFileChanges:false,
    experimentalSessionAndOrigin: false,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chromium') {
          launchOptions.preferences.default['profile.default_content_setting_values.media_stream_camera'] = true
          launchOptions.preferences.default['profile.default_content_setting_values.media_stream_mic'] = true
          launchOptions.preferences.default['profile.default_content_setting_values.geolocation'] = true
          launchOptions.preferences.default['profile.default_content_setting_values.notifications'] = true
          launchOptions.args.push('--window-size=1280,720')
          launchOptions.args.push('--use-fake-device-for-media-stream')
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--js-flags=--expose-gc');
          } 
      })
    }
  }
});