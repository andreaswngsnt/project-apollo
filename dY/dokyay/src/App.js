import React, { Component }          from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './admin/login'
import HomePage from './admin/home'
import PromoPage from './admin/promo'
import AboutPage from './admin/about'

import logo from './logo.svg'
import "./assets/scss/material-kit-pro-react.css?v=1.1.0"

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
					<Route exact path='/' component={HomePage} />
					<Route path='/promo' component={PromoPage} />
					<Route path='/tentang' component={AboutPage} />
					<Route path='/login' component={Login} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
