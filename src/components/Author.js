import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuotesByAuthor } from '../actions';
import PropTypes from 'prop-types';
import Quote from './Quote';
import backgroundImage from '../assets/background-image/background-image-main.jpg';

class Author extends Component {

    componentDidMount() {
        this.props.getQuotesByAuthor(this.props.name);
    }

    render() {

        const author_quotes = this.props.author_quotes;

        const renderQuotes = author_quotes.map((quote, index) => {
            return (
                <Quote key={index} likes_count={quote.likes_count} author={quote.author} text={quote.text} />
            )
        })

        return (
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>>{renderQuotes}</div>
        );
    }
}

Author.propTypes = {
    getQuotesByAuthor: PropTypes.func.isRequired,
    author_quotes: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    author_quotes: state.quotes.author_quotes
})

export default connect(mapStateToProps, { getQuotesByAuthor })(Author);
