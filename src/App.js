import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import LayoutPrincipal from './components/LayoutPrincipal';


class App extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem('token');
  }


  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/LayoutPrincipal'
        render={() => <Login
          // launchLogin={this.launchLogin}
          /* <MenuCollapsible /> */
          />}
        />
          <Route path='/' component={ LayoutPrincipal }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
