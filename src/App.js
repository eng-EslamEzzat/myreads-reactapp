import React, { useEffect } from 'react'
import { connect, useDispatch,  } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ListBooks from './components/list-books';
import SearchBooks from './components/search-books';
import {setSearchedBooks, setCurrentlyReading, setWantToRead, setRead} from './redux/actions'
import * as BooksAPI from './BooksAPI';

const BooksApp = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
      BooksAPI.getAll().then(books => {
      dispatch(setCurrentlyReading(books.filter(book=>book.shelf==="currentlyReading")))
      dispatch(setWantToRead(books.filter(book=>book.shelf==="wantToRead")))
      dispatch(setRead(books.filter(book=>book.shelf==="read")))
      })
  },[dispatch])

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

const mapStateToProps = (state) => ({
  searchedBooks: state.searchedBooks,
  currentlyReading: state.currentlyReading,
  wantToRead: state.wantToRead,
  read: state.read
})

const mapDispatchToProps = {
  setSearchedBooks,
  setCurrentlyReading,
  setWantToRead,
  setRead,
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksApp)
