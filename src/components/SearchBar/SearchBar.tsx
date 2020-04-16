import { connect } from 'react-redux';
import React, { Component, SyntheticEvent, MouseEvent, ChangeEvent } from 'react';

import { Dispatch } from '../../redux/store';
import { cancel } from '../../services/githubAPI';
import { SetSearchQueryTypes } from '../../redux/searcher/searcherTypes';
import { setSearchQuery } from '../../redux/searcher/searcherAcrions';

import './SearchBar.scss';

interface SearchProps {
  onSearch: Function;
}

const mapDispatchToProps = (dispatch: Dispatch): SearchProps => ({
  onSearch: (query: string): SetSearchQueryTypes => dispatch(setSearchQuery(query)),
});

type SearchBarProps = ReturnType<typeof mapDispatchToProps>;

interface SearchBarState {
  query: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    query: '',
  };

  handleChangeQuery = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ query: e.target.value });
  };

  handleCancelRequest = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    cancel('Operation canceled by the user.');

    this.setState({ query: '' });
  };

  handleSubmitSearchForm = (e: SyntheticEvent): void => {
    e.preventDefault();

    const { query } = this.state;

    if (!query) {
      alert('Type some query');

      return;
    }

    const { onSearch } = this.props;

    onSearch(query.toLowerCase());
  };

  render(): JSX.Element {
    const { query } = this.state;

    return (
      <section className="Searchbar">
        <form onSubmit={this.handleSubmitSearchForm} className="SearchForm">
          <input
            onChange={this.handleChangeQuery}
            className="SearchForm-input"
            value={query}
            type="text"
            placeholder="Search repositories..."
            autoComplete="off"
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
        <button type="button" className="Searchbar-cancel" onClick={this.handleCancelRequest}>
          <span className="Searchbar-cancel-label">Cancel</span>
        </button>
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
