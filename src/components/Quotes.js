import React, { Component } from 'react';
import Quote from './Quote';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllQuotes, getPopularQuotes } from '../actions';
import { Button, Typography, Menu, MenuItem, Divider, Fab } from '@material-ui/core';
import backgroundImage from '../assets/background-image/background-image-main.jpg';
import {
    NavigateNextRounded,
    NavigateBeforeRounded,
    Sort,
    WhatshotRounded,
    ShowChartRounded,
    ShuffleRounded
} from '@material-ui/icons/';
import { SORT_POPULAR, SORT_TRENDING, SORT_RANDOM } from '../constants/ActionTypes';


class Quotes extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1,
            quotesPerPage: 16,
            anchorEl: null,
        }
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleMenuClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose(type) {
        switch (type) {
            case SORT_POPULAR:
                this.props.getPopularQuotes();
                break;
            case SORT_TRENDING:
                this.props.getAllQuotes();
                break;
            case SORT_RANDOM:
                console.log("PLACE HOLDER");
                break;
            default:
                break;
        }
        this.setState({ anchorEl: null });
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

        //For SortMenu Click
        const { anchorEl } = this.state;

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
            currentPageQuotes.map((item, index) => {
                return (
                    <Quote key={index} likes_count={item.likes_count} author={item.author} text={item.text}/>
                )
            });

        const pageNumbers = [];

        for (let i = 1; i < Math.ceil(all_quotes.length / quotesPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div style={{ "paddingBottom": "50px", "paddingTop": "10px" }}>
                    <Fab
                        size="small"
                        onClick={this.handleNextPage}
                        color="primary"
                        style={{
                            float: "right",
                            "marginRight": "50px",
                            "marginLeft": "30px"
                        }}>
                        <NavigateNextRounded />
                    </Fab>
                    <Fab
                        size="small"
                        onClick={this.handlePreviousPage}
                        color="primary"
                        style={{ float: "right" }}>
                        <NavigateBeforeRounded />
                    </Fab>
                    <Typography style={{
                        float: "right",
                        "fontSize": "16px",
                        "margin": "10px",
                        "alignContent": "center"
                    }} >Page {this.state.currentPage} of {pageNumbers.length}</Typography>
                    <Button color="primary"
                        variant="outlined"
                        mini
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        style={{ float: "right", "marginRight": "2px" }}
                        onClick={this.handleMenuClick}>
                        <Typography style={{ "marginRight": "5px" }}>Sort</Typography>
                        <Sort />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                        style={{ "fontSize": "16px" }}>
                        <MenuItem onClick={() => { this.handleClose(SORT_POPULAR) }} >
                            <WhatshotRounded style={{ "marginRight": "5px" }} />
                            <Typography>Popular</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => { this.handleClose(SORT_TRENDING) }} >
                            <ShowChartRounded style={{ "marginRight": "5px" }} />
                            <Typography>Trending</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => { this.handleClose(SORT_RANDOM) }}>
                            <ShuffleRounded style={{ "marginRight": "5px" }} />
                            <Typography>Random</Typography>
                        </MenuItem>
                    </Menu>
                </div>
                <div container="true">{renderQuotes}</div>
            </div>
        );
    }

}

Quotes.propTypes = {
    getAllQuotes: PropTypes.func.isRequired,
    sortPopularQuotes: PropTypes.func,
    quotes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    quotes: state.quotes.quotes
})

export default connect(mapStateToProps, { getAllQuotes, getPopularQuotes })(Quotes);