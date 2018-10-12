import React, { Component } from 'react'

import withStyles    from '@material-ui/core/styles/withStyles'
import FormControl   from '@material-ui/core/FormControl'
import Select		 from '@material-ui/core/Select'
import MenuItem		 from '@material-ui/core/MenuItem'

import Button		 from '../components/CustomButtons/Button'
import Card			 from '../components/Card/Card'
import CardBody		 from '../components/Card/CardBody'
import CustomInput	 from '../components/CustomInput/CustomInput'
import GridContainer from '../components/Grid/GridContainer'
import GridItem		 from '../components/Grid/GridItem'

import headersStyle from '../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle'

class HeaderSearchDoctor extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedSpecialization: '1'
		}
	}

	handleSpecialization = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<Card raised>
					<CardBody formHorizontal>
						<GridContainer>
							<GridItem xs={12} sm={3} md={3}>
								<FormControl fullWidth className={classes.selectFormControl}>
									<Select
										MenuProps={{
											className: classes.selectMenu
										}}
										classes={{
											select: classes.select
										}}
										value={this.state.selectedSpecialization}
										onChange={this.handleSpecialization}
										inputProps={{
											name: 'selectedSpecialization',
											id:   'specialization-select'
										}} >
										<MenuItem classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }} value='1' disabled>
											Spesialisasi Dokter
										</MenuItem>
										<MenuItem classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }} value='2'>
											Umum
										</MenuItem>
										<MenuItem classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }} value='3'>
											Anak
										</MenuItem>
										<MenuItem classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }} value='4'>
											Gigi
										</MenuItem>
										<MenuItem classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }} value='5'>
											Kandungan
										</MenuItem>
									</Select>
								</FormControl>
							</GridItem>
							<GridItem xs={12} sm={3} md={3}>
								<CustomInput
									id='location'
									inputProps={{
										placeholder: 'Lokasi'
									}}
									formControlProps={{
										fullWidth: true,
										className: classes.formControl
									}} />
							</GridItem>
							<GridItem xs={12} sm={3} md={3}>
								<CustomInput
									id='name'
									inputProps={{
										placeholder: 'Nama Dokter/Klinik'
									}}
									formControlProps={{
										fullWidth: true,
										className: classes.formControl
									}} />
							</GridItem>
							<GridItem xs={12} sm={3} md={3}>
								<Button block round color='primary' className={classes.button}>
									Cari
								</Button>
							</GridItem>
						</GridContainer>
					</CardBody>
				</Card>
			</div>
		)
	}
}

export default withStyles(headersStyle)(HeaderSearchDoctor)