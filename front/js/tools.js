const shortid = require('shortid');

export const generateKey = () => shortid.generate() + Date.now();

export const generateId = () => shortid.generate();

export const filterItem = (items, key) => items.filter((item) => item.id === key)[0];

export const createMock = (resItems) => {
  const items = resItems.data.feed.entry;
  const mockData = items.map((row) => {
    const id = row['gsx$id'].$t;
    const key = row['gsx$key'].$t;
    const name = row['gsx$name'].$t;
    const counter = parseInt(row['gsx$counter'].$t, 10);
    return {
      id,
      key,
      name,
      counter,
    };
  });
  return mockData;
};
