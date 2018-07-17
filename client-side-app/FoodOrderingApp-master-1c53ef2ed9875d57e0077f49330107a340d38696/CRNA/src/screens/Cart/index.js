import React, { Component } from "react";
import { View, TextInput } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Title,
  Left,
  Right,
  Body,
  Thumbnail,
  Text,
  List,
  ListItem,
  Grid,
  Col,
  Form,
  Item,
  Label,
  Input,
  H3
} from "native-base";
import styles from "./styles";
import dataOne from "./dataOne.js";
import dataTwo from "./dataTwo.js";
import { StatusBarCustom, ContainerCustom } from '../../components';


const commonColor = require("../../theme/variables/commonColor");
const hotelImg = require("../../../assets/home-page/rajdhani.jpg");

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Type Address Here" };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <ContainerCustom style={{ flex: 1, paddingHorizontal: 20, }}>
        <View>
          <StatusBarCustom backgroundColor='#00000033' style={{ marginHorizontal: -20 }}/>
          <H3 style={{ marginBottom: 10, marginTop: 10 }}>Cari Dokter</H3>
          <View style={[styles.searchCard]}>
            <Input placeholder='Ketik Lokasi/Nama Dokter/Institusi'/>
            <Icon name='search' type='FontAwesome' style={{ alignSelf: 'center', fontSize: 20}}/>
          </View>
        </View>
        <View style={{ flex: 1 }}/>
      </ContainerCustom>
    );
  }
}

export default Cart;
