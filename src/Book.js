import React, { Component } from 'react'

class Book extends Component {



    render() {
        const { book, currentShelf } = this.props

        let thumbImage = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail :
            ''

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbImage}")` }}></div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={(event) => this.props.handleChange(this.props.book, event.target.value)}
                            value={currentShelf}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }



}

export default Book