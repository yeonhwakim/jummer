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

export const getItems = () => ({
  type: GET_ITEMS,
  res_items: [
    {
      id: 'asdqwe!@#',
      key: 'asdqwe!@#',
      name: '치킨',
      counter: 0,
    },
    {
      id: 'ewqdsa#@!',
      key: 'ewqdsa#@!',
      name: '피자',
      counter: 1,
    },
    {
      id: 'eqwdaw!@###',
      key: 'eqwdaw!@###',
      name: '과자',
      counter: 0,
    },
  ],
});

export const reqItems = () => () => {
  // const id = '12GKiQpU4HnT1H_oQRcP9j7i1bcYW1G2t6FrUSoBLFas';
  // const url = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;

  // axios.get(url)
  //   .then((response) => response)
  //   .catch((error) => console.log(error));
};
// { type: REQ_ITEMS }
