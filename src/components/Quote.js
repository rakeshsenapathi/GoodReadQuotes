import React, { Component } from 'react';
import { Card, CardActionArea, Typography } from '@material-ui/core';
import { ThumbUpAltRounded } from '@material-ui/icons';
import { styled } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Quote extends Component {

    state = {}
    render() {
        const CardQuote = styled(Card)({
            overflow: 'hidden',
            width: '20%',
            margin: '1%',
            padding: '1%',
            display: 'inline-block'
        });

        const CardQuoteFooter = styled(CardActionArea)({
            padding: 15,
            display: 'inline'
        });

        return (
            <Router>
                <React.Fragment>
                    <CardQuote>
                        <Typography style={{ "textAlign": "center", "fontSize": "20px" }}>{this.props.text}</Typography>
                        <Typography style={{ "textAlign": "center", "fontSize": "16px", "marginTop": "10px", "fontWeight": "bold" }}>
                            <Link to={`/author/${this.props.author}`}
                                target="_blank"
                                style={{ "textDecoration": "none" }}>{this.props.author.toUpperCase()}</Link>
                        </Typography>
                        <CardQuoteFooter style={{ float: "left" }}>
                            <ThumbUpAltRounded style={{ "textAlign": "left", float: "left" }} />
                            <Typography style={{ "fontSize": "18px", "marginLeft": "5px", "float": "left" }}>{this.props.likes_count}
                            </Typography>
                        </CardQuoteFooter>
                    </CardQuote>
                </React.Fragment>
            </Router>
        );

    }
}

export default Quote;