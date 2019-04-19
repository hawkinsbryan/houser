import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';

import { HashRouter } from "react-router-dom"
import routes from './routes'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header /> {/* pass props something like this user={user} updateUser={this.updateUser} */}
          {routes}
        </div>
      </HashRouter>
    );
  }
}

export default App;