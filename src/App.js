import React from 'react'
import MainPage from './MainPage'
import * as BooksAPI from './BooksAPI'

// import SearchPage from './SearchPage'

import './App.css'


class BooksApp extends React.Component {

  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })

  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <MainPage
          books={this.state.books}
          handleChange={this.changeShelf}
        />
      </div>
    )
  }
}

export default BooksApp
