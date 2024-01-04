import { userAdd } from "../users";

export const api = ({ dispatch, getState }) => next => action => {
    if (action.type !== 'getTodo') {
        next(action)
    }
    else {

        fetch(action.payload.url).then(response => response.json()).then(data => {
            dispatch(userAdd({
                name: data.name,
                address: data.email
            }))
        }).catch(error => {
            console.log(error);
        });
    }
}