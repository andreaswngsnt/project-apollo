import React, { Component } from 'react'

import Header from '../Header/Header'
import HeaderLinks from '../Header/HeaderLinks'

class DokYayHeader extends Component {
	render() {
		return (
			<Header
				color='transparent'
				links={<HeaderLinks dropdownHoverColor='primary' />}
				fixed
				changeColorOnScroll={{
					height: 300,
					color: 'white'
				}} />
		)
	}
}

export default DokYayHeader