import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
class App extends Component {
  constructor(props) {
    super(props);
    this.launchLogin=this.launchLogin.bind(this);
  }


  // aquí se pasan los valores de los input por
  //los parámetros que hemos enviado desde login.js

  launchLogin(email, password) {

    const url = "https://ada-controller.deploy-cd.com/api/login_check";
    const savedToken = JSON.parse(localStorage.getItem('token'));
    if(savedToken){
      //se haría la petición al listado de bares y se pasaría a la página principal
    } else {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({_username: email, _password: password}),
        headers:{
          "Content-Type": "application/json; charset=utf-8",
        }})
      .then(res => res.json())
      .then(response => localStorage.setItem('token', JSON.stringify(response)));
    }
  }

  render() {
      //localStorage.removeItem('token');
    return (
      <div className="App">
        <Login launchLogin={this.launchLogin}/>
      </div>
    );
  }
}

export default App;
