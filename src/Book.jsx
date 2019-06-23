import React from 'react';
let dropDown = require('./icons/arrow-drop-down.svg');
let heart = require('./icons/heart.svg');
let done = require('./icons/done.svg');
let hourGlass = require('./icons/hourglass.svg');

export default class Book extends React.Component {
  
  getSelected = (e,book) => {
    this.props.updateStatus(book,e.target.value);
  }
  bg = '';
  render() {
    if (this.props.book !== undefined) {
      if(this.props.book.shelf === undefined) {
        this.bg = dropDown;
      } else if (this.props.book.shelf === 'currentlyReading') {
        this.bg = hourGlass;
      } else if (this.props.book.shelf === 'wantToRead'){
        this.bg = heart;
      } else if (this.props.book.shelf === 'read') {
        this.bg = done;
      }
    }
    return (
      <li key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
            <div style ={ { backgroundImage: "url("+this.bg+")" } } className="book-shelf-changer">
              <select value={this.props.book.shelf} onChange={(e) => this.getSelected(e,this.props.book)}>
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