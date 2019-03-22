import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

function MainPage({ books, isMain, handleChange }) {
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
            isMain={isMain}
          />
          <Shelf
            books={books}
            handleChange={handleChange}
            currentShelf="wantToRead"
            isMain={isMain}
          />
          <Shelf
            books={books}
            handleChange={handleChange}
            currentShelf="read"
            isMain={isMain}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default MainPage;
