import { SET_ITEM, ADD_ITEM, VOTE_ITEM } from './actionTypes'

const initialState = {
  value: '',
  items: []
}

export const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case SET_ITEM : 
        return {
        ...prevState,
        value: action.value
      };
    case ADD_ITEM : 
      return {
      ...prevState,
      items: [...prevState.items, {name: action.item, counter: 0}],
      value: ''
    };  
    case VOTE_ITEM : 
      const index = action.index 
      const items = [...prevState.items]
      const item = items[index]
      const updateCounter = item.counter + 1
      items[index].counter = updateCounter
      return {
        ...prevState,
        items
      };
    default:
      return prevState
  }

}