import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
//import MenuCollapsible from './components/MenuCollapsible';
import ItemBar from './components/BarList';

import BarList from './components/BarList';
import DetailBar from './components/DetailBar';
import Logout from './components/Logout';
import MenuCollapsible from './components/MenuCollapsible';

class App extends Component {
  constructor(props) {
    super(props);
    
    //this.listBar=this.listBar.bind(this);
  }
  // componentDidMount() {
  //   listBar();
  // }
// aquí se pasan los valores de los input por 
//los parámetros que hemos enviado desde login.js
  // launchLogin(email, password) {


  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/BarList'
        render={() => <Login
          // launchLogin={this.launchLogin}
          /* <MenuCollapsible /> */
          />}
        />
          <Route path='/' component={ BarList }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
