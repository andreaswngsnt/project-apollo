import React, { Component } from 'react'

import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

import GridContainer from '../components/Grid/GridContainer'
import GridItem from '../components/Grid/GridItem'

import sectionTextStyle from '../assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle'

function PromoText({ ...props }) {
	const { classes } = props
	const imgClasses = classNames(
		classes.imgRaised,
		classes.imgRounded,
		classes.imgFluid
	)
	return (
		<div className={classes.section}>
			<GridContainer justify="center">
				<GridItem xs={12} sm={8} md={8}>
					<h3 className={classes.title}>Bagaimana Kami Membuat Praktikmu Lebih Baik</h3>
					<p>
						Kami membuat praktikmu menjadi lebih baik dengan menyediakan fitur premium yang memudahkan pasien untuk menemui anda, yaitu booking online. Dengan fitur ini, pasien menjadi lebih setia kepada anda. Kami juga menarik pasien yang tepat bagi anda dengan menunjukkan informasi praktik dan spesialisasi anda.
					</p>
					<p>
						Kami juga memaksimalkan jumlah pasien yang anda terima dengan menunjukkan waktu tersedia anda dalam sistem booking kami. Anda akan tersedia pada saat pasien membutuhkan perawatan anda. Kuatkan reputasi anda dengan sistem ulasan kami. Kami memastikan bahwa semua ulasan benar-benar dari pasien yang mengunjungi anda.
					</p>
				</GridItem>
			</GridContainer>
		</div>
	)
}

export default withStyles(sectionTextStyle)(PromoText)