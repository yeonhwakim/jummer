Feature('jummer test')

Scenario('vote test', (I) => {
  I.amOnPage('http://localhost:8000');
  I.fillField('.addInput', '치킨')
  I.click('.addBtn')
  I.see('치킨')
  I.seeElement('.addInput', value='')
  I.see('0', '.counter');
  I.click('.counter')
  I.see('1', '.counter');
  I.fillField('.addInput', '피자')
  I.click('.addBtn')
  I.see('피자')
  I.seeElement('.addInput', value='')
  I.see('0', locate('.counter').last());
  I.click(locate('.counter').last())
  I.see('1', locate('.counter').last());

  I.click(locate('.counter').first())
  I.see('2', locate('.counter').first());
  I.click(locate('.counter').last())
  I.see('2', locate('.counter').last());
})