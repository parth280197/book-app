import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from './SearchPage';
import ShowPage from './ShowPage';
import { Route, Link } from 'react-router-dom'

class App extends React.Component {
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((data) => {
      this.setState({books:data});
    })
  }

  updateStatus = (book,shelf) => {
    BooksAPI.update(book,shelf)
    .then(() => {
      BooksAPI.getAll()
      .then((data) => {
        this.setState({books:data});
      })
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ShowPage updateStatus={this.updateStatus} books={this.state.books}/>
              <div className="open-search">
                
                  <Link to="/searchPage">
                    <button></button>
                  </Link>
                
              </div>
            </div>
        )}/>

        <Route path="/searchPage" render={() => (
            <SearchPage selectedBooks={this.state.books} updateStatus={this.updateStatus}/>
        )}/>

      </div>
    ) 
        }}
export default App
