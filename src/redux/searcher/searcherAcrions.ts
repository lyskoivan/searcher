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

export const setPageSuccess = (page: number): types.SetPageTypes => ({
  type: types.SET_PAGE,
  payload: { page },
});

// Set Search Query

export const setSearchQuery = (query: string): types.SetSearchQueryTypes => ({
  type: types.SET_SEARCH_QUERY,
  payload: { query },
});
