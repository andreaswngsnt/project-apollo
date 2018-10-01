import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Notifications from '@material-ui/icons/Notifications'
import Place from '@material-ui/icons/Place'
import Star from '@material-ui/icons/Star'
import Today from '@material-ui/icons/Today'

import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import InfoArea from '../components/InfoArea/InfoArea'

import featuresStyle from '../assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle'

import phoneGif from '../assets/img/features/phone.gif'

class AppFeature extends Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.features4}>
				<GridContainer>
					<GridItem xs={12} sm={8} md={8} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}>
						<h2 className={classes.title}>Aplikasi dokYAY!</h2>
						<h5 className={classes.description}>
							Kami membuat kesehatan tersedia di genggaman anda. Anda tidak perlu khawatir jatuh sakit saat berpergian ke kota lain.
						</h5>
					</GridItem>
				</GridContainer>
				<GridContainer>
					<GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
						<InfoArea
							icon={Place}
							title="Cari Dokter Terdekat"
							description="Hindari macet yang melelahkan! Atau anda bepergian? Cari dokter yang terdekat dari lokasi anda. Semua dokter yang ada di dokYAY sudah kami verifikasi."
							iconColor="info"
						/>
						<InfoArea
							icon={Star}
							title="Baca Ulasan Dokter"
							description="Lihat profil dan ulasan dokter untuk menentukan dokter yang terbaik untuk anda. Semua ulasan dibuat oleh pasien yang terverifikasi."
							iconColor="primary"
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={12} lg={4}>
						<div className={classes.phoneContainer}>
							<img src={phoneGif} alt="Phone GIF" />
						</div>
					</GridItem>
					<GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
						<InfoArea
							icon={Today}
							title="Booking Doktermu"
							description="Anda tidak perlu menunggu berjam-jam untuk menemui dokter. Hindari antrian panjang dengan sistem booking kami."
							iconColor="danger"
						/>
						<InfoArea
							icon={Notifications}
							title="Pengingat Pertemuan"
							description="Anda tidak akan lupa akan pertemuan dokter karena kami akan mengingatkan anda akan pertemuan anda yang akan datang."
							iconColor="success"
						/>
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(featuresStyle)(AppFeature)