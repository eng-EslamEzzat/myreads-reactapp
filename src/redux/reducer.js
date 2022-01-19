import {MT_CURRENTLY_READING,MT_WANT_TO_READ,MT_READ,MT_NONE} from './types'

const initState = {
    currentlyReading:[],
    wantToRead:[],
    read:[]
}

export default (state = initState, action) => {
    switch (action.type) {
        case MT_CURRENTLY_READING:
            return state
            
        case MT_WANT_TO_READ:
            return state
        
        case MT_READ:
            
            return state

        case MT_NONE:
            
            return state

        default:
            return state
    }
}
