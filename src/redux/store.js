import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import initialState from './initialState';
import listReducer from '../redux/listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

//selectors
//export const getFavoriteCards = state => state.cards.filter( card => card.isFavorite === true);
//export const getAllLists = state => state.lists;
//export const getColumnsByList = ({ columns }, listId) => columns.filter( column => column.listId === listId);
//export const getListById = ({ lists }, listId ) => lists.find( list => list.id === listId )
//export const getFilteredCards = ({ cards, searchString}, columnId) => cards
  //.filter(card => card.columnId === columnId && strContains( card.title, searchString ));
//export const getAllColumns = state => state.columns;
export const addColumn = payload => ({ type: 'app/columns/ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'app/cards/ADD_CARD', payload});
export const addSearchQuery = payload => ({ type: 'app/searchString/ADD_SEARCH', payload});
export const resetSearchQuery = () => ({type: 'app/searchString/RESET_SEARCH_QUERY'});
export const addList = payload => ({ type: 'app/lists/ADD_LIST', payload});
export const toggleFavorite = payload => ({ type: 'app/cards/TOGGLE_CARD_FAVORITE', payload});
export const deleteCard = payload => ({ type: 'app/cards/DELETE_CARD', payload});

const subreducers = {
    lists: listReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
};
const reducer = combineReducers(subreducers)

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;