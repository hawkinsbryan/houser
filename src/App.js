import React, { Component } from 'react';
import './App.css';
import Header from './Components/header/Header';
import Dashboard from './Components/dashboard/Dashboard';
import Wizard from './Components/wizard/Wizard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  render() {
    return (
      <div className="App">
        <Header /> {/* pass props something like this user={user} updateUser={this.updateUser} */}
        <Dashboard />{/* user={user} */}
        <Wizard />{/* user={user} */}

      </div>
    );
  }
}

export default App;