import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'

class SearchPage extends Component {

    state = {
        query: '',
        searched: []
    }

    updateQuery = (query) => {
        this.setState({ query })
        this.updateSearchedBooks(query)
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    updateSearchedBooks = (query) => {
        if (query) {
            BooksAPI.search(query).then((searched) => {
                if (searched.error) {
                    this.setState({ searched: [] })
                } else {
                    this.setState({ searched })
                }
            })
        } else {
            this.setState({ searched: [] })
        }
    }






    render() {

        const { searched } = this.state
        const { query } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            searched
                                .map(searchedBook =>
                                    (< li key={searchedBook.id} >
                                        <Book
                                            book={searchedBook}
                                            handleChange={this.props.handleChange}
                                        />
                                    </li>
                                    )
                                )
                        }
                    </ol>
                </div>
            </div>

        )
    }

}

export default SearchPage