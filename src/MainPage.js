import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import PropTypes from "prop-types";

function MainPage({ books, handleChange }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            books={books}
            handleChange={handleChange}
            currentShelf="currentlyReading"
          />
          <Shelf
            books={books}
            handleChange={handleChange}
            currentShelf="wantToRead"
          />
          <Shelf
            books={books}
            handleChange={handleChange}
            currentShelf="read"
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

MainPage.propTypes = {
  books: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MainPage;
