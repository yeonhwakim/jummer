import { reducer, initialState } from './reducers';

import {
  setItem, addItem, voteItem, getItems,
} from './actions';

import { generateKey, filterItem } from './js/tools';

test('setItem', () => {
  const state = reducer(initialState, setItem('치킨'));

  expect(state.value).toEqual('치킨');
});

test('addItem', () => {
  const key = generateKey();
  const state = reducer(initialState, addItem('치킨', key));

  const { name, counter } = filterItem(state.items, key);
  expect(state.value).toEqual('');
  expect(name).toEqual('치킨');
  expect(counter).toEqual(0);
});

test('firstVote', () => {
  const key1 = generateKey();
  const key2 = generateKey();

  const initState = {
    items: [
      {
        id: key1,
        key: key1,
        item: '치킨',
        counter: 0,
      },
      {
        id: key2,
        key: key2,
        item: '피자',
        counter: 0,
      },
    ],
    prevId: '',
  };

  const state = reducer(initState, voteItem(key1));

  const { items, prevId } = state;

  expect(filterItem(items, key1).counter).toBe(1);
  expect(prevId).toBe(key1);
});

test('cancelVote', () => {
  const key = generateKey();
  const initState = {
    items: [
      {
        id: key,
        key,
        item: '치킨',
        counter: 1,
      },
    ],
    prevId: key,
  };

  const state = reducer(initState, voteItem(key));

  const { items, prevId } = state;

  expect(filterItem(items, key).counter).toEqual(filterItem(initState.items, key).counter - 1);
  expect(prevId).toEqual('');
});

test('anotherItemVote', () => {
  const key1 = generateKey();
  const key2 = generateKey();

  const initState = {
    items: [
      {
        id: key1,
        key: key1,
        item: '치킨',
        counter: 0,
      },
      {
        id: key2,
        key: key2,
        item: '피자',
        counter: 1,
      },
    ],
    prevId: key2,
  };

  const state = reducer(initState, voteItem(key1));

  const { items, prevId } = state;

  expect(filterItem(items, key1).counter).toEqual(filterItem(initState.items, key1).counter + 1);
  expect(filterItem(items, key2).counter).toEqual(filterItem(initState.items, key2).counter - 1);
  expect(prevId).toEqual(key1);
});

test('getItemsFirst', () => {
  const initState = {
    items: [],
  };

  const resItems = [
    {
      id: 'asdqwe!@#',
      key: 'asdqwe!@#',
      name: '치킨',
      counter: 0,
    },
    {
      id: 'ewqdsa#@!',
      key: 'ewqdsa#@!',
      name: '피자',
      counter: 1,
    },
    {
      id: 'eqwdaw!@###',
      key: 'eqwdaw!@###',
      name: '과자',
      counter: 0,
    },
  ];
  
  const state = reducer(initState, getItems(resItems));
  expect(filterItem(state.items, 'asdqwe!@#').name).toBe('치킨');
});
