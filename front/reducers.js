import { produce } from 'immer';
import {
  SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEMS, UPDATE_PREVID,
} from './actionTypes';

export const initialState = {
  roomId: '1',
  value: '',
  items: [],
  prevId: '',
};

export const reducer = (prevState = initialState, action) => produce(prevState, (draft) => {
  switch (action.type) {
    case SET_ITEM: {
      draft.value = action.value;
      return draft;
    }

    case GET_ITEMS: {
      draft.items = action.resItems;
      return draft;
    }

    case ADD_ITEM: {
      draft.items.unshift({
        id: action.key, key: action.key, name: action.name, count: 0,
      });
      draft.value = '';
      return draft;
    }

    case VOTE_ITEM: {
      draft.items = action.items;
      return draft;
    }

    case UPDATE_PREVID: {
      draft.prevId = action.currId;
      return draft;
    }

    default: {
      return draft;
    }
  }
  // return false;
});
