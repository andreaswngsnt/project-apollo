import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Login extends Component {

	static defaultProps = {
		returnTo: '/'
	}

	states = {
		userType: ''
	}

	componentDidMount = () => {
		// let type = getQueryVariable('type')
		// console.log(type)
		
		// Get login user type
		//
	}

	render = () =>{
		if (!userType) {
			// Undefined
			<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
				Invalid user type
			</div>
		}
		else if (userType === 'patient') {

		}
		else if (userType === 'doctor') {

		}
		else {
			// Uncaught user type
		}
	}
}

export default Login