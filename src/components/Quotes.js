import React, { Component } from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllQuotes } from '../actions';
import { Button, Grid, Typography } from '@material-ui/core';


class Quotes extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1,
            quotesPerPage: 16,
        }
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
    }

    handleNextPage() {
        if (this.state.currentPage !== this.props.quotes.length) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }

    handlePreviousPage() {

        if (this.state.currentPage !== 1) {
            this.setState({

                currentPage: this.state.currentPage - 1

            })
        }
    }

    componentWillMount() {

        this.props.getAllQuotes();

    }

    render() {

        //console.log(this.props.quotes);
        const all_quotes = this.props.quotes;

        // Pagination Implementation
        const { currentPage, quotesPerPage } = this.state;
        //console.log(`${currentPage}`);
        const indexOfLast = currentPage * quotesPerPage;
        const indexOfFirst = indexOfLast - quotesPerPage;
        const currentPageQuotes = all_quotes.slice(indexOfFirst, indexOfLast);
        //console.log(`currentPageQuotes : ${currentPageQuotes}`);

        const renderQuotes =
            currentPageQuotes.map(item => {

                return (
                    <Quote key={Math.random()} likes={item.likes} author={item.author} text={item.text} />
                )
            });

        const pageNumbers = [];

        for (let i = 1; i < Math.ceil(all_quotes.length / quotesPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <React.Fragment>
                <div container="true">{renderQuotes}</div>
                <Button variant="outlined" color="primary" onClick={this.handlePreviousPage}>
                    Previous Page</Button>
                <Button variant="outlined" color="primary" onClick={this.handleNextPage}>
                    Next Page</Button>
                <Typography>Page No : {this.state.currentPage}</Typography>
            </React.Fragment>
        );
    }

}

Quotes.propTypes = {
    getAllQuotes: PropTypes.func.isRequired,
    quotes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    quotes: state.quotes.quotes
})

export default connect(mapStateToProps, { getAllQuotes })(Quotes);