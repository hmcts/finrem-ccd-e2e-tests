function updateDueDate() {

  const I = this;
  // I.wait(10);
  I.waitForPage('.EventLogTable h2', 'History');

  I.selectOption('select[id="next-step"]', 'Update Due Date');
  I.wait(1);
  I.click('Go');
  // I.wait(10);
  I.waitForElement('#dueDate',30);
  I.fillField('input[id="dueDate-day"]', '5');
  I.fillField('input[id="dueDate-month"]', '3');
  I.fillField('input[id="dueDate-year"]', '2019');
  // I.wait(10);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(10);
  I.waitForElement('#field-trigger-summary',30);
  I.click('Submit');
  // I.wait(10);


}

module.exports = { updateDueDate };