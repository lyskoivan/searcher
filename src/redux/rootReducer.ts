import { combineReducers } from 'redux';

import searcherReducer from './searcher/searcherReducer';

export default combineReducers({ searcher: searcherReducer });
