import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Login extends Component {

	static defaultProps = {
		returnTo: '/'
	}

	state = {
		userType: ''
	}

	componentDidMount = () => {
		// let type = getQueryVariable('type')
		// console.log(type)
		
		// Get login user type
		//
		this.setState({ userType: 'patient' })
	}

	render = () =>{
		console.log(this.state)
		if (!this.state.userType) {
			// Undefined
			return(
				<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
					Invalid user type
				</div>
			)
		}
		else if (this.state.userType === 'patient') {
			return(
				<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
					Patient user type
				</div>
			)
		}
		else if (this.state.userType === 'doctor') {
			return(
				<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
					Doctor user type
				</div>
			)
		}
		else {
			// Uncaught user type
			return(
				<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
					Uncaught user type
				</div>
			)
		}
	}
}

export default Login