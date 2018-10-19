import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Button        from '../components/CustomButtons/Button'
import DokYayFooter		from '../components/DokYay/DokYayFooter'
import DokYayHeader		from '../components/DokYay/DokYayHeader'
import GridContainer from '../components/Grid/GridContainer'
import GridItem      from '../components/Grid/GridItem'
import Parallax      from '../components/Parallax/Parallax'

import homePagesStyle from '../assets/jss/dokYayStyles/pages/homePagesStyle'

import AppFeature          from '../sections/AppFeature'
import HeaderSearchDoctor  from '../sections/HeaderSearchDoctor'
import SubscribeNewsletter from '../sections/SubscribeNewsletter'
import TopArticles									from '../sections/TopArticles'

import parallaxBg from '../assets/img/bg/bg1.jpg'

class HomePage extends Component {
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
						<GridContainer>
							<GridItem xs={12} sm={6} md={6} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
								<h2 className={classes.title}>Temukan Dokter Terbaik Tanpa Antri</h2>
								<h4>
									Lihat ulasan dokter dan booking dimanapun & kapanpun.
								</h4>
							</GridItem>
							<GridItem>
								<HeaderSearchDoctor />
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={`${classes.main} ${classes.mainRaised}`}>
					<div className={classes.container}>
						<AppFeature />
						<GridContainer>
							<GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
								<Button round color='primary'>
									Download Aplikasi
								</Button>
							</GridItem>
						</GridContainer>
						<TopArticles />
						<GridContainer>
							<GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
								<Button round color='primary'>
									Baca Artikel Lainnya
								</Button>
							</GridItem>
						</GridContainer>
						<SubscribeNewsletter />
					</div>
				</div>
				<DokYayFooter/>
			</div>
		)
	}
}

export default withStyles(homePagesStyle)(HomePage)