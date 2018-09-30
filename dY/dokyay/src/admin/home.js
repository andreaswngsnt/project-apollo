import React, { Component } from 'react'

import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Header from '../components/Header/Header'
import Button from '../components/CustomButtons/Button'
import Footer from '../components/Footer/Footer'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Parallax from '../components/Parallax/Parallax'

import landingPageStyle from '../assets/jss/material-kit-pro-react/views/landingPageStyle'

import AppFeature from '../sections/AppFeature'

class HomePage extends Component {
	render() {
		const { classes, ...rest } = this.props
		return (
			<div>
				<Header
					color="transparent"
					brand="DokYAY"
					fixed
					changeColorOnScroll={{
						height: 300,
						color: "info"
					}}
					{...rest}
				/>
				<Parallax image={require("../assets/img/bg8.jpg")} filter="dark">
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={6} md={6}>
								<h1 className={classes.title}>Hello World</h1>
								<h4>
									Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression.
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
					</div>
				</div>
				<Footer
					content={
						<div>
							<div className={classes.left}>
								<List className={classes.list}>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/" className={classes.block}>
											Creative Tim
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/" className={classes.block}>
											About Us
										</a>
									</ListItem>
									<ListItem className={classes.inlineBlock}>
										<a href="https://www.creative-tim.com/" className={classes.block}>
											Blog
										</a>
									</ListItem>
								</List>
							</div>
							<div className={classes.right}>
								&copy; {new Date().getFullYear()} , made by <a href="https://www.creative-tim.com">Creative Tim</a> for a better web.
							</div>
						</div>
					}
				/>
			</div>
		)
	}
}

export default withStyles(landingPageStyle)(HomePage)