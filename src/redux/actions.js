import {SEARCHED_BOOKS, MT_CURRENTLY_READING,MT_WANT_TO_READ,MT_READ,MT_NONE, CURRENTLY_READING, WANT_TO_READ, READ} from './types'

export const setSearchedBooks = (books) => (
    {
        type:SEARCHED_BOOKS,
        books
    }
)

export const setCurrentlyReading = (books) => (
    {
        type:CURRENTLY_READING,
        books
    }
)

export const setWantToRead = (books) => (
    {
        type:WANT_TO_READ, 
        books
    }
)

export const setRead = (books) => (
    {
        type:READ,
        books
    }
)

export const MTCurrentlyReading = (book) => (
    {
        type:MT_CURRENTLY_READING,
        book
    }
)

export const MTWantToRead = (book) => (
    {
        type:MT_WANT_TO_READ,
        book
    }
)

export const MTRead = (book) => (
    {
        type:MT_READ,
        book
    }
)

export const MTNone = (book) => (
    {
        type:MT_NONE,
        book
    }
)