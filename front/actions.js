import {
  SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEM,
} from './actionTypes';

export const setItem = (value) => ({
  type: SET_ITEM,
  value,
});

export const addItem = (item, key) => ({
  type: ADD_ITEM,
  item,
  key,
});

export const voteItem = (id) => ({
  type: VOTE_ITEM,
  id,
});

export const getItem = () => ({ type: GET_ITEM });
