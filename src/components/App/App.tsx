import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.scss';

import SearchBar from '../SearchBar';
import RepositoriesList from '../RepositoriesList';
import Pagination from '../Pagination';

import setRepositories from '../../redux/searcher/searcherOperations';
import { getRepositorites, getPage, getSearchQuery } from '../../redux/searcher/searcherSelectors';
import { MainState, Repository } from '../../redux/searcher/searcherTypes';

interface AppStateProps {
  repositories: Array<Repository>;
  page: number;
  searchQuery: string;
}

const mapStateToProps = (store: MainState): AppStateProps => ({
  repositories: getRepositorites(store),
  page: getPage(store),
  searchQuery: getSearchQuery(store),
});

const mapDispatchToProps = {
  getRepositories: setRepositories,
};

interface AppDispatchProps {
  getRepositories: Function;
}

type AppProps = AppDispatchProps & AppStateProps;

class App extends Component<AppProps, {}> {
  componentDidUpdate(prevProps: AppProps): void {
    const { page, searchQuery, getRepositories } = this.props;

    if (prevProps.page !== page || prevProps.searchQuery !== searchQuery) {
      console.log('Props', prevProps);
      getRepositories(page, searchQuery);
    }
  }

  render(): JSX.Element {
    const { repositories } = this.props;
    return (
      <div className="main-wrapper">
        <header className="main-header">
          <SearchBar />
          {repositories.length > 0 && <RepositoriesList />}
          {repositories.length > 0 && <Pagination />}
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
