import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ListBooks from './components/list-books';
import SearchBooks from './components/search-books';
import {setCurrentlyReading, setWantToRead, setRead} from './redux/actions'
import * as BooksAPI from './BooksAPI';

const BooksApp = (props) => {

  useEffect(() => {
      BooksAPI.getAll().then(books => {
        props.setCurrentlyReading(books.filter(book=>book.shelf==="currentlyReading"))
        props.setWantToRead(books.filter(book=>book.shelf==="wantToRead"))
        props.setRead(books.filter(book=>book.shelf==="read"))
      })
  })

  return (
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListBooks />} />
        <Route path='/search' element={<SearchBooks />} />       
      </Routes>
    </BrowserRouter>
    </div>
  )
  }

const mapDispatchToProps = {
  setCurrentlyReading,
  setWantToRead,
  setRead,
}

export default connect(null, mapDispatchToProps)(BooksApp)
