import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';

import { HashRouter, Link } from "react-router-dom"
import routes from './routes'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Link to="/" />
          <Link to="/wizard" />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;