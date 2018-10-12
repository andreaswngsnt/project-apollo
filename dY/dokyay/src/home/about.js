﻿import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'
import List		  from '@material-ui/core/List'
import ListItem	  from '@material-ui/core/ListItem'

import Header		 from '../components/Header/Header'
import HeaderLinks	 from '../components/Header/HeaderLinks'
import DokYayFooter	 from '../components/DokYay/DokYayFooter'
import GridContainer from '../components/Grid/GridContainer'
import GridItem		 from '../components/Grid/GridItem'
import Parallax		 from '../components/Parallax/Parallax'

import blogPostPageStyle from '../assets/jss/material-kit-pro-react/views/blogPostPageStyle'
import parallaxBg        from '../assets/img/bg/bg1.jpg'

import AboutText from '../sections/AboutText'


class AboutPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<Header
					color='transparent'
					links={<HeaderLinks dropdownHoverColor='primary' />}
					fixed
					changeColorOnScroll={{
						height: 300,
						color:  'white'
					}}
				/>
				<Parallax image={parallaxBg} filter='dark'>
					<div className={classes.container}>
						<GridContainer justify='center'>
							<GridItem md={8} className={classes.textCenter}>
								<h1 className={classes.title}>Mencari Dokter Tidak Harus Sulit</h1>
								<h4 className={classes.subtitle}>
									Mengapa dan bagaimana kami menolong anda.
								</h4>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classes.main}>
					<div className={classes.container}>
						<AboutText />
					</div>
				</div>
				<DokYayFooter />
			</div>
		)
	}
}

export default withStyles(blogPostPageStyle)(AboutPage)