import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Map />
        </header>
      </div>
    );
  }
}

export default App;
