import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SearchBar.scss';

import { setSearchQuery } from '../../redux/searcher/searcherAcrions';

interface SearchProps {
  onSearch: Function;
}

const mapDispatchToProps = (dispatch: any): SearchProps => ({
  onSearch: (query: string): string => dispatch(setSearchQuery(query)),
});

type SearchBarProps = ReturnType<typeof mapDispatchToProps>;

interface SearchBarState {
  query: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    query: '',
  };

  handleChangeQuery = (e: any): void => {
    this.setState({ query: e.target.value });
  };

  handleSubmitSearchForm = (e: any): void => {
    e.preventDefault();
    const { query } = this.state;
    if (!query) {
      console.log('Type some query');
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
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
