import React, { useState } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/list-books';
import SearchBooks from './components/search-books';

const BooksApp = () => {

  const [showSearchPage,setShowSearchPage] = useState(false)
  
    return (
      <div className="app">
        {showSearchPage ? (
          <SearchBooks setShowSearchPage={setShowSearchPage}/>
        ) : (
          <ListBooks setShowSearchPage={setShowSearchPage}/>
        )}
      </div>
    )
  }

export default BooksApp
