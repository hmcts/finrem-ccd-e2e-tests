// const testConfig = require('test/config.js');

function respondentSolicitorDetailsDetails(I) {
  // I.wait(5);
 
  I.fillField('input[id="rSolicitorName"]', 'MahSol');
  I.fillField('input[id="rSolicitorFirm"]', 'MahFirm');
  I.fillField('input[id="rSolicitorReference"]', 'MahSol73');
  I.fillField('Enter a UK postcode', 'TW3 1SS');
  I.click('Find address');
  I.wait(5);
  I.selectOption('Select an address', '75 Pears Road, Hounslow');
  // I.wait(5);
  I.fillField('input[id="rSolicitorAddress_AddressLine2"]', 'Flat2');
  I.fillField('input[id="rSolicitorAddress_AddressLine3"]', 'Ring Road');
  I.fillField('input[id="rSolicitorAddress_County"]', 'Essex');
  I.fillField('input[id="rSolicitorPhone"]', '07889009908');
  I.fillField('input[id="rSolicitorEmail"]', 'vivrepondent@mailinator.com');
  I.fillField('input[id="rSolicitorDXnumber"]', '078890');
  // I.wait(5);
  I.waitForContinueButtonEnabled();
  I.click('Continue') ;
  // I.wait(5);
}

function consentedRespondentDetails(){
  const I = this;

  I.waitForPage('h4', 'RESPONDENT DETAILS');

  I.fillField('input[id="appRespondentFMName"]', 'kiv');
  I.fillField('input[id="appRespondentLName"]', 'resp');
  I.checkOption('input[id="appRespondentRep-Yes"]');
  I.wait(2);
  respondentSolicitorDetailsDetails();

}

function contestedRespondentDetails() {
  const I = this;

  I.waitForPage('#respondentDetailsLabel h2', 'Respondent’s Details');

  I.fillField('input[id="respondentFMName"]', 'Mary');
  I.fillField('input[id="respondentLName"]', 'Whisper');
  I.waitForContinueButtonEnabled();
  I.click('Continue');
  I.waitForPage('#respondentRepresentedLabel h2', 'Is the respondent represented ?');
  I.checkOption('input[id="respondentRepresented-Yes"]');
  I.wait(2);
  respondentSolicitorDetailsDetails(I);

}

module.exports = { consentedRespondentDetails, contestedRespondentDetails };
