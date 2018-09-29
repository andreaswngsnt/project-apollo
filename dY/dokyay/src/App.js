import React, { Component }          from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './admin/login'

import logo from './logo.svg'
import './App.css'

class App extends Component {
	state = {
		signed_in_user: null // User object from API, null if not signed in
	}
	
	handleSignIn = (email) => {
		this.loadUser(email, (user) => {
			window.localStorage.setItem('signed_in_user', user)
			this.setState({ signed_in_user: user })
		})
	}

	handleSignOut = () => {
		const idToken = window.localStorage.getItem('id_token')

		window.localStorage.removeItem('signed_in_user')
		this.setState({ signed_in_user: null })
		const url = process.env.REACT_APP_IDP_LOGOUT_URI + '?post_logout_redirect_uri='
			+ encodeURIComponent(process.env.REACT_APP_PUBLIC_URL)
			+ '&id_token_hint=' + idToken

		window.location.href = url
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/'
						render={() => (
							<div className='App'>
								<header className='App-header'>
									<img src={logo} className='App-logo' alt='logo' />
									<h1 className='App-title'>Welcome to React</h1>
								</header>
								<p className='App-intro'>
									Homepage bois
								</p>
							</div>
						)} />
					<Route exact path='/login'
						render={() => (<Login />)} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
