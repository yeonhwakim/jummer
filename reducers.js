import { SET_ITEM, ADD_ITEM } from './actionTypes'

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
    default:
      return prevState
  }

}