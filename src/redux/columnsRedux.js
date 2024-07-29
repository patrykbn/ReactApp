import shortid from "shortid";

//selectors
export const getColumnsByList = ({ columns }, listId) => columns.filter( column => column.listId === listId);
export const getAllColumns = ({columns}) => columns;

//actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN')

//action creators
const columnsReducer = ( statePart = [], action) => {
    switch (action.type) {
        case ADD_COLUMN:
            //console.log('test', { ...state, columns: [...state.columns, { ...action.payload , id: shortid()}]});
            return [...statePart, { ...action.payload , id: shortid()}];
        default:
            return statePart;
    }
};

export default columnsReducer;