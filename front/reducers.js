import { produce } from 'immer';
import {
  SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEM,
} from './actionTypes';

export const initialState = {
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
    case ADD_ITEM: {
      draft.items.unshift({
        id: action.key, key: action.key, name: action.item, counter: 0,
      });
      draft.value = '';
      return draft;
    }
    case VOTE_ITEM: {
      const items = draft.items;

      const currId = action.id;
      const { prevId } = prevState;

      const updateCounter = (current, currId, prevId) => {
        const Item = items.filter((item) => item.id === (current ? currId : prevId))[0];
        const counter = current
          ? currId === prevId
            ? Item.counter - 1 : Item.counter + 1
          : Item.counter - 1;
        Item.counter = counter;
      };

      updateCounter(true, currId, prevId);

      if (prevId !== '' && currId !== prevId) {
        updateCounter(false, currId, prevId);
      }

      draft.items = items;
      draft.prevId = currId === prevId ? '' : currId;
      return draft;
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
