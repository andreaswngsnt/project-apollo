import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Button from '../components/CustomButtons/Button'
import Card from '../components/Card/Card'
import CardBody from '../components/Card/CardBody'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

import projectsStyle from '../assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle'

import blogImg1 from '../assets/img/blogs/img1.jpg'
import blogImg2 from '../assets/img/blogs/img2.jpg'
import blogImg3 from '../assets/img/blogs/img3.jpg'

class TopBlogs extends Component {
	render() {
		const { classes, ...rest } = this.props
		return (
			<div className="cd-section" {...rest}>
				<div className={classes.projects}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={8} md={8} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
								<h2 className={classes.title}>
									Artikel Kesehatan Terkenal
								</h2>
							</GridItem>
						</GridContainer>
						<GridContainer>
							<GridItem xs={12} sm={12} md={12}>
								<Card raised background style={{ backgroundImage: `url(${blogImg1})` }}>
									<CardBody background>
										<h6 className={classes.cardCategory}>
											Movies
										</h6>
										<h3 className={classes.cardTitleWhite}>
											The Predator almost had the perfect twist ending, and it's been in plain sight for nearly 30 years
										</h3>
										<p className={classes.cardDescription}>
											Take a trip back to the '90s
										</p>
										<Button round color="primary">
											Baca Artikel
										</Button>
									</CardBody>
								</Card>
							</GridItem>
							<GridItem xs={12} sm={6} md={6}>
								<Card raised background style={{ backgroundImage: `url(${blogImg2})` }}>
									<CardBody background>
										<h6 className={classes.cardCategory}>
											Hardware
										</h6>
										<h3 className={classes.cardTitleWhite}>
											Hands on: Nvidia GeForce RTX 2080 Ti review
										</h3>
										<p className={classes.cardDescription}>
											The king of graphics cards has a new heir
										</p>
										<Button round color="primary">
											Baca Artikel
										</Button>
									</CardBody>
								</Card>
							</GridItem>
							<GridItem xs={12} sm={6} md={6}>
								<Card raised background style={{ backgroundImage: `url(${blogImg3})` }}>
									<CardBody background>
										<h6 className={classes.cardCategory}>
											Psychology
										</h6>
										<h3 className={classes.cardTitleWhite}>
											Why Visiting a Hair Salon Is Tough for People With Trich
										</h3>
										<p className={classes.cardDescription}>
											How I learned to manage my bi-racial hair despite my hair pulling disorder.
										</p>
										<Button round color="primary">
											Baca Artikel
										</Button>
									</CardBody>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(projectsStyle)(TopBlogs)