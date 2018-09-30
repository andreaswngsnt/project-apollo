﻿import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Chat from '@material-ui/icons/Chat'
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import Fingerprint from '@material-ui/icons/Fingerprint'

import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import InfoArea from '../components/InfoArea/InfoArea'

import productStyle from '../assets/jss/material-kit-pro-react/views/landingPageSections/productStyle'

class AppFeature extends Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={8} md={8}>
						<h2 className={classes.title}>Aplikasi dokYAY!</h2>
						<h5 className={classes.description}>
							Kami membuat kesehatan tersedia di genggaman anda. Anda tidak perlu khawatir jatuh sakit saat berpergian ke kota lain.
						</h5>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(productStyle)(AppFeature)