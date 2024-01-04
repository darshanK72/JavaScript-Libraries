import { createStore, applyMiddleware, compose } from 'redux';
import { api } from './middleware/api';
import thunk from 'redux-thunk';
import { logger } from './middleware/logger';
import { rootReducer } from './rootReducer';

// const composedEnhancers = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger,api))

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger,thunk,api)
);


export const store = createStore(rootReducer, enhancer)
