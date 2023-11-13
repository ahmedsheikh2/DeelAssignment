import { test, expect } from '@playwright/test';
import Deel from './Pages/salary-insights';
import testData from '../tests/testdata/testData.json'

test('Salary Insights Tests', async ({ page }) => {
  const deelpage = new Deel(page)
;

 await page.goto('https://growth.deel.training/dev/salary-insights');

 await deelpage.typeRole(testData.roles[0])
 await deelpage.selectAccountant();
 await deelpage.typeBrazil(testData.countries[0]);
 await deelpage.selectBrazil();
 await deelpage.clickSearchButton();
 await expect(deelpage.getaccountantAssertionMessage()).toHaveText('Senior Accountant compensation in Brazil');

 await deelpage.typeRole(testData.roles[1])
 await deelpage.selectQAEngineer();
 await deelpage.typeCanada(testData.countries[1]);
 await deelpage.selectCanada();
 await deelpage.clickSearchButton();
 await expect(deelpage.getqaAssertionMessage()).toHaveText('Senior QA Engineer compensation in Canada');

 await deelpage.typeRole(testData.roles[2])
 await deelpage.selectSoftwareEngineer();
 await deelpage.typeJapan(testData.countries[2]);
 await deelpage.selectJapan();
 await deelpage.clickSearchButton();
 await expect(deelpage.getsoftwareEngineerAssertionMessage()).toHaveText('Senior Software Engineer compensation in Japan');

});

