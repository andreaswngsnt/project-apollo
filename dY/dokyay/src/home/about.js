import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import withStyles from '@material-ui/core/styles/withStyles'
import List							from '@material-ui/core/List'
import ListItem			from '@material-ui/core/ListItem'

import Header								from '../components/Header/Header'
import HeaderLinks			from '../components/Header/HeaderLinks'
import Footer								from '../components/Footer/Footer'
import GridContainer from '../components/Grid/GridContainer'
import GridItem						from '../components/Grid/GridItem'
import Parallax						from '../components/Parallax/Parallax'

import blogPostPageStyle from '../assets/jss/material-kit-pro-react/views/blogPostPageStyle'

import AboutText from '../sections/AboutText'

import parallaxBg from '../assets/img/bg/bg1.jpg'

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
						color: 'white'
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
				<Footer
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<Link to="/tentang" className={classes.block}>
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

export default withStyles(blogPostPageStyle)(AboutPage)