import { legacy_createStore as createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
    console.log('Current State:', state);
    console.log('initialState:', initialState);
    return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;