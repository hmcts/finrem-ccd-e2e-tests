
function pbaPaymentDetails() {
  const I = this;
  I.waitForPage('#caseEditForm span.form-label', 'Enter your account number');
  I.fillField('input[id="PBANumber"]', 'PBA0088063');
  I.fillField('input[id="PBAreference"]', 'reference');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { pbaPaymentDetails };
