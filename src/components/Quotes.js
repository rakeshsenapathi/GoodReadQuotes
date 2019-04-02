import React, { Component } from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllQuotes } from '../actions';
import { Button, Typography } from '@material-ui/core';
import backgroundImage from '../assets/background-image/background-image.jpg';
import { NavigateNextRounded, NavigateBeforeRounded } from '@material-ui/icons/';

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
            <div>
                {/* style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} */}
                <div container style={{ "padding-bottom": "50px", "padding-top": "10px" }}>
                    <Button variant="fab" onClick={this.handleNextPage} color="primary" mini style={{ float: "right", "margin-right": "50px", "margin-left": "30px" }}>
                        <NavigateNextRounded />
                    </Button>
                    <Button variant="fab" onClick={this.handlePreviousPage} color="primary" mini style={{ float: "right" }}>
                        <NavigateBeforeRounded />
                    </Button>
                    <Typography style={{ float: "right", "font-size": "16px", "margin": "10px", "alignContent": "center" }} >Page {this.state.currentPage} of {pageNumbers.length}</Typography>
                </div>

                <div container="true"  >{renderQuotes}</div>
            </div >
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