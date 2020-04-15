export const GET_REPOSITORIES_START = 'GET_REPOSITORIES_START';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';
export const GET_REPOSITORIES_ERROR = 'GET_REPOSITORIES_ERROR';

export const SET_PAGE_START = 'SET_PAGE_START';
export const SET_PAGE_SUCCESS = 'SET_PAGE_SUCCESS';
export const SET_PAGE_ERROR = 'SET_PAGE_ERROR';

export const SET_SEARCH_QUERY_START = 'SET_SEARCH_QUERY_START';
export const SET_SEARCH_QUERY_SUCCESS = 'SET_SEARCH_QUERY_SUCCESS';
export const SET_SEARCH_QUERY_ERROR = 'SET_SEARCH_QUERY_ERROR';

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

interface SetPageStartAction {
  type: typeof SET_PAGE_START;
}

interface SetPageSuccessAction {
  type: typeof SET_PAGE_SUCCESS;
  payload: { page: number };
}

interface SetPageErrorAction {
  type: typeof SET_PAGE_ERROR;
  payload: { error: Error };
}

export type SetPageTypes =
  | SetPageStartAction
  | SetPageSuccessAction
  | SetPageErrorAction;

// Set Search Query

interface SetSearchQueryStartAction {
  type: typeof SET_SEARCH_QUERY_START;
}

interface SetSearchQueryeSuccessAction {
  type: typeof SET_SEARCH_QUERY_SUCCESS;
  payload: { query: string };
}

interface SetSearchQueryErrorAction {
  type: typeof SET_SEARCH_QUERY_ERROR;
  payload: { error: Error };
}

export type SetSearchQueryTypes =
  | SetSearchQueryStartAction
  | SetSearchQueryeSuccessAction
  | SetSearchQueryErrorAction;
