import React from 'react'
import { Route } from 'react-router-dom'
import AddBook from './AddBook'
import DisplayShelves from './DisplayShelves'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log('Books', books);
      this.setState({ books })
    })
  }

  changeShelf(book, shelf){
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <DisplayShelves
              books={this.state.books}
              onChangeShelf={this.changeShelf}
              />
        )}/>
      <Route exact path='/search' render={() => (
            <AddBook/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
