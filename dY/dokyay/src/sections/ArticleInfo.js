import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Badge from '../components/Badge/Badge'
import Button from '../components/CustomButtons/Button'
import Card from '../components/Card/Card'
import CardAvatar from '../components/Card/CardAvatar'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

import articleInfoStyle from '../assets/jss/dokYayStyles/sections/articleInfoStyle'

import img1 from '../assets/img/portraits/img1.jpg'

function ArticleInfo({ ...props }) {
	const { classes } = props
	return (
		<div className={classes.section}>
			<GridContainer justify='center'>
				<GridItem xs={12} sm={10} md={8}>
					<GridContainer>
						<GridItem xs={12} sm={6} md={6}>
							<div className={classes.blogTags}>
								Tags:
								<Badge color='primary'>Haram</Badge>
								<Badge color='primary'>Shariah</Badge>
								<Badge color='primary'>Azab</Badge>
							</div>
						</GridItem>
						<GridItem xs={12} sm={6} md={6}>
							<Button color='google' round className={classes.buttons}><i className='fab fa-google' />232</Button>
							<Button color='twitter' round className={classes.buttons}><i className='fab fa-twitter' />910</Button>
							<Button color='facebook' round className={classes.buttons}><i className='fab fa-facebook' />872</Button>
						</GridItem>
					</GridContainer>
					<hr />
					<Card plain profile className={classes.card}>
						<GridContainer>
							<GridItem xs={12} sm={2} md={2}>
								<CardAvatar plain profile>
									<img src={img1} alt='...' />
								</CardAvatar>
							</GridItem>
							<GridItem xs={12} sm={10} md={10}>
								<h4 className={classes.cardTitle}>
									Alec Thompson
								</h4>
								<p className={classes.description}>
									I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound...I like good music from Youtube.
								</p>
							</GridItem>
						</GridContainer>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default withStyles(articleInfoStyle)(ArticleInfo)