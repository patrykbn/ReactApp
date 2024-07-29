//selectors

//actions
const createActionName = actionName => `app/searchString/${actionName}`;
const ADD_SEARCH = createActionName('ADD_SEARCH')
const RESET_SEARCH_QUERY = createActionName('RESET_SEARCH_QUERY')

//action creators
const searchStringReducer = ( statePart = '', action) => {
    switch (action.type) {
        case ADD_SEARCH:
            return action.payload;
        case RESET_SEARCH_QUERY:
            return '';
        default:
            return statePart;
    }
};

export default searchStringReducer;