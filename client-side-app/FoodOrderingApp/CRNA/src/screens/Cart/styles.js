const React = require("react-native");
const { Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const commonColor = require("../../theme/variables/commonColor");

export default {
  searchCard: {
    backgroundColor: 'white', 
    height: 50,
    borderRadius: 50, 
    paddingHorizontal: 10, 
    flexDirection: 'row',
  }
};
