import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import LayoutPrincipal from './components/LayoutPrincipal';
import Notification from './components/Notification';
import { withRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      email: 'usuario'
    }
    this.launchLogin = this.launchLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.postEstablishments=this.postEstablishments.bind(this);
    this.login=this.login.bind(this);
    this.errorData=this.errorData.bind(this);
  }

  logout() {
    localStorage.removeItem('token');
    this.setState({
      email: 'usuario'
    });
    this.props.history.push('/');
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
    this.props.history.push('/LayoutPrincipal');
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
      .then(response => {
        if (response.token) {
          this.setState({
            email: email
          });
          this.props.history.push('/LayoutPrincipal');
          
        } else {
          this.errorData();
        }
        //si están vacíos los campos, required y comprobar length.y por programcion se pasa a la siguiente pagina
      });
      //hacer otra peticion para mostrar los establecimientos la 1 vez que hace login y no está el LS
  }

  errorData() {
    this.setState({
      loginError: true
    });
  }

    // aquí se pasan los valores de los input por
   //los parámetros que hemos enviado desde login.js
  launchLogin(email, password) {
    const savedToken = JSON.parse(localStorage.getItem('token'));
    if (savedToken) {
      //se haría la petición al listado de bares y se pasaría a la página principal
      this.postEstablishments(savedToken);
    } else {
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
          <Route path='/' render={(props) => < LayoutPrincipal email={this.state.email} logout={this.logout} match={props.match} />}
          />
        </Switch>
        {this.state.loginError && (<Notification />)} 
{/* si this.state.loginError es true, pintamos lo que meta dentro de ( )

si this.state.loginError es false, NO pintamos lo que meta dentro de ( ) */}
      </div>
    );
  }
}

export default withRouter(App);
