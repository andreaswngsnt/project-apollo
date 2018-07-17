import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

const StatusBarCustom = ({backgroundColor, style, ...props}) => (
  <View style={[styles.statusBar, style, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const styles = {
	statusBar: {
		height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight
	}
};
export { StatusBarCustom };