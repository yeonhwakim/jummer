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

export const voteItem = (key) => ({
  type: VOTE_ITEM,
  key,
});

export const getItem = () => ({ type: GET_ITEM });
