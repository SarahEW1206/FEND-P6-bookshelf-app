import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class MainPage extends Component {

    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf
                            books={this.props.books}
                            handleChange={this.props.handleChange}
                            currentShelf="currentlyReading"
                        />
                        <Shelf
                            books={this.props.books}
                            handleChange={this.props.handleChange}
                            currentShelf="wantToRead"
                        />
                        <Shelf
                            books={this.props.books}
                            handleChange={this.props.handleChange}
                            currentShelf="read"
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to='/search'
                    >Add a book</Link>
                </div>
            </div>
        )

    }
}

export default MainPage


