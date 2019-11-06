import { SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEM } from './actionTypes'

const initialState = {
  value: '',
  items: [],
  prevIndex: ''
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
      items: [{name: action.item, counter: 0}, ...prevState.items],
      value: ''
    };  
    case VOTE_ITEM : 
      const items = [...prevState.items]

      const currIndex = action.index 
      const prevIndex = prevState.prevIndex 

      const currItem = items[currIndex]
      const updateCounter = currIndex === prevIndex ? currItem.counter - 1 : currItem.counter + 1
      items[currIndex].counter = updateCounter
      
      if (prevIndex !== '' && currIndex !== prevIndex) {
        const prevItem = items[prevIndex]
        const backCounter = prevItem.counter - 1
        items[prevIndex].counter = backCounter
      }

      return {
        ...prevState,
        items,
        prevIndex: currIndex === prevIndex ? '' : action.index
      };
    case GET_ITEM : 
      return {
        ...prevState
      };
    default:
      return prevState
  }

}