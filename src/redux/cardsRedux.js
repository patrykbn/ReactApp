import shortid from "shortid";
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains( card.title, searchString ));
  export const getFavoriteCards = ({cards}) => cards.filter( card => card.isFavorite === true);
//actions
const createActionName = actionName => `app/cards/${actionName}`;
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const ADD_CARD = createActionName('ADD_CARD');
const DELETE_CARD = createActionName('DELETE_CARD');


//action creators
const cardsReducer = ( statePart = [], action) => {
    switch (action.type) {
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card =>
                card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card);
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid(), isFavorite: false }];
        case DELETE_CARD:
            return statePart.filter(card => card.id !== action.payload)
        default:
            return statePart;
    }
};

export default cardsReducer;