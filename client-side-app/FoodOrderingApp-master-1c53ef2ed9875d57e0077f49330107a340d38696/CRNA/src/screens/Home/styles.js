const React = require("react-native");
const { Dimensions, Platform } = React;

const commonColor = require("../../theme/variables/commonColor");

export default {
	map: {
		position: "absolute",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0
	},
	footerImg: {
		height: 30,
		width: 30,
		resizeMode: "contain",
		alignSelf: "center",
		textAlign: 'center',
		fontSize: 30		
	},
	footerItemActive: {
		color: "#FFF",
		fontWeight: "700"
	},
	footerItemInactive: {
		color: "rgba(176,219,253,0.5)"
	},
	searchCard: {
		backgroundColor: 'white', 
		height: 50,
		borderRadius: 50, 
		paddingHorizontal: 10, 
		flexDirection: 'row',
	}
};