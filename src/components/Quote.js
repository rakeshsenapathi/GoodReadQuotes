import React, { Component } from 'react';
import { Card, CardActionArea, Grid, Typography, IconButton } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import Icon from '@material-ui/core/Icon';
import { cardStyle } from '../index.css';

class Quote extends Component {
    state = {}
    render() {
        const CardQuote = styled(Card)({
            overflow: 'hidden',
            width: '20%',
            margin: '2%',
            display: 'inline-block'
        });

        const CardQuoteFooter = styled(CardActionArea)({
            padding: 10,
        });

        return (
            <CardQuote id={this.props.key} style={{ padding: "2px" }} >
                <Typography style={{ "text-align": "center" }}>{this.props.text}</Typography>
                <CardQuoteFooter id={this.props.key}>
                    <div>
                        <Typography style={{ float: "left" }}>
                            <Icon color="secondary"></Icon>{this.props.author}
                        </Typography>
                    </div>
                    <div>
                        <Typography style={{ float: "right" }}>
                            <Icon />{this.props.likes}
                        </Typography>
                    </div>
                </CardQuoteFooter>
            </CardQuote>
        );
    }
}

export default Quote;