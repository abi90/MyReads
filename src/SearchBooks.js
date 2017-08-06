import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component{
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
          if(books && books.error)
          this.setState({results: []})
          else
            this.setState({results: books})

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
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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
                  (book) => (<li key={book.id}>
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
