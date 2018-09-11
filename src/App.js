import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import LayoutPrincipal from './components/LayoutPrincipal';
import { withRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    loginError: false,
	  email: 'usuario',
	  classError:'hidden',
	  classErrorInputEmail:'form-input form-input--top',
	  classErrorInputPassword:'form-input',
	  inputE:'',
	  inputP:'',
    establishments: []
    }

    this.launchLogin = this.launchLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.postEstablishments = this.postEstablishments.bind(this);
    this.login = this.login.bind(this);
    this.errorData = this.errorData.bind(this);
    this.handleChangeInputEmail=this.handleChangeInputEmail.bind(this);
    this.handleChangeInputPassword=this.handleChangeInputPassword.bind(this);
  }

  componentWillMount() {
    const savedToken = JSON.parse(localStorage.getItem('token'));
    if (savedToken) {
      this.postEstablishments(savedToken);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.setState({
	  email: 'usuario',
	  classError:'hidden',
	  classErrorInputEmail:'form-input form-input--top',
    classErrorInputPassword:'form-input',
    inputE:'',
	  inputP:''
    });
    this.props.history.push('/');
  }

  postEstablishments(savedToken) {

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
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', JSON.stringify(response.token));
          fetch(establishments, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + response.token
            }
          })
            .then(response1 => response1.json())
            .then(response2 => {
              this.setState({
                establishments: response2
              })
            })
          this.setState({
            email: email,
            loginError: false
          });
          this.props.history.push('/LayoutPrincipal');
        } else {
          this.errorData();
        }
      });
  }

  errorData() {
    this.setState({
	  loginError: true,
	  classError:'visible',
	  classErrorInputEmail:'errorEmail',
	  classErrorInputPassword:'error',
	  inputE:'',
	  inputP:'',
    });
  }

  launchLogin(email, password) {
    const savedToken = JSON.parse(localStorage.getItem('token'));
    this.setState({
      email: email
    });
    if (savedToken) {
      this.postEstablishments(savedToken);
    } else {
      this.login(email, password);
    }
  }
  handleChangeInputEmail(inputE){
    this.setState({
      inputE:inputE,
      classError:'hidden',
      classErrorInputEmail:'form-input form-input--top',
      classErrorInputPassword:'form-input'
    });
  }
  handleChangeInputPassword(inputP){
    this.setState({
      inputP:inputP
    });
  }

  render() {
    //localStorage.removeItem('token');
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'
            render={() => <Login
              launchLogin={this.launchLogin} 
              loginError={this.state.loginError}
              classError={this.state.classError} 
              inputE={this.state.inputE} 
              inputP={this.state.inputP}
              classErrorInputPassword={this.state.classErrorInputPassword} 
              classErrorInputEmail={this.state.classErrorInputEmail}
              handleChangeInputEmail={this.handleChangeInputEmail} 
              handleChangeInputPassword={this.handleChangeInputPassword}
            />}
          />
          <Route path='/' render={(props) => < LayoutPrincipal
            email={this.state.email}
            establishments={this.state.establishments}
            logout={this.logout}
            match={props.match} />}
          />
        </Switch>
        {/* si this.state.loginError es true, pintamos lo que meta dentro de ( )
        si this.state.loginError es false, NO pintamos lo que meta dentro de ( ) */}
      </div>
    );
  }
}

export default withRouter(App);
