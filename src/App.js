import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import LayoutPrincipal from './components/LayoutPrincipal';
import Notification from './components/Notification';
import { withRouter, Route, Switch } from 'react-router-dom';
const savedToken = JSON.parse(localStorage.getItem('token'));
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginError: false,
			email: 'usuario',
			establishments: []

		}
		this.launchLogin = this.launchLogin.bind(this);
		this.logout = this.logout.bind(this);
		this.postEstablishments = this.postEstablishments.bind(this);
		this.login = this.login.bind(this);
		this.errorData = this.errorData.bind(this);
	}
	componentWillMount() {
		if (savedToken) {
			this.postEstablishments(savedToken);
		}
	}
	logout() {
		localStorage.removeItem('token');
		this.setState({
			email: 'usuario'
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
					localStorage.setItem('token', JSON.stringify(response.token))
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
			loginError: true
		});
	}
	launchLogin(email, password) {
		if (savedToken) {
			this.setState({
				email: email
			});
			this.postEstablishments(savedToken);
		} else {
			this.setState({
				email: email
			});
			this.login(email, password);

		}
	}

	render() {
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
				{this.state.loginError && (<Notification />)}
				{/* si this.state.loginError es true, pintamos lo que meta dentro de ( )

si this.state.loginError es false, NO pintamos lo que meta dentro de ( ) */}
			</div>
		);
	}
}

export default withRouter(App);
