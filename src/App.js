import React from 'react'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import BookPage from './BookPage'

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

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
            books={this.state.books}
            handleChange={this.changeShelf}
            isMain
          />
        )} />
        <Route exact path='/search' render={() => (
          <SearchPage
            books={this.state.books}
            handleChange={this.changeShelf}
            isSearch
          />
        )} />
        <Route exact path='/books/:bookId' component={BookPage} />
      </div>
    )
  }
}

export default BooksApp
