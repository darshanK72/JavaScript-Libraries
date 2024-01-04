// Action Types
const USER_ADDED = 'userAdded';
const USER_UPDATED = 'userUpdated';
const USER_REMOVED = 'userRemoved';

// Actions
export const userAdd = data => ({
    type: USER_ADDED,
    payload: {
        ...data
    }
});

export const userUpdate = data => ({
    type: USER_UPDATED,
    payload: {
        ...data
    }
});

export const userRemove = data => ({
    type: USER_REMOVED,
    payload: {
        ...data
    }
});

// Reducer
let count = 0;
export function userReducer(state = [], action) {

    switch(action.type){
        case USER_ADDED:
            return [
                ...state,
                {
                    id: ++count,
                    name: action.payload.name,
                    address: action.payload.address
                }
            ]
        case USER_REMOVED:
            return state.filter(user => user.id !== action.payload.id);
        case USER_UPDATED:
            return state.map(user => user.id !== action.payload.id ? user : {...user,...action.payload});            
        default:
            return state;
    }
}
