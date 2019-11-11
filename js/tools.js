const shortid = require('shortid');

export const generateKey = () => {
  return shortid.generate() + Date.now()
}

export const sortItems = () => {
  
}