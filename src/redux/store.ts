import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const enhancer = composeWithDevTools(applyMiddleware(thunk));

export const initStore = createStore(rootReducer, enhancer);

const { dispatch } = initStore;

export type Dispatch = typeof dispatch;
