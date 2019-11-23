import { reducer, initialState } from './reducers';

import {
  setItem, addItem, voteItem, getItem,
} from './actions';

import { generateKey } from './js/tools';

test('setItem', () => {
  const state = reducer(initialState, setItem('치킨'));

  expect(state.value).toEqual('치킨');
});

test('addItem', () => {
  const key = generateKey();
  const state = reducer(initialState, addItem('치킨', key));

  const { name, counter } = state.items[key];

  expect(state.value).toEqual('');
  expect(name).toEqual('치킨');
  expect(counter).toEqual(0);
});

test('firstVote', () => {
  const key1 = generateKey();
  const key2 = generateKey();

  const initState = {
    items: {
    },
    prevKey: '',
  };

  initState.items[key1] = {
    item: '치킨',
    counter: 0,
  };
  initState.items[key2] = {
    item: '피자',
    counter: 0,
  };

  const state = reducer(initState, voteItem(key1));

  const { items, prevKey } = state;

  expect(items[key1].counter).toBe(1);
  expect(prevKey).toBe(key1);
});

test('cancelVote', () => {
  const voteKey = generateKey();
  const initState = {
    items: {},
    prevKey: voteKey,
  };

  initState.items[voteKey] = {
    item: '치킨',
    counter: 1,
  };

  const state = reducer(initState, voteItem(voteKey));

  const { items, prevKey } = state;

  expect(items[voteKey].counter).toEqual(initState.items[voteKey].counter - 1);
  expect(prevKey).toEqual('');
});

test('anotherItemVote', () => {
  const key1 = generateKey();
  const key2 = generateKey();
  const initState = {
    items: {},
    prevKey: key2,
  };

  initState.items[key1] = {
    item: '치킨',
    counter: 0,
  };
  initState.items[key2] = {
    item: '피자',
    counter: 1,
  };

  const state = reducer(initState, voteItem(key1));

  const { items, prevKey } = state;

  expect(items[key1].counter).toEqual(initState.items[key1].counter + 1);
  expect(items[key2].counter).toEqual(initState.items[key2].counter - 1);
  expect(prevKey).toEqual(key1);
});

test('getItem', () => {
  const initState = {
    items: {
      1: {
        item: '치킨',
        counter: 1,
      },
    },
    prevKey: 1,
  };

  const state = reducer(initState, getItem());

  expect(state).toEqual(false);
});
