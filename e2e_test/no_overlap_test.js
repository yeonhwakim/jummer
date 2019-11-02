Feature('jummer test')

Scenario('vote test', (I) => {
  I.amOnPage('http://localhost:8000');

  I.fillField('.addInput', '치킨')
  I.click('.addBtn')
  I.see('치킨')
  I.seeElement('.addInput', value='')
  I.see('0', '.voteNumber');

  I.click('.voteNumber')
  I.see('1', '.voteNumber');

  I.fillField('.addInput', '피자')
  I.click('.addBtn')
  I.see('피자')
  I.seeElement('.addInput', value='')
  I.see('0', locate('.voteNumber').last());

  I.click(locate('.voteNumber').last())
  I.see('1', locate('.voteNumber').last());
  I.see('0', locate('.voteNumber').first());

  I.click(locate('.voteNumber').first())
  I.see('1', locate('.voteNumber').first());
  I.see('0', locate('.voteNumber').last());

  I.click(locate('.voteNumber').first())
  I.see('0', locate('.voteNumber').last());
})