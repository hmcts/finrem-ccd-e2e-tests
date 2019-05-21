function contestedOptionsPage(){
  const I = this;
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Amend Application Details');
  I.wait(5);
  I.click('Go');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.fillField('input[id="applicantSolicitorPhone"]', '07766120000');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.fillField('input[id="divorceCaseNumber"]', 'EM18D84321');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.fillField('input[id="rSolicitorEmail"]', 'mahamend@mailinator.com');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="natureOfApplicationChecklist-propertyAdjustmentOrder"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="benefitPaymentChecklist-The child or the person with care of the child or the absent parent of the child is not habitually resident in the United Kingdom"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="fastTrackDecisionReason-reason_1"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="estimatedAssetsChecklist-estimatedAssetsChecklist_1"]');
  I.wait(5);
  I.checkOption('input[id="potentialAllegationChecklist-potentialAllegationChecklist_7"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="isApplicantsHomeCourt-Yes"]');
  I.wait(5);
  I.fillField('#reasonForLocalCourt', 'testing');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_22"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_21"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_20"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_19"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_18"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_17"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_16"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_15"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_13"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_12"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_11"]');
  I.checkOption('input[id="MIAMDomesticViolenceChecklist-FR_ms_MIAMDomesticViolenceChecklist_Value_10"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_5"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_4"]');
  I.checkOption('input[id="MIAMUrgencyReasonChecklist-FR_ms_MIAMUrgencyReasonChecklist_Value_3"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="MIAMPreviousAttendanceChecklist-FR_ms_MIAMPreviousAttendanceChecklist_Value_1"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.checkOption('input[id="MIAMOtherGroundsChecklist-FR_ms_MIAMOtherGroundsChecklist_Value_6"]');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.click('Continue');
  I.wait(5);
  I.see('Solicitor Details');
  I.see('Divorce Details');
  I.see('Applicant’s Details');
  I.see('Respondent’s Details');
  I.see('Is the respondent represented ?');
  I.see('Do you want to upload any other documents ?');
  I.wait(10);
  I.click('Submit');
  I.wait(5);
  I.see('Amend Application Details');
  I.wait(10);
  I.selectOption('select[id="next-step"]', 'Case Submission');
  I.wait(10);
  I.click('Go');
  I.wait(10);
}

module.exports = { contestedOptionsPage };