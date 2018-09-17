import React from 'react'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'

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
        <Route exact path='/' render={() => (
          <MainPage
            books={this.state.books}
            handleChange={this.changeShelf}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchPage
            handleChange={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
