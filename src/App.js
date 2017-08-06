import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ShelveBooks from './ShelveBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log('Books', books)
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf
    this.setState((state)=>({books: state.books.filter((b) => {
      return b.id !== book.id
    }).concat([book])}))
  }

  searchBooks = (query) => {
    console.log(query);
    return BooksAPI.search(query).then((books) => books)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <ShelveBooks
              books={this.state.books}
              changeShelf={this.changeShelf}
              />
        )}/>
      <Route exact path='/search' render={() => (
            <SearchBooks searchBooks={this.searchBooks} changeShelf={this.changeShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
