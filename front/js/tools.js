const shortid = require('shortid');

export const generateKey = () => shortid.generate() + Date.now();
