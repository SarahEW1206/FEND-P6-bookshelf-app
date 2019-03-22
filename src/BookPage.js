import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ShelfStatus from "./ShelfStatus";

class BookPage extends Component {
  state = {
    info: null
  };
  componentDidMount() {
    const { bookId } = this.props.match.params;
    console.log(bookId);

    BooksAPI.get(bookId).then(info => {
      this.setState({ info });
    });
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        {info && (
          <div className="book-detail-container">
            <Link to="/">Bookshelves</Link>
            <Link to="/search">Search</Link>
            <h2>{info.title}</h2>
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  info.imageLinks ? info.imageLinks.thumbnail : ""
                }")`
              }}
            />
            <p>
              <strong>Author(s):</strong> {info.authors}
            </p>
            <p>
              <strong>Pages:</strong> {info.pageCount}
            </p>
            <p>
              <strong>Published:</strong> {info.publishedDate}
            </p>
            <div className="book-detail-status">
              <p className="reading-status-heading">
                <strong>Reading Status:</strong>
              </p>
              <ShelfStatus shelf={info.shelf} />
            </div>
            <p>
              <strong>Description:</strong> {info.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default BookPage;
