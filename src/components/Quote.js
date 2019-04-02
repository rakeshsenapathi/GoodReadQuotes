import React, { Component } from 'react';
import { Card, CardActionArea, Grid, Typography, IconButton } from '@material-ui/core';
import { styled } from '@material-ui/styles';
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
            padding: 10,
        });

        return (
            <CardQuote id={this.props.key}>
                <Typography style={{ "text-align": "center", "fontSize": "20px" }}>{this.props.text}</Typography>
                <Typography style={{ "text-align": "center", "fontSize": "16px", "margin-top": "10px", "font-weight": "bold" }}>{this.props.author.toUpperCase()}
                </Typography>
                <CardQuoteFooter id={this.props.key}>
                    <Typography style={{ "fontSize": "18px", "text-align": "right" }}>{this.props.likes}
                    </Typography>
                </CardQuoteFooter>
            </CardQuote>
        );
    }
}

export default Quote;