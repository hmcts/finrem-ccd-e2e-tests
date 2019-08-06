const testConfig = require('test/config.js');

exports.config = {

  tests: './**/consentedJourneys/consentedE2EHwfJourney.js',
  output: `${process.cwd()}/functional-output`,
  helpers: {
    Puppeteer: {
      url: testConfig.TestFrontendUrl || 'https://www-ccd.aat.platform.hmcts.net/',
      waitForTimeout: 5000,
      waitForAction: 2000,
      getPageTimeout: 30000,
      show: true,
      waitForNavigation: 'networkidle0',
      ignoreHTTPSErrors: true,
      headless: false,
      chrome: {
        ignoreHTTPSErrors: true,
        args: [
          '--no-sandbox',
          '--proxy-server=proxyout.reform.hmcts.net:8080'
        ]
      }

    }
  },
  include: { I: './consented/pages/steps.js' },
  mocha: {
    reporterOptions: {
      reportDir: process.env.E2E_OUTPUT_DIR || './functional-output',
      reportName: 'FinremSolTests',
      inlineAssets: true
    }
  },
  name: 'Finrem Sol Tests'
};
