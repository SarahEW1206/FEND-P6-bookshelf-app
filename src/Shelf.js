import React, { Component } from "react";
import Book from "./Book";

function Shelf({ books, currentShelf, handleChange, isMain }) {
  return (
    <div className="bookshelf">
      {currentShelf === "currentlyReading" && (
        <h2 className="bookshelf-title">Currently Reading</h2>
      )}

      {currentShelf === "wantToRead" && (
        <h2 className="bookshelf-title">Want to Read</h2>
      )}

      {currentShelf === "read" && <h2 className="bookshelf-title">Read</h2>}

      <ol className="books-grid">
        {books
          .filter(book => book.shelf === currentShelf)
          .map(book => (
            <li key={book.id}>
              <Book
                book={book}
                handleChange={handleChange}
                currentShelf={currentShelf}
              />
            </li>
          ))}
      </ol>
    </div>
  );
}

export default Shelf;
