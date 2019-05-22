import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'

const shelves = [
    {
        "name":"Currently Reading",
        "shelf":"currentlyReading"
    },
    {
        "name":"Want to Read",
        "shelf":"wantToRead"
    },
    {
        "name":"Read",
        "shelf":"read"
    }
]


class BookShelf extends Component {
    /*function checkShelf(book) {
      return book.shelf == "Currently Reading";
    }*/

    render() {
        let currShelf, count=1
        return (
            {/*<ol className="list-books-content">
            {this.props.books.map((book) => (
                <li key={book.id}>
                    {book.title}
                </li>
            ))}

            </ol>*/},

            <div className="list-books-content">
              <div>
                  {shelves.map((shelf) => (
                      currShelf = this.props.books.filter((book) => book.shelf === shelf.shelf),
                      console.log(currShelf, count),
                  ++count,
                      <div key={shelf.shelf} className="bookshelf">
                        <h2 className="bookshelf-title">{shelf.name}</h2>
                        <div className="bookshelf-books">
                          <ol className="books-grid">
                          {currShelf.map((book) => (
                              <li key={book.id}>
                                <div className="book">
                                  {/*<div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                                    <div className="book-shelf-changer">

                                    </div>
                                  </div>*/}
                                  <div className="book-title">{book.title}</div>
                                  <div className="book-authors">{book.author}</div>
                                </div>
                              </li>
                          ))}
                          </ol>
                        </div>
                      </div>
                  ))}
            </div>
        </div>
        )
    }
}

export default BookShelf
