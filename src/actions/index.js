import api from '../api/api';
import * as types from '../constants/ActionTypes';

export const getQuotes = (quotes) => ({

    type: types.GET_QUOTES,
    payload: quotes

})

export const sortPopularQuotes = (quotes) => ({
    type: types.SORT_POPULAR,
    payload: quotes
})

export const getAllQuotes = () => dispatch => {
    api.getQuotes(quotes => {
        dispatch(getQuotes(quotes));
    })
}

export const getPopularQuotes = () => dispatch => {

    api.sortPopularQuotes(quotes => {
        dispatch(sortPopularQuotes(quotes));
    })

}

export const quotesByAuthor = (author_quotes) => ({
    type: types.AUTHOR_QUOTES,
    payload: author_quotes
})

export const getQuotesByAuthor = (name) => dispatch => {

    api.getQuotesByAuthor(author_quotes => {
        dispatch(quotesByAuthor(author_quotes));
    }, name)

}