import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShelfStatus from "./ShelfStatus";

class Book extends Component {
  render() {
    const { book, currentShelf } = this.props;

    let thumbImage = this.props.book.imageLinks
      ? this.props.book.imageLinks.thumbnail
      : "";

    let path = `books/${book.id}`;

    return (
      <div className="book">
        {this.props.isSearch && (
          <div className="book-title">
            <ShelfStatus shelf={currentShelf} />
          </div>
        )}
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${thumbImage}")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={event =>
                this.props.handleChange(this.props.book, event.target.value)
              }
              value={currentShelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <Link to={path}>Info</Link>
      </div>
    );
  }
}

export default Book;
