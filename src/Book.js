import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShelfStatus from "./ShelfStatus";
import PropTypes from "prop-types";

function Book({ book, currentShelf, isSearch, handleChange }) {
  let thumbImage = book.imageLinks ? book.imageLinks.thumbnail : "";

  let path = `books/${book.id}`;

  return (
    <div className="book">
      {isSearch && (
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
            onChange={event => handleChange(book, event.target.value)}
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
Book.propTypes = {
  book: PropTypes.object.isRequired,
  currentShelf: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Book;
