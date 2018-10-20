import { container, main, mainRaised, title } from '../../material-kit-pro-react'

const articlesPagesStyle = {
	main,
	mainRaised,
	container: {
		...container,
		zIndex: '2',
		position: 'relative'
	},
	textCenter: {
		textAlign: 'center'
	},
	title: {
		...title,
		color: '#FFFFFF'
	},
	subtitle: {
		color: '#FFFFFF'
	},
}

export default articlesPagesStyle