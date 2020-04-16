import { Repository, MainState } from './searcherTypes';

export const getRepositorites = (store: MainState): Array<Repository> => store.searcher.repositories;
export const getPage = (store: MainState): number => store.searcher.page;
export const getSearchQuery = (store: MainState): string => store.searcher.searchQuery;
