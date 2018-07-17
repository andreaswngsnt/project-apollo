import React from "react";
import { Image } from "react-native";
import { Footer, Text, FooterTab, Button, Icon } from "native-base";
import { TabNavigator } from "react-navigation";
import Home from "../Home/";
import Cart from "../Cart/";
import Order from "../Order/";
import Account from "../Account/";
import styles from "./styles";

const restaurant = require("../../../assets/footer-menu/restaurant-inactive.png");
const cart = require("../../../assets/footer-menu/cart-inactive.png");
const order = require("../../../assets/footer-menu/order-inactive.png");
const account = require("../../../assets/footer-menu/account-inactive.png");
const activeRestaurant = require("../../../assets/footer-menu/restaurant.png");
const activeCart = require("../../../assets/footer-menu/cart.png");
const activeOrder = require("../../../assets/footer-menu/order.png");
const activeAccount = require("../../../assets/footer-menu/account.png");

const TabNavigation = TabNavigator(
  {
    Home: { screen: Home },
    Cart: { screen: Cart },
    Order: { screen: Order },
    Account: { screen: Account }
  },
  {
    tabBarPosition: "bottom",
    lazy: true,
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              style={{ paddingLeft: 0, paddingRight: 0 }}
              onPress={() => props.navigation.navigate("Home")}
            >
              {/*<Image
                source={
                  props.navigation.state.index === 0
                    ? activeRestaurant
                    : restaurant
                }
                style={styles.footerImg}
              />*/}
              {<Icon
                style={[styles.footerImg, 
                  { 
                    color: props.navigation.state.index === 0
                    ? '#4FC3F7'
                    : '#ffffff'
                  }]}
                name='compass'
                type='FontAwesome'
              />}
              {/*<Text
                style={
                  props.navigation.state.index === 0
                    ? styles.footerItemActive
                    : styles.footerItemInactive
                }
              >
                Restaurant
              </Text>*/}
            </Button>
            <Button
              style={{ paddingLeft: 0, paddingRight: 0 }}
              onPress={() => props.navigation.navigate("Cart")}
            >
              <Icon
                style={[styles.footerImg, 
                  { 
                    color: props.navigation.state.index === 1
                    ? '#4FC3F7'
                    : '#ffffff'
                  }]}
                name='th-list'
                type='FontAwesome'
              />
            </Button>
            <Button
              style={{ paddingLeft: 0, paddingRight: 0 }}
              onPress={() => props.navigation.navigate("Order")}
            >
              <Image
                source={
                  props.navigation.state.index === 2 ? activeOrder : order
                }
                style={styles.footerImg}
              />
              <Text
                style={
                  props.navigation.state.index === 2
                    ? styles.footerItemActive
                    : styles.footerItemInactive
                }
              >
                Order
              </Text>
            </Button>
            <Button
              style={{ paddingLeft: 0, paddingRight: 0 }}
              onPress={() => props.navigation.navigate("Account")}
            >
              <Image
                source={
                  props.navigation.state.index === 3 ? activeAccount : account
                }
                style={styles.footerImg}
              />
              <Text
                style={
                  props.navigation.state.index === 3
                    ? styles.footerItemActive
                    : styles.footerItemInactive
                }
              >
                Account
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default TabNavigation;
