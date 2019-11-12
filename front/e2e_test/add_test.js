Feature('jummer test');

Scenario('add test', (I) => {
  I.amOnPage('http://localhost:8000');
  I.fillField('.addInput', '치킨');
  I.click('.addBtn');
  I.see('치킨');
  I.seeElement('.addInput', value = '');
});
