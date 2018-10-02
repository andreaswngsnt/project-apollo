import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Header from '../components/Header/Header'
import HeaderLinks from '../components/Header/HeaderLinks'
import Button from '../components/CustomButtons/Button'
import Footer from '../components/Footer/Footer'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Parallax from '../components/Parallax/Parallax'

import landingPageStyle from '../assets/jss/material-kit-pro-react/views/landingPageStyle'

import AppFeature from '../sections/AppFeature'
import TopBlogs from '../sections/TopBlogs'
import SubscribeNewsletter from '../sections/SubscribeNewsletter'

import parallaxBg from '../assets/img/bg/bg1.jpg'

class HomePage extends Component {
	render() {
		const { classes, ...rest } = this.props
		return (
			<div>
				<Header
					color="transparent"
					links={<HeaderLinks dropdownHoverColor="dark" />}
					fixed
					changeColorOnScroll={{
						height: 300,
						color: "white"
					}}
					{...rest}
				/>
				<Parallax image={parallaxBg} filter="dark">
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={6} md={6}>
								<h1 className={classes.title}>Temukan Dokter Terbaik Tanpa Antri</h1>
								<h4>
									Lihat ulasan dokter dan booking dimanapun & kapanpun.
								</h4>
								<br />
								<Button
									color="danger"
									size="lg"
									href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
									target="_blank"
								>
									<i className="fas fa-play" />Watch video
								</Button>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<AppFeature />
						<GridContainer>
							<GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
								<Button round color="primary">
									Download Aplikasi
								</Button>
							</GridItem>
						</GridContainer>
						<TopBlogs />
						<GridContainer>
							<GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
								<Button round color="primary">
									Baca Artikel Lainnya
								</Button>
							</GridItem>
						</GridContainer>
						<SubscribeNewsletter />
					</div>
				</div>
				<Footer
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<Link to="#" className={classes.block}>
											Tentang Kami
										</Link>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<Link to="#" className={classes.block}>
											Blog
										</Link>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<Link to="#" className={classes.block}>
											Admin
										</Link>
									</ListItem>
								</List>
							</div>
							<div className={classes.right}>
								&copy; {new Date().getFullYear()}, PT dokYAY.
							</div>
						</div>
					}
				/>
			</div>
		)
	}
}

export default withStyles(landingPageStyle)(HomePage)