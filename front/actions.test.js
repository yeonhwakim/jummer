import {
  setItem,
  addItem,
  voteItem,
  getItems,
} from './actions';

import {
  SET_ITEM,
  ADD_ITEM,
  VOTE_ITEM,
  GET_ITEMS,
} from './actionTypes';

test('setItem', () => {
  expect(setItem('치킨').type).toEqual(SET_ITEM);
});

test('addItem', () => {
  expect(addItem('치킨', 'key').type).toEqual(ADD_ITEM);
});

test('voteItem', () => {
  expect(voteItem('key').type).toEqual(VOTE_ITEM);
});

test('getItems', () => {
  expect(getItems().type).toEqual(GET_ITEMS);
});

