import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'


class BookShelf extends Component {
    render() {
        return (
            <ol className="list-books-content">
            {this.props.books.map((book) => (
                <li>
                    {book.title}
                </li>
            ))}

            </ol>
        )
    }
}

export default BookShelf
