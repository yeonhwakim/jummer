const shortid = require('shortid');

export const generateKey = () => shortid.generate() + Date.now();

export const filterItem = (items, key) => items.filter((item) => item.id === key)[0];
