import React from 'react'
import Book from './Book'

function RenderingLists() {

    const bookList = [
        'book 1',
        'book 2',
        'book 3',
        'book 4'

    ]

    const books = [
        {
            title: 'book 1',
            author: '1',
            pages: 281
        },
        {
            title: 'book 2',
            author: 'Jane',
            pages: 282
        },
        {
            title: 'book 3',
            author: 'Pete',
            pages: 2831
        },
        {
            title: 'book 3',
            author: 'Dave',
            pages: 2821
        },
    ]
  return (
    <div>
        {bookList.map( book => {
            return <h2>{book}</h2>
    })}
    <hr />
    <h1>Doing the rendering from within the the main function</h1>
    {
        books.map(book => {
            return (
                <div>
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>{book.pages}</p>
            </div>
            )
        })
    }
    <hr />
    <h1>Using Book.js to handle the rendering of the list</h1>
    {
        books.map(book => {
            return <Book book={book} />
        })
    }
    </div>
  )
}

export default RenderingLists