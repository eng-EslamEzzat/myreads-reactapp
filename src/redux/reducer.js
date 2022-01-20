import {SEARCHED_BOOKS, MT_CURRENTLY_READING,MT_WANT_TO_READ,MT_READ,MT_NONE, CURRENTLY_READING, WANT_TO_READ, READ} from './types'

const initState = {
    searchedBooks:[],
    currentlyReading:[],
    wantToRead:[],
    read:[]
}

export default (state = initState, action) => {
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
            if (action.book.shelf === 'read'){
                const currentlyReading = state.read.filter(b => b.id !== action.book.id)
                return {...state, read:currentlyReading, currentlyReading:[...state.currentlyReading, {...action.book, shelf:"currentlyReading"}]}
            }
            else if (action.book.shelf === 'wantToRead'){
                const currentlyReading = state.wantToRead.filter(b => b.id !== action.book.id)
                return {...state, wantToRead:currentlyReading, currentlyReading:[...state.currentlyReading, {...action.book, shelf:"currentlyReading"}]}
            }

        case MT_WANT_TO_READ:
            if (action.book.shelf === 'currentlyReading'){
                const currentlyReading = state.currentlyReading.filter(b => b.id !== action.book.id)
                return {...state, currentlyReading:currentlyReading, wantToRead:[...state.wantToRead, {...action.book, shelf:"wantToRead"}]}
            }
            else if (action.book.shelf === 'read'){
                const currentlyReading = state.read.filter(b => b.id !== action.book.id)
                return {...state, read:currentlyReading, wantToRead:[...state.wantToRead, {...action.book, shelf:"wantToRead"}]}
            }

        case MT_READ:
            if (action.book.shelf === 'currentlyReading'){
                const currentlyReading = state.currentlyReading.filter(b => b.id !== action.book.id)
                return {...state, currentlyReading:currentlyReading, read:[...state.read, {...action.book, shelf:"read"}]}
            }
            else if (action.book.shelf === 'wantToRead'){
                const currentlyReading = state.wantToRead.filter(b => b.id !== action.book.id)
                return {...state, wantToRead:currentlyReading, read:[...state.read, {...action.book, shelf:"read"}]}
            }

        case MT_NONE:
            if (action.book.shelf === 'currentlyReading'){
                const currentlyReading = state.currentlyReading.filter(b => b.id !== action.book.id)
                return {...state, currentlyReading:currentlyReading}
            }
            else if (action.book.shelf === 'wantToRead'){
                const currentlyReading = state.wantToRead.filter(b => b.id !== action.book.id)
                return {...state, wantToRead:currentlyReading}
            }
            else if (action.book.shelf === 'read'){
                const currentlyReading = state.read.filter(b => b.id !== action.book.id)
                return {...state, read:currentlyReading}
            }

        default:
            return state
    }
}
