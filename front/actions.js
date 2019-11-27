import axios from 'axios';
import {
  SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEMS,
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

export const reqItems = () => (dispatch) => {
  const id = '12GKiQpU4HnT1H_oQRcP9j7i1bcYW1G2t6FrUSoBLFas';
  const url = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;
  axios(url)
    .then((resItems) => dispatch(getItems(resItems)));
};

export const getItems = (resItems) => ({
  type: GET_ITEMS,
  resItems,
});
