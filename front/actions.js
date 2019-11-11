import { SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEM } from './actionTypes'

export const setItem = (value) => {
  return {
    type: SET_ITEM,
    value
  }
}

export const addItem = (item, key) => {
  return {
    type: ADD_ITEM,
    item,
    key,
  }
}

export const voteItem = (key) => {
  return {
    type: VOTE_ITEM,
    key
  }
}

export const getItem = () => {
  return { type: GET_ITEM }
}