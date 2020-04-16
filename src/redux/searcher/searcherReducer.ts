import { combineReducers } from 'redux';

import * as types from './searcherTypes';

const repositoriesReducer = (state = [], action: types.GetRepositoriesTypes): Array<types.Repository> => {
  switch (action.type) {
    case types.GET_REPOSITORIES_SUCCESS:
      return action.payload.repositories;

    default:
      return state;
  }
};

const pageReducer = (state = 1, action: types.SetPageTypes): number => {
  switch (action.type) {
    case types.SET_PAGE:
      return action.payload.page;

    default:
      return state;
  }
};

const SearchQueryReducer = (state = '', action: types.SetSearchQueryTypes): string => {
  switch (action.type) {
    case types.SET_SEARCH_QUERY:
      return action.payload.query;

    default:
      return state;
  }
};

const errorReducer = (state = null, action: types.GetRepositoriesTypes): types.Error | null => {
  switch (action.type) {
    case types.GET_REPOSITORIES_START:
      return null;

    case types.GET_REPOSITORIES_ERROR:
      return action.payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  repositories: repositoriesReducer,
  page: pageReducer,
  searchQuery: SearchQueryReducer,
  error: errorReducer,
});
