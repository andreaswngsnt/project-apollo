import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Login extends Component {

	static defaultProps = {
		returnTo: '/'
	}

	render = () =>{
		return (
			<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
				Login page lelelelel
			</div>
		)
	}
}

export default Login