import {SEARCHED_BOOKS, MT_CURRENTLY_READING,MT_WANT_TO_READ,MT_READ,MT_NONE, CURRENTLY_READING, WANT_TO_READ, READ} from './types'

const initState = {
    searchedBooks:[],
    currentlyReading:[],
    wantToRead:[],
    read:[]
}

export default (state = initState, action) => {
    let currentlyBooks = []
    switch (action.type) {
        case SEARCHED_BOOKS:
            return {...state, searchedBooks: action.books}

        case CURRENTLY_READING:
            return {...state, currentlyReading: action.books}
            
        case WANT_TO_READ:
            return {...state, wantToRead: action.books}
        
        case READ:
            return {...state, read: action.books}

        case MT_CURRENTLY_READING:
            console.log(action.book, action.book.shelf)
            if (action.book.shelf === 'read'){
                currentlyBooks = state.read.filter(b => b.id !== action.book.id)
                return {...state, read:currentlyBooks, currentlyReading:[...state.currentlyReading, {...action.book, shelf:"currentlyReading"}]}
            }
            else if (action.book.shelf === 'wantToRead'){
                currentlyBooks = state.wantToRead.filter(b => b.id !== action.book.id)
                return {...state, wantToRead:currentlyBooks, currentlyReading:[...state.currentlyReading, {...action.book, shelf:"currentlyReading"}]}
            }
            return {...state, currentlyReading:[...state.currentlyReading, {...action.book, shelf:"currentlyReading"}]}

        case MT_WANT_TO_READ:
            console.log(action.book, action.book.shelf)
            if (action.book.shelf === 'currentlyReading'){
                currentlyBooks = state.currentlyReading.filter(b => b.id !== action.book.id)
                return {...state, currentlyReading:currentlyBooks, wantToRead:[...state.wantToRead, {...action.book, shelf:"wantToRead"}]}
            }
            else if (action.book.shelf === 'read'){
                currentlyBooks = state.read.filter(b => b.id !== action.book.id)
                return {...state, read:currentlyBooks, wantToRead:[...state.wantToRead, {...action.book, shelf:"wantToRead"}]}
            }
            return {...state, wantToRead:[...state.wantToRead, {...action.book, shelf:"wantToRead"}]}

        case MT_READ:
            console.log(action.book, action.book.shelf)
            if (action.book.shelf === 'currentlyReading'){
                currentlyBooks = state.currentlyReading.filter(b => b.id !== action.book.id)
                return {...state, currentlyReading:currentlyBooks, read:[...state.read, {...action.book, shelf:"read"}]}
            }
            else if (action.book.shelf === 'wantToRead'){
                currentlyBooks = state.wantToRead.filter(b => b.id !== action.book.id)
                return {...state, wantToRead:currentlyBooks, read:[...state.read, {...action.book, shelf:"read"}]}
            }
            return {...state, read:[...state.read, {...action.book, shelf:"read"}]}

        case MT_NONE:
            console.log(action.book, action.book.shelf)
            if (action.book.shelf === 'currentlyReading'){
                currentlyBooks = state.currentlyReading.filter(b => b.id !== action.book.id)
                return {...state, currentlyReading:currentlyBooks}
            }
            else if (action.book.shelf === 'wantToRead'){
                currentlyBooks = state.wantToRead.filter(b => b.id !== action.book.id)
                return {...state, wantToRead:currentlyBooks}
            }
            else if (action.book.shelf === 'read'){
                currentlyBooks = state.read.filter(b => b.id !== action.book.id)
                return {...state, read:currentlyBooks}
            }

        default:
            return state
    }
}
