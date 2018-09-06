import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import LayoutPrincipal from './components/LayoutPrincipal';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
    this.launchLogin = this.launchLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.postEstablishments=this.postEstablishments.bind(this);
    this.login=this.login.bind(this);
  }


  logout() {
    localStorage.removeItem('token');
  }
  postEstablishments(savedToken){
    const establishments='https://ada-controller.deploy-cd.com/api/establishments';
    fetch(establishments, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + savedToken
      }  
    })
    .then(response => response.json())
    .then(response2 => console.log(response2));

  }
  login(email, password,){
    //aqui hacer comprobacion si el usuario no tiene acceso, para mostrar pantalla que no tiene acceso
    const url = "https://ada-controller.deploy-cd.com/api/login_check";
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ _username: email, _password: password }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    })
      .then(res => res.json())
      .then(response => localStorage.setItem('token', JSON.stringify(response.token)));
      
      //hacer otra peticion para mostrar los establecimientos la 1 vez que hace login y no está el LS
  }

    // aquí se pasan los valores de los input por
   //los parámetros que hemos enviado desde login.js
  launchLogin(email, password) {
    const savedToken = JSON.parse(localStorage.getItem('token'));
    if (savedToken) {
      //se haría la petición al listado de bares y se pasaría a la página principal
      this.postEstablishments(savedToken);
    } else {
      this.setState({
        email: email
      });
      this.login(email, password);
    }
  }
  

  render() {
    //localStorage.removeItem('token');
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'
            render={() => <Login
             launchLogin={this.launchLogin}
            />}
          />
          <Route path='/' render={(props) => < LayoutPrincipal email={this.state.email} match={props.match} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
