// const testConfig = require('test/config.js');

function checkYourAnswers() {
  const I = this;
  I.wait(5);
  I.see('SOLICITOR DETAILS');
  I.see('DIVORCE DETAILS');
  I.see('APPLICANT DETAILS');
  I.see('RESPONDENT DETAILS');
  I.wait(10);
  I.click('Submit');
  I.wait(10);
}

module.exports = { checkYourAnswers };
