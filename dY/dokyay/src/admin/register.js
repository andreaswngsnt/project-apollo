import React, { Component } from 'react'
import { Link, Redirect }   from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'

import Button    from '@material-ui/core/Button'
import Card      from '@material-ui/core/Card'
import Checkbox  from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'

import moment from 'moment'
import MomentUtils from 'material-ui-pickers/utils/moment-utils'
import MaterialUiPickersProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import { DatePicker } from 'material-ui-pickers'

import DokYayFooter	 from '../components/DokYay/DokYayFooter'
import DokYayHeader	 from '../components/DokYay/DokYayHeader'
import Parallax	     from '../components/Parallax/Parallax'

import loginPageStyle from '../assets/jss/material-kit-pro-react/views/loginPageStyle'

class Register extends Component {

	static defaultProps = {
		returnTo: '/'
	}

	state = {
		fullName:        '',
		email:           '',
		password:        '',
		confirmPassword: '',
		sex:             '',
		dateOfBirth:     null,
		invitationCode:  ''
	}

	componentDidMount = () => {
	}

	externalLogin = (platform) => {
		alert('External login for ' + platform + ' coming soon!')
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		})
	}

	submitRegister = () => {
		alert('Register!')
	}

	render = () => {
		const
			{ classes } = this.props,
			titleStyle = {
				fontWeight: 700,
				fontSize:   20,
				paddingBottom: '8px'
			},
			textStyle = {
				opacity: 0.5
			},
			iconStyle = {
				display:       'inline-block',
				marginRight:   '16px',
				marginBottom:  '8px',
				verticalAlign: 'bottom'
			}

		return (
			<MaterialUiPickersProvider utils={MomentUtils} moment={moment}>
			<div style={{ border: '1px solid black', height: '100vh' }}>
				<DokYayHeader />
				<div className={classes.main}>
					<div className={classes.container} style={{color: '#000000'}}>
						<Card style={{
							width:     '700px',
							margin:    '0px auto',
							padding:   '16px',
							textAlign: 'center'
						}}>
							<h2>Registrasi Umum</h2>
							<br/>
							<div style={{
								display:       'inline-block',
								width:         '50%',
								wordWrap:      'whitespace',
								verticalAlign: 'top',
								textAlign:     'left'
							}}>
							<i className='material-icons' style={{marginRight: '4px', color: '#007E33'}}>money_off</i>
							<span style={titleStyle}>Registrasi gratis</span><br/>
							<span style={textStyle}>
								Registrasi gratis dengan kami. Kami tidak memungut biaya apapun untuk bertemu dengan dokter anda.
							</span><br/><br/>
							<i className='material-icons' style={{marginRight: '4px', color: '#0099CC'}}>schedule</i>
							<span style={titleStyle}>Hindari antrian panjang</span><br/>
							<span style={textStyle}>
								Anda tidak perlu berjam-jam untuk menemui dokter. Hindari antrian panjang dengan sistem booking kami.
							</span><br/><br/>
							<i className='material-icons' style={{marginRight: '4px', color: '#d81b60'}}>favorite</i>
							<span style={titleStyle}>Simpan dokter favorit anda</span><br/>
							<span style={textStyle}>
								Anda tidak perlu susah-susah mengingat dan mencari dokter favorit anda. Anda bisa menyimpan dokter favorit anda dan menemuinya lagi dengan instan.
							</span><br/><br/>
							</div>
							<div style={{
								display: 'inline-block',
								width:   '50%'
							}}>
								Registrasi dengan media sosial <br/>
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
								Registrasi normal <br/>
								<i className='fas fa-user' style={iconStyle}></i>
								<TextField
									required
									style={{display: 'inline-block'}}
									placeholder='Nama lengkap anda'
									value={this.state.fullName}
									onChange={this.handleChange('fullName')} />
								<br/>
								<i className='fas fa-envelope' style={iconStyle}></i>
								<TextField
									required
									style={{display: 'inline-block'}}
									placeholder='Email'
									value={this.state.email}
									onChange={this.handleChange('email')} />
								<br/>
								<i className='fas fa-lock' style={iconStyle}></i>
								<TextField
									required
									placeholder='Password'
									type='password'
									value={this.state.password}
									onChange={this.handleChange('password')} />
								<br/>
								<i className='fas fa-lock' style={iconStyle}></i>
								<TextField
									required
									placeholder='Ulangi password'
									type='password'
									value={this.state.confirmPassword}
									onChange={this.handleChange('confirmPassword')} />
								<br/>
								<i className='fas fa-birthday-cake' style={iconStyle}></i>
								<DatePicker
									placeholder='Date of Birth'
									format='DD/MMM/YYYY'
									value={this.state.dateOfBirth}
									animateYearScrolling={false}
									maxDate={new Date()}
									onChange={date => { this.setState({ dateOfBirth: date }) }} />
								<br/><br/>
								Sudah punya akun? <a href='/login?type=umum'>Login di sini</a>
								<Button variant='contained' color='primary' className={classes.button} onClick={this.submitLogin}>
									Register Sekarang
								</Button>
							</div>
							<br/><br/>
						</Card>
					</div>
				</div>
				<DokYayFooter />
			</div>
			</MaterialUiPickersProvider>
		)
	}
}

export default withStyles(loginPageStyle)(Register)