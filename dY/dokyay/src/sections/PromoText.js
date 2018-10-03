import React, { Component } from 'react'

import withStyles from '@material-ui/core/styles/withStyles'

import AccessTime from '@material-ui/icons/AccessTime'
import Search from '@material-ui/icons/Search'
import Star from '@material-ui/icons/Star'
import Person from '@material-ui/icons/Person'

import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'
import InfoArea from '../components/InfoArea/InfoArea'

import sectionTextStyle from '../assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle'

function PromoText({ ...props }) {
	const { classes } = props
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem xs={12} sm={8} md={8}>
					<h3 className={classes.title}>Bagaimana Kami Membuat Praktikmu Lebih Baik</h3>
					<p>
						Kami membuat praktikmu menjadi lebih baik dengan menyediakan fitur premium yang memudahkan pasien untuk menemui anda, yaitu booking online. Dengan fitur ini, pasien menjadi lebih setia kepada anda. Kami juga menarik pasien yang tepat bagi anda dengan menunjukkan informasi praktik dan spesialisasi anda.
					</p>
					<GridContainer className={classes.textCenter}>
						<GridItem xs={12} sm={6} md={6}>
							<InfoArea
								vertical
								icon={Search}
								title="Buat Praktikmu Terlihat"
								description="Beri tahu kepada pasien tentang informasi praktik anda. Pasien lama dan baru akan menemukan praktikmu online dan menemui anda."
								iconColor="info"
							/>
						</GridItem>
						<GridItem xs={12} sm={6} md={6}>
							<InfoArea
								vertical
								icon={Person}
								title="Tunjukkan Keahlianmu"
								description="Tunjukkan spesialisasi anda. Beri daftar perawatan yang anda lakukan. Banyak pasien yang kesulitan mencari dokter yang tepat."
								iconColor="success"
							/>
						</GridItem>
					</GridContainer>
					<p>
						Kami juga memaksimalkan jumlah pasien yang anda terima dengan menunjukkan waktu tersedia anda dalam sistem booking kami. Anda akan tersedia pada saat pasien membutuhkan perawatan anda. Kuatkan reputasi anda dengan sistem ulasan kami. Kami memastikan bahwa semua ulasan benar-benar dari pasien yang mengunjungi anda.
					</p>
					<GridContainer className={classes.textCenter}>
						<GridItem xs={12} sm={6} md={6}>
							<InfoArea
								vertical
								icon={AccessTime}
								title="Isi Semua Waktu Tersedia Anda"
								description="Kami akan membuat pasien yang membutuhkan perawatan bertemu anda di saat anda memiliki waktu yang tersedia. Pasien bisa melihat waktu tersediamu online."
								iconColor="primary"
							/>
						</GridItem>
						<GridItem xs={12} sm={6} md={6}>
							<InfoArea
								vertical
								icon={Star}
								title="Perkuat Reputasi Anda"
								description="Kami percaya bahwa dokter yang baik seharusnya juga memiliki reputasi yang baik. Reputasi onlinemu akan dijaga dengan sistem ulasan yang terverifikasi."
								iconColor="warning"
							/>
						</GridItem>
					</GridContainer>
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default withStyles(sectionTextStyle)(PromoText)