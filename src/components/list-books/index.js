import React from 'react';
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import BooksGrid from '../books-grid';
import { CURRENTLY_READING, READ, WANT_TO_READ} from '../../redux/types';


const ListBooks = () => {

    let navigete = useNavigate()
    
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <BooksGrid type={CURRENTLY_READING}/>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <BooksGrid type={WANT_TO_READ}/>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <BooksGrid type={READ}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
              <button onClick={() => navigete('/search')}>Add a book</button>
            </div>
        </div>
    )
}

export default connect(null)(ListBooks);