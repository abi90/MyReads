import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

const Shelf = (props) =>(

      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              props.books.map((book) =>{ return (
                <li key={book.id}>
                  <Book book={book} changeShelf={props.changeShelf}/>
                </li>
            )})
            }
          </ol>
        </div>
     </div>
)

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Shelf
