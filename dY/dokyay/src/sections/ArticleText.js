import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

import regularTextStyle from '../assets/jss/dokYayStyles/sections/regularTextStyle'

import img1 from '../assets/img/blogs/img1.jpg'

function ArticleText({ ...props }) {
	const { classes } = props

	return (
		<div className={classes.section}>
			<GridContainer justify='center'>
				<GridItem xs={12} sm={8} md={8}>
					<h3 className={classes.title}>
						The Castle Looks Different at Night...
					</h3>
					<p>
						This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more. We are here to make life better.
					</p>
					<p>
						And now I look and look around and there’s so many Kanyes I've been trying to figure out the bed design for the master bedroom at our Hidden Hills compound... and thank you for turning my personal jean jacket into a couture piece.
					</p>
					<p>
						<img src={img1} alt="..." className={`${classes.imgRaised} ${classes.imgRounded} ${classes.imgFluid}`} />
					</p>
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default withStyles(regularTextStyle)(ArticleText)