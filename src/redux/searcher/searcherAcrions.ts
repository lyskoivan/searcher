import * as types from './searcherTypes';

// Get Repositories

export const getRepositoriesStart = (): types.GetRepositoriesTypes => ({
  type: types.GET_REPOSITORIES_START,
});

export const getRepositoriesSuccess = (
  repositories: Array<types.Repository>,
): types.GetRepositoriesTypes => ({
  type: types.GET_REPOSITORIES_SUCCESS,
  payload: { repositories },
});

export const getRepositoriesError = (error: types.Error): types.GetRepositoriesTypes => ({
  type: types.GET_REPOSITORIES_ERROR,
  payload: { error },
});

// Set Page

export const setPageStart = (): types.SetPageTypes => ({
  type: types.SET_PAGE_START,
});

export const setPageSuccess = (page: number): types.SetPageTypes => ({
  type: types.SET_PAGE_SUCCESS,
  payload: { page },
});

export const setPageError = (error: types.Error): types.SetPageTypes => ({
  type: types.SET_PAGE_ERROR,
  payload: { error },
});

// Set Search Query

export const setSearchQueryStart = (): types.SetSearchQueryTypes => ({
  type: types.SET_SEARCH_QUERY_START,
});

export const setSearchQuerySuccess = (query: string): types.SetSearchQueryTypes => ({
  type: types.SET_SEARCH_QUERY_SUCCESS,
  payload: { query },
});

export const setSearchQueryError = (error: types.Error): types.SetSearchQueryTypes => ({
  type: types.SET_SEARCH_QUERY_ERROR,
  payload: { error },
});
