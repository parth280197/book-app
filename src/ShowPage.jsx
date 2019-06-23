import React from 'react';
import Book from './Book';

export default class ShowPage extends React.Component {
  render() {
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                this.props.books.map((book) => (
                  book.shelf === "currentlyReading" ?
                  (
                    <Book updateStatus={this.props.updateStatus} book={book}/>
                  ) : null
                ))
              }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                this.props.books.map((book) => (
                  book.shelf === "wantToRead" ?
                  (
                    <Book updateStatus={this.props.updateStatus} book={book}/>
                  ) : null
                ))
              }
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {
                this.props.books.map((book) => (
                  book.shelf === "read" ?
                  (
                    <Book updateStatus={this.props.updateStatus} book={book}/>
                  ) : null
                ))
              }
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
