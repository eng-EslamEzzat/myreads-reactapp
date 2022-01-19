import React from 'react'
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/list-books';
import SearchBooks from './components/search-books';
import {MTcurrentlyReading, MTwantToRead, MTread, MTnone} from './redux/actions'

const BooksApp = () => {
  
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
  currentlyReading: state.currentlyReading,
  wantToRead: state.wantToRead,
  read: state.read
})

const mapDispatchToProps = {
  MTcurrentlyReading,
  MTwantToRead,
  MTread,
  MTnone
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksApp)
