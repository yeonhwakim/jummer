import { SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEM } from './actionTypes'

export const setItem = (value) => {
  return {
    type: SET_ITEM,
    value
  }
}

export const addItem = (item, index) => {
  return {
    type: ADD_ITEM,
    item
  }
}

export const voteItem = (index) => {
  return {
    type: VOTE_ITEM,
    index
  }
}

export const getItem = () => {
  return { type: GET_ITEM }
}