import React, { Component, Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography, IconButton, Toolbar, AppBar } from '@material-ui/core';

class AppHeader extends Component {
    state = {}
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Good Read Quotes
            </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default AppHeader;