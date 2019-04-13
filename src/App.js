import React, { Component } from 'react';
import './App.css';
import Quotes from './components/Quotes';
import Author from './components/Author';
import AppHeader from './components/AppHeader';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <AppHeader />
            <Route exact path="/" component={Quotes} />
            <Route exact path="/author/:authorName"
              component={({ match }) => <Author name={match.params.authorName} />} />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
