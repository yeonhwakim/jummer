import { produce } from 'immer';
import {
  SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEMS,
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
      const prevItems = draft.items;

      const currId = action.id;
      const { prevId } = prevState;

      const updateCounter = (current, currentId, previousId) => {
        const item = prevItems
          .filter((prevItem) => prevItem.id === (current ? currentId : previousId))[0];
        const counter = current
          ? currentId === previousId
            ? item.counter - 1 : item.counter + 1
          : item.counter - 1;
        item.counter = counter;
      };

      updateCounter(true, currId, prevId);

      if (prevId !== '' && currId !== prevId) {
        updateCounter(false, currId, prevId);
      }

      draft.items = prevItems;
      draft.prevId = currId === prevId ? '' : currId;
      return draft;
    }
    case GET_ITEMS: {
      draft.items = action.res_items;
      return draft;
    }
    default: {
      return prevState;
    }
  }
  // return false;
});
