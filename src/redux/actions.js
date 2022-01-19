import {MT_CURRENTLY_READING,MT_WANT_TO_READ,MT_READ,MT_NONE} from './types'

export const MTcurrentlyReading = (from,book) => (
    {
        type:MT_CURRENTLY_READING,
        from,
        book
    }
)

export const MTwantToRead = (from,book) => (
    {
        type:MT_WANT_TO_READ,
        from,
        book
    }
)

export const MTread = (from,book) => (
    {
        type:MT_READ,
        from,
        book
    }
)

export const MTnone = (from,book) => (
    {
        type:MT_NONE,
        from,
        book
    }
)