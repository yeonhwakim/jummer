import { produce } from 'immer';
import {
  SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEM,
} from './actionTypes';

const initialState = {
  value: '',
  items: {},
  prevKey: '',
};

export const reducer = (prevState = initialState, action) => produce(prevState, (draft) => {
  switch (action.type) {
    case SET_ITEM: {
      draft.value = action.value;
      break;
    }
    case ADD_ITEM: {
      draft.items[action.key] = { name: action.item, counter: 0 };
      draft.value = '';
      break;
    }
    case VOTE_ITEM: {
      const { items } = draft;

      const currKey = action.key;
      const { prevKey } = prevState;

      const currItem = items[currKey];
      const updateCounter = currKey === prevKey ? currItem.counter - 1 : currItem.counter + 1;
      items[currKey].counter = updateCounter;

      if (prevKey !== '' && currKey !== prevKey) {
        const prevItem = items[prevKey];
        const backCounter = prevItem.counter - 1;
        items[prevKey].counter = backCounter;
      }

      draft.items = items;
      draft.prevKey = currKey === prevKey ? '' : action.key;
      break;
    }
    case GET_ITEM: {
      break;
    }
    default: {
      return prevState;
    }
  }
  return false;
});
