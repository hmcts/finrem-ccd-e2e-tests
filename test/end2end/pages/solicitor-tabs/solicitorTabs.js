function solicitorTabs() {

  const I = this;
  I.wait(10);
  I.click('Applicant');
  I.wait(1);
  I.click('Respondent');
  I.wait(1);
  I.click('Divorce');
  I.wait(1);
  I.click('Nature of Application');
  I.wait(1);
  I.click('Authorisation');
  I.wait(1);
  I.click('Application documents');
  I.wait(1);
  I.click('Payment details');
  I.wait(10);


}

module.exports = { solicitorTabs };