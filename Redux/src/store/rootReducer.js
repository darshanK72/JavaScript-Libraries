import { userReducer } from './users';
import { bookReducer } from './books';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    books:bookReducer,
    users:userReducer
});
