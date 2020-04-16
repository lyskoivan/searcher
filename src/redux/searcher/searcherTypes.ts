export const GET_REPOSITORIES_START = 'GET_REPOSITORIES_START';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';
export const GET_REPOSITORIES_ERROR = 'GET_REPOSITORIES_ERROR';

export const SET_PAGE = 'SET_PAGE';

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

export interface Repository {
  id: number;
  title: string;
  body: string;
}

export interface Error {
  message: string | null;
  name: string | null;
  stack: string | null;
  config: object | null;
}

export interface SearcherState {
  repositories: Array<Repository>;
  page: number;
  searchQuery: string;
  error: Error | null;
}

export interface MainState {
  searcher: SearcherState;
}

// Get repositories

interface GetRepositoriesStartAction {
  type: typeof GET_REPOSITORIES_START;
}

interface GetRepositoriesSuccessAction {
  type: typeof GET_REPOSITORIES_SUCCESS;
  payload: { repositories: Array<Repository> };
}

interface GetRepositoriesErrorAction {
  type: typeof GET_REPOSITORIES_ERROR;
  payload: { error: Error };
}

export type GetRepositoriesTypes =
  | GetRepositoriesStartAction
  | GetRepositoriesSuccessAction
  | GetRepositoriesErrorAction;

// Set page

interface SetPageAction {
  type: typeof SET_PAGE;
  payload: { page: number };
}

export type SetPageTypes = SetPageAction;

// Set Search Query

interface SetSearchQueryeAction {
  type: typeof SET_SEARCH_QUERY;
  payload: { query: string };
}

export type SetSearchQueryTypes = SetSearchQueryeAction;
