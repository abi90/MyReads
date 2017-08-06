import React from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

const ShelveBooks = (props) => (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              books={props.books.filter(
                (book) => {
                  return book.shelf ==='currentlyReading'
                }
              )
            }
            changeShelf={props.changeShelf}
            shelfTitle={"Currently Reading"}
            />
            <Shelf
              books={props.books.filter(
                (book) => {
                  return book.shelf ==='wantToRead'
                }
              )
            }
            changeShelf={props.changeShelf}
            shelfTitle={"Want to Read"}
            />
            <Shelf
              books={props.books.filter(
                (book) => {
                  return book.shelf ==='read'
                }
              )
            }
            changeShelf={props.changeShelf}
            shelfTitle={"Read"}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    )
ShelveBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default ShelveBooks
