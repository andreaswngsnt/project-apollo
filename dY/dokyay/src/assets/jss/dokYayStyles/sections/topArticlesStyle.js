import { cardTitle, container, mlAuto, mrAuto, title } from '../../material-kit-pro-react'

const topArticlesStyle = {
	container,
	mlAuto,
	mrAuto,
	title,
	cardCategory: {
		color: 'rgba(255, 255, 255, 0.7) !important',
		marginTop: '10px'
	},
	cardDescription: {
		color: 'rgba(255, 255, 255, 0.7) !important'
	},
	cardTitleWhite: {
		...cardTitle,
		color: '#FFFFFF !important',
		marginTop: '10px !important'
	},
	textCenter: {
		textAlign: 'center'
	}
}

export default topArticlesStyle