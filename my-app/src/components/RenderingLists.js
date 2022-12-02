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
            title: 'book 4',
            author: 'Dave',
            pages: 2821
        },
    ]
  return (
    <div>
        <h3>Using Key so react knows what to update</h3>
        {bookList.map( book => {
            return <h2 key={book}>{book}</h2>
    })}
    <hr />
    <h1>Doing the rendering from within the the main function</h1>
    {
        books.map(book => {
            return (
                <div key={book.title}>
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>{book.pages}</p>
            </div>
            )
        })
    }
    <hr />
    <h1>Using Book.js - a child - to handle the rendering of the list</h1>
    {
        books.map(book => {
            return <Book key={book.title} book={book} />
        })
    }
    </div>
  )
}

export default RenderingLists