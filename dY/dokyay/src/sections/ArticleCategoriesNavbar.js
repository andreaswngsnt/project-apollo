import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Search from '@material-ui/icons/Search'

import Button from '../components/CustomButtons/Button'
import CustomInput from '../components/CustomInput/CustomInput'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import NavPills from '../components/NavPills/NavPills'

import articleCategoriesNavbarStyle from '../assets/jss/dokYayStyles/sections/articleCategoriesNavbarStyle'

class ArticleCategoriesNavbar extends Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<GridContainer alignItems='center'>
					<GridItem xs={12} sm={9} md={9} className={classes.textCenter}>
						<NavPills
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
					<GridItem xs={12} sm={3} md={3}>
						<GridContainer alignItems='center'>
							<GridItem xs={9} sm={9} md={9}>
								<CustomInput
									inputProps={{
										placeholder: 'Cari Artikel'
									}}
									formControlProps={{
										fullWidth: true,
										className: classes.formControl
									}} />
							</GridItem>
							<GridItem xs={3} sm={3} md={3}>
								<Button justIcon round color='primary'><Search /></Button>
							</GridItem>
						</GridContainer>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(articleCategoriesNavbarStyle)(ArticleCategoriesNavbar)