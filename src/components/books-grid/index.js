import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { CURRENTLY_READING, READ, WANT_TO_READ, SEARCHED_BOOKS } from '../../redux/types';
import {MTCurrentlyReading,MTWantToRead,MTRead,MTNone} from '../../redux/actions'
import {update} from '../../BooksAPI';


const BooksGrid = props => {
    const {searchedBooks, currentlyReading, wantToRead, read} = props

    const books = (type) =>{
        switch (type) {
            case SEARCHED_BOOKS:
                return searchedBooks

            case CURRENTLY_READING:
                return currentlyReading
                
            case WANT_TO_READ:
                return wantToRead
            
            case READ:
                return read

            default:
                return []
        }
    }

    const dispatch = useDispatch();

    const changeHandler = (e,book) => {
        const shelf = e.target.value;
        update(book, shelf)
        switch(e.target.value){
            case 'currentlyReading':
                props.MTCurrentlyReading(book)
                break;
            case 'wantToRead':
                props.MTWantToRead(book)
                break;
            case 'read':
                props.MTRead(book)
                break;
            case 'none':
                props.MTNone(book)
                break;
        }
    }

    return(
        <ol className="books-grid">
            {Array.isArray(books(props.type)) && books(props.type).map(book => {
                const booka = currentlyReading.find(e=>e.id === book.id)||wantToRead.find(e=>e.id === book.id)||read.find(e=>e.id === book.id)
                console.log(book.imageLinks.smallThumbnail || "lol")
                return(
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${(book.imageLinks.smallThumbnail  && book.imageLinks.smallThumbnail)})`}}></div>
                            <div className="book-shelf-changer">
                            <select defaultValue={(booka !== undefined&&booka.shelf)||"move"} onChange={(e)=>changeHandler(e,book)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{[book.authors].join(', ')}</div>
                    </div>
                </li>
            )})}
        </ol>
    )
}

const mapStateToProps = state => ({
    searchedBooks: state.searchedBooks,
    currentlyReading: state.currentlyReading,
    wantToRead: state.wantToRead,
    read: state.read
})
const mapDispatchToProps = {
    MTCurrentlyReading,
    MTWantToRead,
    MTRead,
    MTNone
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksGrid);