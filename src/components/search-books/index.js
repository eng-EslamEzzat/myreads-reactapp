import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import BooksGrid from '../books-grid';
import {setSearchedBooks} from '../../redux/actions'
import { connect } from 'react-redux';
import { SEARCHED_BOOKS } from '../../redux/types';

const SearchBooks = (props) => {
    let navigete = useNavigate()
    const {setSearchedBooks} = props
    const [text, setText] = useState('')

    const changeHandling = e =>{
      const {value} = e.target
      setText(value)
      value? BooksAPI.search(value).then(
        books => setSearchedBooks(Array.isArray(books)? books: [])
      ).catch((error) => {
        console.error('Error:', error);
      }):
      setSearchedBooks([])
    }

    return(
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => navigete('/')} >Close</button>
              <div className="search-books-input-wrapper">
                <input onChange={changeHandling} value={text} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <BooksGrid type={SEARCHED_BOOKS}/>
            </div>
          </div>
    )
}

const mapDispatchToProps = {
  setSearchedBooks
}
export default connect(null, mapDispatchToProps)(SearchBooks);