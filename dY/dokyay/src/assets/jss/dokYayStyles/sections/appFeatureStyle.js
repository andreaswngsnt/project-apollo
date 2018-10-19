import { mlAuto, mrAuto, description, title } from '../../material-kit-pro-react'

const appFeatureStyle = {
	mlAuto,
	mrAuto,
	title,
	description,
	features: {
		padding: '80px 0',
		'& $phoneContainer': {
			maxWidth: '260px',
			margin: '60px auto 0'
		}
	},
	phoneContainer: {
		'& img': {
			width: '100%'
		}
	},
	textCenter: {
		textAlign: 'center'
	}
}

export default appFeatureStyle