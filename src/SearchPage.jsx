import React from 'react';
import SearchBar from './SearchBar';
import * as BooksAPI from './BooksAPI';
import SearchBook from './SearchBook';
import { Link } from 'react-router-dom';

export default class SearchPage extends React.Component {
  state = {
    searchedBooks: [],
  }
  
  getSearchResult = (searchText) => {
    BooksAPI.search(searchText)
      .then((books) => {
        if (books !== undefined && books.error !== "empty query") {
          this.setState({
            searchedBooks: books
          })
        } else {
          this.setState({
            searchedBooks: []
          })
        } 
      })
  }

  clearSearch = () => {
    this.setState({searchedBooks:[]});
  }

  render() {
    return (
      <div className="search-books">
            <div className="search-books-bar">
            <Link to="/">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
            </Link>
              <div className="search-books-input-wrapper">
                <SearchBar clearSearch={this.clearSearch} getSearchResult={this.getSearchResult}/>
              </div>
            </div>
            <div className="search-books-results">
              {
                this.state.searchedBooks.length !== 0 ? 
                (
                  <ol className="books-grid">
                    {
                      this.state.searchedBooks.map((book) => (
                        <SearchBook selectedBooks={this.props.selectedBooks} updateStatus={this.props.updateStatus} book={book}/>
                      ))
                    } 
                  </ol>
                ) : <div>No result to show</div>
              }
            </div>
          </div>
    )
  }
}