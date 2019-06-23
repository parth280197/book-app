import React from 'react';

export default class SearchBar extends React.Component {
  
  searchBarHandler = (e) => {
    this.props.getSearchResult(e.target.value);
    if(e.target.value.length === 0) {
      this.props.clearSearch();
    }
  }

  render() {
    return (
      <input type='text' onChange={this.searchBarHandler} placeholder='Search books here' />
    )
  }
}