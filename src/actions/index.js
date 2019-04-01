import api from '../api/api';
import * as types from '../constants/ActionTypes';

export const getQuotes = (quotes) => ({

    type: types.GET_QUOTES,
    payload: quotes

})

export const getAllQuotes = () => dispatch => {
    api.getQuotes(quotes => {
        dispatch(getQuotes(quotes));
    })
} 