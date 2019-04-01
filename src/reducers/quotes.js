import { GET_QUOTES } from '../constants/ActionTypes'

const initialState = {

    quotes: []

}

export default function (state = initialState, action) {

    switch (action.type) {

        case 'GET_QUOTES':
            return {
                ...state,
                quotes: action.payload

            }

        default:
            return state;
    }

}