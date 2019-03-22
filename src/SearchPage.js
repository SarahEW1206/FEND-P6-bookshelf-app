import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book.js";

class SearchPage extends Component {
  state = {
    query: "",
    searched: [],
    shelf: "none"
  };

  // When a search is typed in, update the display value with the this.state.query and call the updateSearchedBooks method to get the results.
  updateQuery = query => {
    this.setState({ query });
    this.updateSearchedBooks(query);
  };

  // Call the search method from BooksAPI.js.  If no error and query not empty, udpate this.state.searched array with results
  updateSearchedBooks = query => {
    if (query) {
      BooksAPI.search(query).then(searched => {
        if (searched.error) {
          this.setState({ searched: [] });
        } else {
          this.setState({ searched });
        }
      });
    } else {
      this.setState({ searched: [] });
    }
  };

  render() {
    const { searched } = this.state;
    const { query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* map through search results to generate list of results and put shelf status indicator above each book, showing which shelf the book is currently on. If not on a shelf, is assigned "none." */}

            {searched.map(searchedBook => {
              let shelf = "none";

              /*Map through the books that are already on shelves if we get a match based on id, we will get the shelf status from higher order state and assign it to the equivalent book this.state.searched */

              this.props.books.map(book =>
                book.id === searchedBook.id ? (shelf = book.shelf) : null
              );

              // Pass shelf down to the book as a prop below

              return (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    handleChange={this.props.handleChange}
                    currentShelf={shelf}
                    isSearch
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
