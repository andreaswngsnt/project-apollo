import { cardTitle, coloredShadow, container, description, mlAuto, mrAuto, title } from '../../material-kit-pro-react'

const articleListStyle = {
	cardTitle,
	coloredShadow,
	container,
	description,
	mlAuto,
	mrAuto,
	title,
	author: {
		'& a': {
			color: '#3C4858',
			textDecoration: 'none'
		}
	},
	blog: {
		padding: '50px 0'
	},
	card: {
		marginBottom: '80px'
	},
	cardCategory: {
		marginBottom: '0',
		marginTop: '10px',
		'& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
			position: 'relative',
			top: '8px',
			lineHeight: '0'
		}
	},
	textCenter: {
		textAlign: 'center'
	}
}

export default articleListStyle