function respondOrder(){
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Respond To Order');
  I.wait(10);
  I.click('Go');
  I.wait(10);
  I.click('Add new');
  I.wait(10);
  I.selectOption('select[id=respondToOrderDocuments_0_DocumentType]', 'ApplicantLetterEmail');
  I.wait(10);
  I.attachFile('input[type="file"]', 'data/fileupload.txt');
  I.wait(10);
  I.fillField('input[id="respondToOrderDocuments_0_DocumentDateAdded-day"]', '12');
  I.wait(2);
  I.fillField('input[id="respondToOrderDocuments_0_DocumentDateAdded-month"]', '2');
  I.wait(2);
  I.fillField('input[id="respondToOrderDocuments_0_DocumentDateAdded-year"]', '2019');
  I.wait(10);
  I.fillField('#respondToOrderDocuments_0_DocumentFileName', 'test file');
  I.wait(2);
  I.click('Continue');
  I.wait(10);
  I.click('Continue');
  I.wait(10);
  I.click('Submit');
  I.wait(10);

}


module.exports = { respondOrder };