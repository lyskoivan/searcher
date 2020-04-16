import { connect } from 'react-redux';
import React, { Component } from 'react';

import SearchBar from '../SearchBar';
import Pagination from '../Pagination';
import RepositoriesList from '../RepositoriesList';
import setRepositories from '../../redux/searcher/searcherOperations';
import { MainState, Repository } from '../../redux/searcher/searcherTypes';
import { getRepositorites, getPage, getSearchQuery } from '../../redux/searcher/searcherSelectors';

import './App.scss';

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
