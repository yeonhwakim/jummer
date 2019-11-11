const { createVoteRoom } = require('./voteRoom');

test('getItems', () => {
  const voteRoom = createVoteRoom();
  expect(voteRoom.getItems()).toEqual([]);
});

test('addItem', () => {
  const voteRoom = createVoteRoom();
  voteRoom.addItem('김밥천국');
  voteRoom.addItem('역전우동');
  expect(voteRoom.getItems()).toEqual([
    {
      id: 1,
      name: '김밥천국',
      count: 0,
    },
    {
      id: 2,
      name: '역전우동',
      count: 0,
    },
  ]);
});
