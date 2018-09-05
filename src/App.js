import React, { Component } from 'react';
import './App.css';
import DetailBar from './components/DetailBar';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logout />
          <DetailBar />
        </header>
      </div>
    );
  }
}

export default App;
