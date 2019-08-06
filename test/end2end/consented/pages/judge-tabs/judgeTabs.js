function judgeTabs() {

  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');

  I.click('Summary');
  I.wait(1);
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
  I.click('Case Documents');
  I.wait(1);
  I.see('OnlineForm.pdf');
  I.wait(5);
  I.click('Payment details');
  I.wait(1);
  I.click('Admin Notes');
  I.wait(1);
  I.click('Judiciary Outcome');
  I.wait(1);
  I.click('Orders');
  I.wait(1);
  I.see('GeneralOrder.pdf');
  I.wait(1);
  I.click('Notes');
  I.wait(1);
  I.see('Notes 1');
  // I.wait(10);


}

module.exports = { judgeTabs };