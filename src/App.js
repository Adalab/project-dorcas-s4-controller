import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import api_token from './data/api_token.json';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  launchLogin(email, password) {
    console.log(email);
    console.log(password);
    api_token.requests[2].data[0].value
    api_token.requests[2].data[1].value
  }

  render() {
    return (
      <div className="App">
        <Login launchLogin={this.launchLogin}/>
      </div>
    );
  }
}

export default App;
