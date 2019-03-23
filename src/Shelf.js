import React from "react";
import Book from "./Book";
import ShelfStatus from "./ShelfStatus";

function Shelf({ books, currentShelf, handleChange }) {
  return (
    <div className="bookshelf">
      <ShelfStatus shelf={currentShelf} />

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
