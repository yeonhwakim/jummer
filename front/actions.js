import {
  SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEMS, UPDATE_ITEM, UPDATE_PREVID,
} from './actionTypes';

export const setItem = (value) => ({
  type: SET_ITEM,
  value,
});

export const addItem = (name, key) => ({
  type: ADD_ITEM,
  name,
  key,
});

export const getItems = (resItems) => ({
  type: GET_ITEMS,
  resItems,
});

export const voteItem = (items) => ({
  type: VOTE_ITEM,
  items,
});

export const updateItem = (currId, prevId) => ({
  type: UPDATE_ITEM,
  currId,
  prevId,
});

export const updatePrevId = (currId) => ({
  type: UPDATE_PREVID,
  currId,
});

export const joinRoom = () => ({
  type: 'socket',
  emit: 'join',
  data: { room: 'a' },
});

export const reqAddItem = (item, key) => ({
  type: 'socket',
  emit: 'reqAddItem',
  data: {
    room: 'a', name: item, id: key, key,
  },
});

export const reqVoteItem = (id, prevId) => ({
  type: 'socket',
  emit: 'reqVoteItem',
  data: {
    room: 'a', id, counter: window.user, prevId,
  },
});
