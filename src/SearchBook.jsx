import React from 'react';
let dropDown = require('./icons/arrow-drop-down.svg');
let heart = require('./icons/heart.svg');
let done = require('./icons/done.svg');
let hourGlass = require('./icons/hourglass.svg');

export default class SearchBook extends React.Component {
  
  bg = '';
  render() {
    let selectedBook = this.props.selectedBooks.find((book) => book.id === this.props.book.id);
    if(selectedBook !== undefined) {
      if (selectedBook.shelf === 'currentlyReading') {
        this.bg = hourGlass;
      } else if (selectedBook.shelf === 'wantToRead'){
        this.bg = heart;
      } else if (selectedBook.shelf === 'read') {
        this.bg = done;
      }
    } else {
      selectedBook = {shelf:'move'};
      this.bg = dropDown;
    }
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
            <div style ={ { backgroundImage: "url("+this.bg+")" } } className="book-shelf-changer">
              <select value={selectedBook.shelf} onChange={(e) => this.props.updateStatus(this.props.book,e.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}
