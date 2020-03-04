var { getContestedScenarioState } = require('../dataSetup/scenarios/scenarioState');

Feature('finrem contested e2e Journeys');
const testConfig = require('test/config.js');
const dateUtil = require('test/end2end/helpers/dateUtil.js');
const searchCaseType = 'Contested Financial Remedy';

var scenarioSolref = '';
Scenario('Verify Contestd E2E Path Judge Draft Order', async (I) => {

  scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();

  await getContestedScenarioState('Application Drafted', scenarioSolref);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.wait(2);
  await I.searchCase(scenarioSolref, searchCaseType);

  asCaseWorker(I);
  await I.contestedNextStep( 'Manual Payment');
  await I.contestedNextStep( 'Issue Application');
  await I.contestedNextStep( 'Allocate to Judge');

  asJudge(I);
  await I.contestedNextStep('Give Allocation Directions');

  asCaseWorker(I);
  var isFastTrack = await I.grabTextFrom('#tabFastTrackDecision');
  console.log('Case is Fats Tract : ' + isFastTrack + ' - ');
  await I.contestedNextStep('List for Hearing|');

  asSolicitor(I);
  await I.contestedNextStep('Submit Uploaded Case Files');

  asJudge(I);
  await I.contestedNextStep('Judge To Draft Order');
  await I.contestedNextStep('Upload Draft Order|Judge');

  asCaseWorker(I);
  await I.contestedNextStep('Upload Order');
  await I.contestedNextStep('Send Order');
  await I.contestedNextStep('Close Case');

});


Scenario('Verify Contested E2E Path Solicitor Draft Order', async (I) => {

  scenarioSolref = 'AUTO-' + dateUtil.createSolicitorReference();
  // const scenarioSolref = 'AUTO-1567757724725';

  await getContestedScenarioState('Application Drafted', scenarioSolref);

  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.wait(2);
  await I.searchCase(scenarioSolref, searchCaseType);

  asCaseWorker(I);
  await I.contestedNextStep('Manual Payment');
  await I.contestedNextStep('Issue Application');
  await I.contestedNextStep('Allocate to Judge');

  asJudge(I);
  await I.contestedNextStep('Give Allocation Directions');

  asCaseWorker(I);

  await I.contestedNextStep('List for Hearing|' );

  asSolicitor(I);
  await I.contestedNextStep('Submit Uploaded Case Files');

  asJudge(I);
  await I.contestedNextStep('Solicitor To Draft Order');


  asSolicitor(I);
  await I.contestedNextStep('Upload Draft Order');


  asJudge(I);
  await I.contestedNextStep('Draft Order Approved');


  asCaseWorker(I);
  await I.contestedNextStep('Upload Order');
  await I.contestedNextStep('Send Order');
  await I.contestedNextStep('Close Case');

});


async function asSolicitor(I){
  I.wait(2);
  I.click('//a[text() = "Sign Out"]');
  I.wait(2);
  I.signinIdam(testConfig.TestSolicitorUserName, testConfig.TestSolicitorPassword);
  I.wait(2);
  I.searchCase(scenarioSolref, searchCaseType);
  I.wait(2);

}

async function asCaseWorker(I) {
  I.wait(2);
  I.click('//a[text() = "Sign Out"]');
  I.wait(2);
  I.signinIdam(testConfig.TestCaseWorkerUserName, testConfig.TestCaseWorkerPassword);
  I.wait(2);
  I.searchCase(scenarioSolref, searchCaseType);
  I.wait(2);
}

async function asJudge(I) {
  I.wait(2);
  I.click('//a[text() = "Sign Out"]');
  I.wait(2);
  I.signinIdam(testConfig.TestJudgeUserName, testConfig.TestJudgePassword);
  I.wait(2);
  I.searchCase(scenarioSolref, searchCaseType);
  I.wait(2);
}
