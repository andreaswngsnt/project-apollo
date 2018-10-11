import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import Star		from '@material-ui/icons/Star'
import Today from '@material-ui/icons/Today'
import Place from '@material-ui/icons/Place'

import GridContainer from '../components/Grid/GridContainer'
import GridItem						from '../components/Grid/GridItem'
import InfoArea						from '../components/InfoArea/InfoArea'
import Quote									from '../components/Typography/Quote'

import sectionTextStyle from '../assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle'

function PromoText({ ...props }) {
	const { classes } = props

	return (
		<div className={classes.section}>
			<GridContainer justify='center'>
				<GridItem xs={12} sm={8} md={8}>
					<h3 className={classes.title}>Kesulitan Dalam Menemui Dokter</h3>
					<Quote
						textClassName={classes.quoteText}
						text='"Bayangkan anda tiba-tiba sakit. Dan anda tidak tahu mesti kemana untuk mencari pengobatan. Anda harus mencari tahu informasi tentang dokter yang bagus melalui orang yang anda kenal, dan anda hanya tahu informasi yang terbatas. Dokter yang terkenal pun sangatlah ramai. Anda harus menunggu berhari-hari untuk mendapat perawatan, atau berjam-jam apabila anda beruntung."'
						author='- Masa lalu'
					/>
					<h3 className={classes.title}>Pengobatan itu Seharusnya Mudah</h3>
					<p>
						Zaman sudah berubah. Anda tidak perlu mengalami kesulitan masa lalu dalam mencari dokter dengan bantuan kami. Kami membuat informasi tentang praktik dokter terdekat tersedia dalam genggaman anda. Setelah anda menemukan dan mempelajari dokter yang anda inginkan, anda dapat melihat kapan dokternya tersedia dan pakai fitur booking online kami.
					</p>
					<GridContainer className={classes.textCenter}>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								vertical
								icon={Place}
								title='Cari Dokter Terdekat'
								description='Hindari macet yang melelahkan! Atau anda bepergian? Cari dokter yang terdekat dari lokasi anda. Semua dokter yang ada di dokYAY sudah kami verifikasi.'
								iconColor='info'
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								vertical
								icon={Star}
								title='Baca Ulasan Dokter'
								description='Lihat profil dan ulasan dokter untuk menentukan dokter yang terbaik untuk anda. Semua ulasan dibuat oleh pasien yang terverifikasi.'
								iconColor='primary'
							/>
						</GridItem>
						<GridItem xs={12} sm={4} md={4}>
							<InfoArea
								vertical
								icon={Today}
								title='Booking Doktermu'
								description='Anda tidak perlu menunggu berjam-jam untuk menemui dokter. Hindari antrian panjang dengan sistem booking kami.'
								iconColor='warning'
							/>
						</GridItem>
					</GridContainer>
					<h3 className={classes.title}>Inovasi Masa Depan</h3>
					<p>
						Aplikasi ini bukan akhir dari proyek kami untuk memudahkan anda lebih sehat. Proyek kami belum sempurna dan kami akan terus menciptakan inovasi kesehatan untuk anda.
					</p>
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default withStyles(sectionTextStyle)(PromoText)