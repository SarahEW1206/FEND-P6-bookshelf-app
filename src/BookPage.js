import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BookPage extends Component {

    state = {
        info: null
    }
    componentDidMount() {
        const { bookId } = this.props.match.params

        BooksAPI.get(bookId).then((info) => {
            this.setState({ info })
        })

        console.log(this.state.info)

    }
    render() {

        return (
            <div>
                {this.state.info &&
                    <div className="book-detail-container">
                        <Link to='/'>Bookshelves</Link>
                        <Link to='/search'>Search</Link>
                        <h2>{this.state.info.title}</h2>
                        <div className="book-cover" style={{
                            width: 128, height: 193, backgroundImage: `url("${this.state.info.imageLinks ? this.state.info.imageLinks.thumbnail :
                                ''}")`
                        }}></div>
                        <p><strong>Author(s):</strong> {this.state.info.authors}</p>
                        <p><strong>Pages:</strong> {this.state.info.pageCount}</p>
                        <p><strong>Published:</strong> {this.state.info.publishedDate}</p>
                        <div className="book-detail-status"><p className="reading-status-heading"><strong>Reading Status:</strong></p>
                            {this.state.info.shelf === 'currentlyReading' &&
                                <p style={{ color: 'orange' }}>Currently Reading</p>
                            }

                            {this.state.info.shelf === 'wantToRead' &&
                                <p style={{ color: 'purple' }}>Want to Read</p>
                            }

                            {this.state.info.shelf === 'read' &&
                                <p style={{ color: 'green' }}>Read</p>
                            }

                            {this.state.info.shelf === 'none' &&
                                <p style={{ color: 'black' }}>None</p>
                            }</div>
                        <p><strong>Description:</strong> {this.state.info.description}</p>


                    </div >

                }
            </div>

        )

    }

}

export default BookPage
