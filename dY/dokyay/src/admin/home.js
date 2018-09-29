import React, { Component } from 'react'

import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Favorite from '@material-ui/icons/Favorite'

import Header from '../components/Header/Header'
import Button from '../components/CustomButtons/Button'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Parallax from '../components/Parallax/Parallax'

import landingPageStyle from '../assets/jss/material-kit-pro-react/views/landingPageStyle'

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
								<h1 className={classes.title}>HELLO WORLD</h1>
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
			</div>
		)
	}
}

export default withStyles(landingPageStyle)(HomePage)