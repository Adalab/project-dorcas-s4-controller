import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import LayoutPrincipal from './components/LayoutPrincipal';
import { withRouter, Route, Switch } from 'react-router-dom';
const savedToken = JSON.parse(localStorage.getItem('token'));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'usuario',
      establishments: []
    }
    this.launchLogin = this.launchLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.postEstablishments = this.postEstablishments.bind(this);
    this.login = this.login.bind(this);
  }
  // componentWillMount () {
  //   if(savedToken){
  //     this.props.history.push('/LayoutPrincipal');
  //   }
  // }
  logout() {
    localStorage.removeItem('token');
    this.setState({
      email: 'usuario'
    });
    this.props.history.push('/');
  }
  postEstablishments(savedToken,email) {
    const establishments = 'https://ada-controller.deploy-cd.com/api/establishments';
    fetch(establishments, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + savedToken
      }
    })
      .then(response => response.json())
      .then(response2 => {
        const establishment = response2;
        this.setState({
        establishments: establishment
        })
        this.props.history.push('/LayoutPrincipal');
      })
  }

  login(email, password) {
    //aqui hacer comprobacion si el usuario no tiene acceso, para mostrar pantalla que no tiene acceso
    const url = "https://ada-controller.deploy-cd.com/api/login_check";
    const establishments = 'https://ada-controller.deploy-cd.com/api/establishments';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ _username: email, _password: password }),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    })
      .then(res => res.json())
      .then(function(response) {
        localStorage.setItem('token', JSON.stringify(response.token))

      fetch(establishments, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + response.token
          }
        })
          .then(response1 => response1.json())
          .then(response2 => {
            const establishment = response2;
            this.setState({
            establishments: establishment
            })
            
          })
          
  //   //hacer otra peticion para mostrar los establecimientos la 1 vez que hace login y no está el LS
  })
}

  // aquí se pasan los valores de los input por
  //los parámetros que hemos enviado desde login.js
  launchLogin(email, password) {
    if (savedToken) {
      //se haría la petición al listado de bares y se pasaría a la página principal
      this.postEstablishments(savedToken);
    } else {
      this.login(email, password);
      
    }
  }

  render() {
    // localStorage.removeItem('token');
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'
            render={() => <Login
              launchLogin={this.launchLogin}
            />}
          />
          <Route path='/' render={(props) => < LayoutPrincipal email={this.state.email} establishments={this.state.establishments} logout={this.logout} match={props.match} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
