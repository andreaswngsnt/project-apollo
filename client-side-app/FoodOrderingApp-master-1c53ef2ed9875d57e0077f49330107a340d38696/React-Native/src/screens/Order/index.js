import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Title,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";

const emptyImg = require("../../../assets/indian-food/food-15.jpg");

class Order extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Order</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <View>
            <Image source={emptyImg} style={styles.img} />
            <Text style={styles.text}>Please login to view your orders</Text>
          </View>

          <View style={{ padding: 30 }}>
            <Button block onPress={() => navigation.navigate("PhoneNumber")}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Order;
