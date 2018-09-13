import React, { Component } from 'react'
import Book from './Book'

class MainPage extends Component {

    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <ol className="books-grid">
                                {
                                    this.props.books
                                        .filter(book => book.shelf === 'currentlyReading')
                                        .map(book => (
                                            <li>
                                                <Book
                                                    book={book}
                                                    handleChange={this.props.handleChange}
                                                    currentShelf="currentlyReading"
                                                />
                                            </li>
                                        )
                                        )
                                }
                            </ol>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <ol className="books-grid">
                                {
                                    this.props.books
                                        .filter(book => book.shelf === 'wantToRead')
                                        .map(book => (
                                            <li>
                                                <Book
                                                    book={book}
                                                    handleChange={this.props.handleChange}
                                                    currentShelf="wantToRead"
                                                />
                                            </li>
                                        )
                                        )
                                }
                            </ol>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <ol className="books-grid">
                                {
                                    this.props.books
                                        .filter(book => book.shelf === 'read')
                                        .map(book => (
                                            <li>
                                                <Book
                                                    book={book}
                                                    handleChange={this.props.handleChange}
                                                    currentShelf="read"
                                                />
                                            </li>
                                        )
                                        )
                                }
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.props.showSearchPage}>Add a book</a>
                </div>
            </div>
        )

    }
}

export default MainPage