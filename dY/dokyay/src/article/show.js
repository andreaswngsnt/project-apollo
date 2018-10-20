import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import DokYayFooter from '../components/DokYay/DokYayFooter'
import DokYayHeader from '../components/DokYay/DokYayHeader'
import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import Parallax from '../components/Parallax/Parallax'

import articlesPagesStyle from '../assets/jss/dokYayStyles/pages/articlesPagesStyle'

import ArticleText from '../sections/ArticleText'

import parallaxBg from '../assets/img/bg/bg1.jpg'

class ArticleShowPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
	}

	render() {
		const { classes } = this.props

		return (
			<div>
				<DokYayHeader />
				<Parallax image={parallaxBg} filter='dark'>
					<div className={classes.container}>
						<GridContainer justify='center'>
							<GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
								<h1 className={classes.title}>
									Article Show Page!
								</h1>
								<h4 className={classes.subtitle}>
									The last 48 hours of my life were total madness. This is what I did.
								</h4>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={`${classes.main} ${classes.mainRaised}`}>
					<div className={classes.container}>
						<ArticleText />
					</div>
				</div>
				<DokYayFooter />
			</div>
		)
	}
}

export default withStyles(articlesPagesStyle)(ArticleShowPage)