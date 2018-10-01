import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Button from '../components/CustomButtons/Button'
import Card from '../components/Card/Card'
import CardBody from '../components/Card/CardHeader'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

import projectsStyle from '../assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle'

import blogImg1 from '../assets/img/blogs/img1.jpg'

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
											PRODUCTIVITY
									</h6>
										<h3 className={classes.cardTitleWhite}>
											The Best Productivity Apps on Market
									</h3>
										<p className={classes.cardDescription}>
											Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
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