import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/list-books';
import SearchBooks from './components/search-books';

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

export default BooksApp
