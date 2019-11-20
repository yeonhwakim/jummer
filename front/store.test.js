import store from './store';

test('initialState', () => {
  const { value, items, prevKey } = store.getState();
  expect(value).toEqual('');
  expect(items).toEqual({});
  expect(prevKey).toEqual('');
});
