function applicationNotApproved() {
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Application Not Approved');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Add new');
  I.wait(10);
  I.fillField('#orderRefusalCollection_0_orderRefusalAfterText', 'Test for And After text box');
  I.wait(5);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Insufficient information provided – A"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Insufficient information provided – B"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Insufficient information provided – C"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Insufficient information provided – D"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Insufficient information provided – E"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Pension annex"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Respondent – independent legal advice"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-The D81 incomplete"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Hearing fixed for first available date"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Transferred to Applicant’s home Court"]');
  I.wait(2);
  I.checkOption('input[value="Transferred to Applicant\'s home Court"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Order does not appear fair"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Provide pension values/property"]');
  I.wait(2);
  I.checkOption('input[id="orderRefusalCollection_0_orderRefusal-Other (please specify)"]');
  I.wait(10);
  I.fillField('#orderRefusalCollection_0_orderRefusalOther', 'Fill with black ink');
  I.wait(10);
  I.selectOption('select[id="orderRefusalCollection_0_orderRefusalJudge"]', 'District Judge');
  I.wait(5);
  I.fillField('#orderRefusalCollection_0_orderRefusalJudgeName', 'santha');
  I.wait(5);
  I.fillField('input[id="orderRefusalCollection_0_orderRefusalDate-day"]', '3');
  I.fillField('input[id="orderRefusalCollection_0_orderRefusalDate-month"]', '4');
  I.fillField('input[id="orderRefusalCollection_0_orderRefusalDate-year"]', '2019');
  I.wait(5);
  I.fillField('#orderRefusalCollection_0_orderRefusalAddComments', 'Please justify for FR');
  I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  I.wait(10);
  I.click('Submit');
  I.wait(10);
}


module.exports = { applicationNotApproved };
