import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchQuery } from '../../redux/searcher/searcherAcrions';

const mapDispatchToProps = (dispatch: any): any => ({
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

  handleChangeQuery = (e: any): any => {
    this.setState({ query: e.target.value });
  };

  handleSubmitSearchForm = (e: any): any => {
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
      <div>
        <form onSubmit={this.handleSubmitSearchForm}>
          <input
            onChange={this.handleChangeQuery}
            value={query}
            type="text"
            placeholder="Search repositories..."
            autoComplete="off"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
