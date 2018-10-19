import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Button        from '../components/CustomButtons/Button'
import DokYayFooter		from '../components/DokYay/DokYayFooter'
import DokYayHeader		from '../components/DokYay/DokYayHeader'
import GridContainer from '../components/Grid/GridContainer'
import GridItem      from '../components/Grid/GridItem'
import Parallax      from '../components/Parallax/Parallax'

import homePagesStyle from '../assets/jss/dokYayStyles/pages/homePagesStyle'

import PromoText from '../sections/PromoText'

import parallaxBg from '../assets/img/bg/bg1.jpg'

class PromoPage extends Component {
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
							<GridItem md={8} className={classes.textCenter}>
								<h1 className={classes.title}>Jadilah Dokter Terbaik</h1>
								<h4 className={classes.subtitle}>
									Daftarlah dengan kami untuk memaksimalkan praktik anda.
								</h4>
								<br />
								<Button
									color='primary'
									href='#paket'
									round>
									Lihat Paket
								</Button>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={`${classes.main} ${classes.mainRaised}`}>
					<div className={classes.container}>
						<PromoText />
					</div>
				</div>
				<DokYayFooter />
			</div>
		)
	}
}

export default withStyles(homePagesStyle)(PromoPage)