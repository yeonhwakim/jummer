import store from './store';

test('initialState', () => {
  const { value, items, prevId } = store.getState();
  expect(value).toEqual('');
  expect(items).toEqual([]);
  expect(prevId).toEqual('');
});
