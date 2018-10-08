﻿import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'
import List       from '@material-ui/core/List'
import ListItem   from '@material-ui/core/ListItem'

import Button        from '../components/CustomButtons/Button'
import Footer        from '../components/Footer/Footer'
import GridContainer from '../components/Grid/GridContainer'
import GridItem      from '../components/Grid/GridItem'
import Header        from '../components/Header/Header'
import HeaderLinks   from '../components/Header/HeaderLinks'
import Parallax      from '../components/Parallax/Parallax'

import blogPostPageStyle from '../assets/jss/material-kit-pro-react/views/blogPostPageStyle'

import PromoText from '../sections/PromoText'

import parallaxBg from '../assets/img/bg/bg1.jpg'

class PromoPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<Header
<<<<<<< HEAD
					color="transparent"
					links={<HeaderLinks dropdownHoverColor="primary" />}
=======
					color='transparent'
					links={<HeaderLinks dropdownHoverColor='dark' />}
>>>>>>> bcf3009c711993806137011f21ada478cd904e87
					fixed
					changeColorOnScroll={{
						height: 300,
						color: 'white'
					}} />
				<Parallax image={parallaxBg} filter='dark'>
					<div className={classes.container}>
						<GridContainer justify='center'>
							<GridItem md={8} className={classes.textCenter}>
								<h1 className={classes.title}>Jadilah Dokter Terbaik</h1>
								<h4 className={classes.subtitle}>
									Daftarlah dengan kami untuk memaksimalkan praktik anda.
								</h4>
								<br />
								<Button
<<<<<<< HEAD
									color="primary"
									href="#paket"
									round
								>
=======
									color='primary'
									href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
									round>
>>>>>>> bcf3009c711993806137011f21ada478cd904e87
									Lihat Paket
								</Button>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classes.main}>
					<div className={classes.container}>
						<PromoText />
					</div>
				</div>
				<Footer
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
<<<<<<< HEAD
										<Link to="/tentang" className={classes.block}>
=======
										<Link to='#' className={classes.block}>
>>>>>>> bcf3009c711993806137011f21ada478cd904e87
											Tentang Kami
										</Link>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<Link to='#' className={classes.block}>
											Blog
										</Link>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<Link to='#' className={classes.block}>
											Admin
										</Link>
									</ListItem>
								</List>
							</div>
							<div className={classes.right}>
								&copy; {new Date().getFullYear()}, PT dokYAY.
							</div>
						</div>
					} />
			</div>
		)
	}
}

export default withStyles(blogPostPageStyle)(PromoPage)