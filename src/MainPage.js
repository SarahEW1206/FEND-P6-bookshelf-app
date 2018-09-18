import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class MainPage extends Component {

    render() {

        console.log(this.props.books)

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
                            isMain={this.props.isMain}
                        />
                        <Shelf
                            books={this.props.books}
                            handleChange={this.props.handleChange}
                            currentShelf="wantToRead"
                            isMain={this.props.isMain}
                        />
                        <Shelf
                            books={this.props.books}
                            handleChange={this.props.handleChange}
                            currentShelf="read"
                            isMain={this.props.isMain}
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


