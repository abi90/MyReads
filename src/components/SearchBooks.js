import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchBooks extends Component{
  static propTypes = {
      changeShelf: PropTypes.func.isRequired,
      searchBooks: PropTypes.func.isRequired
  }

  state = {
    query: '',
    results:[]
  }

  updateQuery = (query) => {
    if(query){
      this.setState({query: query.trim()})
      this.props.searchBooks(query.trim()).then(
        (books)=>{
          console.log(books);
          if(books && books.error){
            this.setState({results: []})
          }
          else {
            if(this.state.results !== books) {
              this.setState({results: books})
            }
          }
        }
      )
    }
    else {
      this.setState({query: '',results:[]})
    }
  }

  render(){
    const {query, results} = this.state
    return(
      <div className="search-books">
        <div className="search-books-bar">
            <Link to='/' className="close-search">
              Add a book
            </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
              value={query}
              onChange={(event)=>this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              results && !results.error && (
                results.map(
                  (book) => (<li key={book.id + Math.floor(Math.random(4)*10000)}>
                    <Book book={book} changeShelf={this.props.changeShelf}/>
                  </li>)
                )
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
