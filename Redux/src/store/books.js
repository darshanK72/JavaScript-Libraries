import { createSelector } from 'reselect';

// Action Types
const BOOK_ADDED = 'bookAdded';
const BOOK_UPDATED = 'bookUpdated';
const BOOK_REMOVED = 'bookRemoved';

// Actions
export const bookAdd = data => ({
    type: BOOK_ADDED,
    payload: {
        ...data
    }
});

export const bookUpdate = data => ({
    type: BOOK_UPDATED,
    payload: {
        ...data
    }
});

export const bookRemove = data => ({
    type: BOOK_REMOVED,
    payload: {
        ...data
    }
});

// Reducer
let count = 0;
export function bookReducer(state = [], action) {

    switch(action.type){
        case BOOK_ADDED:
            return [
                ...state,
                {
                    id: ++count,
                    title: action.payload.title,
                    author: action.payload.author
                }
            ]
        case BOOK_REMOVED:
            return state.filter(book => book.id !== action.payload.id);
        case BOOK_UPDATED:
            return state.map(book => book.id !== action.payload.id ? book : {...book,...action.payload});            
        default:
            return state;
    }
}


// export const selectAllBooks = state => {
//     return state.books;
// }

export const selectAllBooks = createSelector(
    state => state.books,
    users => users
)