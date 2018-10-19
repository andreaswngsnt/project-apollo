import { container, main, mainRaised, mlAuto, mrAuto, title } from '../../material-kit-pro-react'

const homePagesStyle = {
	main,
	mainRaised,
	mlAuto,
	mrAuto,
	container: {
		color: "#FFFFFF",
		...container,
		zIndex: "2"
	},
	subtitle: {
		color: "#FFFFFF"
	},
	textCenter: {
		textAlign: 'center'
	},
	title: {
		...title,
		display: "inline-block",
		position: "relative",
		marginTop: "30px",
		minHeight: "32px",
		color: "#FFFFFF",
		textDecoration: "none"
	},
}

export default homePagesStyle