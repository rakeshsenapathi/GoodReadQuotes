import { GET_QUOTES, SORT_POPULAR, AUTHOR_QUOTES } from '../constants/ActionTypes'

const initialState = {

    quotes: [],
    author_quotes: []

}

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_QUOTES:
            return {
                ...state,
                quotes: action.payload

            }

        case SORT_POPULAR:
            return {
                ...state,
                quotes: action.payload
            }

        case AUTHOR_QUOTES:
            return {
                ...state,
                author_quotes: action.payload
            }

        default:
            return state;
    }

}