
function contestedPbaPayment() {
  const I = this;
  I.waitForPage('#PBANumber');
  I.fillField('input[id="PBANumber"]', 'PBA0088063');
  I.fillField('input[id="PBAreference"]', 'reference');
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
}

module.exports = { contestedPbaPayment };
