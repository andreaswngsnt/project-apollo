import React, { Component } from 'react';
import { View, SafeAreaView, StatusBar, Keyboard, TouchableWithoutFeedback} from 'react-native';
import  MapView from 'react-native-maps'; 
import { H2, Input, Icon, Button, Text } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import { StatusBarCustom } from '../../components';

class Home extends Component {
	state = {
		region: {
			latitude: 12.920614,
			longitude: 77.586234,
			latitudeDelta: 0.0722,
			longitudeDelta: 0.0421
		}
	}

	onRegionChange(region) {
		console.log('region change');
		this.setState({ region });
		if(this.maps) {
		  this.maps.animateToRegion(region, 50);
		}
	}

	onPressMap({ coordinate, position }) {
		console.log('pressed!');
		Keyboard.dismiss();
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<MapView
	              style={styles.map}
	              region={this.state.region}
	              onRegionChangeComplete={this.onRegionChange.bind(this)}
	              onPress={this.onPressMap.bind(this)}
	              ref={(ref) => this.maps = ref}
	            />
	            <StatusBarCustom backgroundColor='#00000033'/>
	            {<View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'space-between' }}>
	            	<View>
			            <H2>Peta Dokter</H2>
			            <View style={[styles.searchCard]}>
			            	<Input placeholder='Ketik Lokasi/Nama Dokter/Institusi'/>
			            	<Icon name='search' type='FontAwesome' style={{ alignSelf: 'center', fontSize: 20}}/>
			            </View>
		            </View>
		            <View style={{ marginBottom: 15, justifyContent: 'space-between', flexDirection: 'row' }}>
		            	<Button onPress={() => console.log('Cari!!')}>
		            		<Text>
		            			Cari di Sini
		            		</Text>
		            	</Button>
		            	<Button style={{ paddingLeft: 12, paddingRight: 13 }}>
		            		<MaterialIcons name='my-location' size={20} color='white'/>
		            	</Button>
		            </View>
	            </View>}
			</View>
		);
	}
}

export default Home;