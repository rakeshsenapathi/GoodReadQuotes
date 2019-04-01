import React, { Component } from 'react';
import './App.css';
import Quotes from './components/Quotes';
import AppHeader from './components/AppHeader';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <AppHeader></AppHeader>
          <Quotes />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
