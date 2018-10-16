import React, { Component } from 'react'
import { Link, Redirect }   from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'

import Button    from '@material-ui/core/Button'
import Card      from '@material-ui/core/Card'
import List						from '@material-ui/core/List'
import ListItem	 from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'

import DokYayFooter		from '../components/DokYay/DokYayFooter'
import DokYayHeader		from '../components/DokYay/DokYayHeader'
import GridContainer from '../components/Grid/GridContainer'
import GridItem						from '../components/Grid/GridItem'
import Parallax						from '../components/Parallax/Parallax'

import loginPageStyle from '../assets/jss/material-kit-pro-react/views/loginPageStyle'
import parallaxBg     from '../assets/img/bg/bg1.jpg'

class Login extends Component {

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

	externalLogin = (platform) => {
		alert('External login for ' + platform + ' coming soon!')
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	submitLogin = () => {
		alert('Login!')
	}

	render = () => {
		const { classes } = this.props
		let loginForm = null

		if (!this.state.userType) {
			// Undefined
			loginForm = (
				<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
					Invalid user type
				</div>
			)
		}
		else if (this.state.userType === 'patient') {
			loginForm = (
				<div>
					<Card style={{
						width:     '350px',
						margin:    '0px auto',
						padding:   '16px',
						textAlign: 'center'
					}}>
						<h2>Log In Umum</h2>
						Log in dengan media sosial<br/>
						<br/>
						<i className='fab fa-facebook-square fa-2x'
							style={{
								cursor:      'pointer',
								marginRight: '16px',
								color:       '#3B5998'
							}}
							onClick={this.externalLogin.bind(this, 'facebook')}></i>
						<i className='fab fa-twitter-square fa-2x'
							style={{
								cursor:      'pointer',
								marginRight: '16px',
								color:       '#1DA1F2'
							}}
							onClick={this.externalLogin.bind(this, 'twitter')}></i>
						<i className='fab fa-google-plus-square fa-2x'
							style={{
								cursor: 'pointer',
								color:  '#DB4437'
							}}
							onClick={this.externalLogin.bind(this, 'googleplus')}></i><br/>
						<br/><br/>
						Log in normal <br/>
						<i className='fas fa-envelope'
							style={{
								display:       'inline-block',
								marginRight:   '16px',
								marginBottom:  '12px',
								verticalAlign: 'bottom'
							}}></i>
						<TextField
							required
							style={{display: 'inline-block'}}
							placeholder='Email'
							value={this.state.email}
							onChange={this.handleChange('email')} />
						<br/><br/>
						<i className='fas fa-lock'
							style={{
								display:       'inline-block',
								marginRight:   '16px',
								marginBottom:  '12px',
								verticalAlign: 'bottom'
							}}></i>
						<TextField
							required
							placeholder='Password'
							type='password'
							value={this.state.password}
							onChange={this.handleChange('password')} />
						<br/><br/><br/>
						<Button variant='contained' color='primary' className={classes.button} onClick={this.submitLogin}>
							Log In
						</Button>
						<br/><br/>
					</Card>
				</div>
			)
		}
		else if (this.state.userType === 'doctor') {
			loginForm = (
				<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
					Doctor user type
				</div>
			)
		}
		else {
			// Uncaught user type
			loginForm = (
				<div style={{ width: '100%', padding: '16px', background: '#eee', color: '#000'}}>
					Uncaught user type
				</div>
			)
		}

		return (
			<div style={{ border: '1px solid black', height: '100vh' }}>
				<DokYayHeader />
				<div className={classes.main}>
					<div className={classes.container} style={{color: '#000000'}}>
						{loginForm}
					</div>
				</div>
				<DokYayFooter />
			</div>
		)
	}
}

export default withStyles(loginPageStyle)(Login)