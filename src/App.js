import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logout />
          <Map />
        </header>
      </div>
    );
  }
}

export default App;
