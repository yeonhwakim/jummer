import { produce } from 'immer'
import { SET_ITEM, ADD_ITEM, VOTE_ITEM, GET_ITEM } from './actionTypes'

const initialState = {
  value: '',
  items: [],
  prevIndex: ''
}

export const reducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case SET_ITEM : 
        draft.value = action.value
        break
      case ADD_ITEM :
        draft.items.unshift({name: action.item, counter: 0})
        draft.value = ''
        break
      case VOTE_ITEM : 
        const items = draft.items
  
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
        
        draft.items = items
        draft.prevIndex = currIndex === prevIndex ? '' : action.index
        break
      case GET_ITEM : 
        break
      default:
        return prevState
    }
  })
}