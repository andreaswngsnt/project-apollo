import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Card     from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'

export class Login extends Component {

	static defaultProps = {
		returnTo: '/'
	}

	state = {
		userType: '',
		email:    '',
		password: ''
	}

	componentDidMount = () => {
		// let type = getQueryVariable('type')
		// console.log(type)
		
		// Get login user type
		//
		this.setState({ userType: 'patient' })
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	render = () => {
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
				<div>
					<Card style={{
						width:     '300px',
						margin:    '0px auto',
						marginTop: '10%',
						padding:   '16px',
						textAlign: 'center'
					}}>
						Log In Umum<br/>
						Log in dengan media sosial<br/>
						<br/>
						[FB] [TW] [GP]<br/>
						<br/>
						Log in normal <br/>
						<TextField
							required
							label='Email'
							value={this.state.email}
							onChange={this.handleChange('email')} />
						<TextField
							required
							label='Password'
							type="password"
							value={this.state.password}
							onChange={this.handleChange('password')} />
					</Card>
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