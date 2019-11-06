import { SET_ITEM, ADD_ITEM } from './actionTypes'

export const setItem = (value) => {
  return {
    type: SET_ITEM,
    value
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item
  }
}