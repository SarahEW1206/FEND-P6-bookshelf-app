import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class SearchPage extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                {/* <div className="search-books-results">
                    <ol className="books-grid">
                        <Book books={this.props.books} />
                    </ol>
                </div> */}
            </div>

        )
    }

}

export default SearchPage