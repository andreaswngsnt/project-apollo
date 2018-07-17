import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const ContainerCustom = ({ children, style}) => {
	return(
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{flex: 1 }}>
			<View style={[ {flex: 1}, style ]}>
				{children}
			</View>
		</TouchableWithoutFeedback>
	);
}

export { ContainerCustom };