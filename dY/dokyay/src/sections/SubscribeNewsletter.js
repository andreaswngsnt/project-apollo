import React from 'react'

import withStyles					from '@material-ui/core/styles/withStyles'
import InputAdornment from '@material-ui/core/InputAdornment'

import Mail from '@material-ui/icons/Mail'

import Button								from '../components/CustomButtons/Button'
import Card										from '../components/Card/Card'
import CardBody						from '../components/Card/CardBody'
import CustomInput			from '../components/CustomInput/CustomInput'
import GridContainer from '../components/Grid/GridContainer'
import GridItem						from '../components/Grid/GridItem'

import subscribeNewsletterStyle from '../assets/jss/dokYayStyles/sections/subscribeNewsletterStyle'

function SubscribeNewsletter({ ...props }) {
	const { classes } = props
	return (
		<div className={classes.section}>
			<div className={classes.container}>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6}>
						<h3 className={classes.title}>Dapatkan Info Kesehatan Terkini</h3>
						<p className={classes.description}>
							Kami akan mengirim informasi kesehatan terkini langsung ke email anda. Gratis.
						</p>
					</GridItem>
					<GridItem xs={12} sm={6} md={6}>
						<Card plain className={classes.cardClasses}>
							<CardBody formHorizontal plain>
								<form>
									<GridContainer>
										<GridItem xs={12} sm={8} md={8} className={classes.alignItemsCenter}>
											<CustomInput
												id="subscribe"
												formControlProps={{
													fullWidth: true,
													className: classes.formControl
												}}
												inputProps={{
													startAdornment: (
														<InputAdornment position='start'>
															<Mail className={classes.icon} />
														</InputAdornment>),
													placeholder: 'Email anda'
												}}
											/>
										</GridItem>
										<GridItem xs={12} sm={4} md={4}>
											<Button round block color='primary'>
												Langganan
									</Button>
										</GridItem>
									</GridContainer>
								</form>
							</CardBody>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	)
}

export default withStyles(subscribeNewsletterStyle)(SubscribeNewsletter)