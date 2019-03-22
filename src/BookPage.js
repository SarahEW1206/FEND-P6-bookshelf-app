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
    return (
      <div>
        {this.state.info && (
          <div className="book-detail-container">
            <Link to="/">Bookshelves</Link>
            <Link to="/search">Search</Link>
            <h2>{this.state.info.title}</h2>
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  this.state.info.imageLinks
                    ? this.state.info.imageLinks.thumbnail
                    : ""
                }")`
              }}
            />
            <p>
              <strong>Author(s):</strong> {this.state.info.authors}
            </p>
            <p>
              <strong>Pages:</strong> {this.state.info.pageCount}
            </p>
            <p>
              <strong>Published:</strong> {this.state.info.publishedDate}
            </p>
            <div className="book-detail-status">
              <p className="reading-status-heading">
                <strong>Reading Status:</strong>
              </p>
              <ShelfStatus shelf={this.state.info.shelf} />
            </div>
            <p>
              <strong>Description:</strong> {this.state.info.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default BookPage;
