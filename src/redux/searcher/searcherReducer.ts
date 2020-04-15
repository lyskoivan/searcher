import { combineReducers } from 'redux';

import * as types from './searcherTypes';

const repositoriesReducer = (
  state = [],
  action: types.GetRepositoriesTypes,
): Array<types.Repository> => {
  switch (action.type) {
    case types.GET_REPOSITORIES_SUCCESS:
      return action.payload.repositories;

    default:
      return state;
  }
};

const pageReducer = (state = 1, action: types.SetPageTypes): number => {
  switch (action.type) {
    case types.SET_PAGE_SUCCESS:
      return action.payload.page;

    default:
      return state;
  }
};

const SearchQueryReducer = (
  state = '',
  action: types.SetSearchQueryTypes,
): string => {
  switch (action.type) {
    case types.SET_SEARCH_QUERY_SUCCESS:
      return action.payload.query;

    default:
      return state;
  }
};

type SearcherReducerTypes =
  | types.SetSearchQueryTypes
  | types.SetPageTypes
  | types.GetRepositoriesTypes;

const errorReducer = (
  state = null,
  action: SearcherReducerTypes,
): types.Error | null => {
  switch (action.type) {
    case types.GET_REPOSITORIES_START:
    case types.SET_PAGE_START:
    case types.SET_SEARCH_QUERY_START:
      return null;

    case types.SET_PAGE_ERROR:
    case types.GET_REPOSITORIES_ERROR:
    case types.SET_SEARCH_QUERY_ERROR:
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
