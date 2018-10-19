import { container, main, mainRaised, title } from '../../material-kit-pro-react'

const articlePagesStyle = {
	main,
	mainRaised,
	container: {
		...container,
		zIndex: "2",
		position: "relative"
	},
	textCenter: {
		textAlign: "center"
	},
	title: {
		...title,
		color: "#FFFFFF"
	}
}

export default articlePagesStyle