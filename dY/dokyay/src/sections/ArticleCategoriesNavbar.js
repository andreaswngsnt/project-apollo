import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import NavPills from '../components/NavPills/NavPills'

import articleCategoriesNavbarStyle from '../assets/jss/dokYayStyles/sections/articleCategoriesNavbarStyle'

class ArticleCategoriesNavbar extends Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<GridContainer justify='center'>
					<GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
						<NavPills
							alignCenter
							tabs={[
								{
									tabButton: 'Beranda',
									tabContent: ''
								},
								{
									tabButton: 'Semua',
									tabContent: ''
								},
								{
									tabButton: 'Kanker',
									tabContent: ''
								}
							]} />
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(articleCategoriesNavbarStyle)(ArticleCategoriesNavbar)