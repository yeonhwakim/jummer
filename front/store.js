import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
