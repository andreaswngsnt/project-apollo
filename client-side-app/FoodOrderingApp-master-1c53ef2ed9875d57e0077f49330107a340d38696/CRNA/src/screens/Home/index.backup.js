import React, { Component } from "react";
import { Image, View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Title,
  Text,
  Button,
  Icon,
  Item,
  Input,
  List,
  ListItem,
  Left,
  Right,
  H3,
  Grid,
  Row,
  Col,
  Thumbnail
} from "native-base";
import styles from "./styles";
import data from "./data.js";

const commonColor = require("../../theme/variables/commonColor");
const fullWidthImg = require("../../../assets/indian-food/food-1.jpg");
const indianFoodImg = require("../../../assets/home-page/indian-food.jpg");
const foodCarnivalImg = require("../../../assets/home-page/food-carnival.jpg");
const indianFoodLogo = require("../../../assets/home-page/namaste.jpg");
const foodCarnivalLogo = require("../../../assets/home-page/food-carnival-logo.png");
const address = "2nd Main Road, Stage 2, BTM Layout";
const search = "Search restaurant, dishes...";

class Home extends Component {
  
  render() {
    const navigation = this.props.navigation;
    return (
      <Container>
        <Header style={styles.head}>
          <Left>
            <Button transparent>
              <Icon name="ios-pin" />
            </Button>
          </Left>
          <Title style={styles.title}>
            {address}
          </Title>
          <Right>
            <Button
              transparent
              onPress={() => navigation.navigate("Favourites")}
              style={{ paddingLeft: 10 }}
            >
              <Icon name="ios-heart" />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <View style={styles.subHeaderContentView}>
            <View style={styles.subHeaderInnerContentView}>
              <Item borderType="regular" style={styles.restaurantSearchInput}>
                <Icon
                  active
                  name="search"
                  style={{ color: commonColor.brandPrimary, paddingLeft: 7 }}
                />
                <Input
                  style={{
                    color: commonColor.brandPrimary,
                    alignSelf: "center"
                  }}
                  placeholder={search}
                  placeholderTextColor={commonColor.lightTextColor}
                />
              </Item>
              <Button transparent onPress={() => navigation.navigate("Filter")}>
                <Text>Filter</Text>
              </Button>
            </View>
          </View>
          <View style={styles.fullWidthImgView}>
            <Image source={fullWidthImg} style={styles.fullWidthImg} />
            <View style={styles.referView}>
              <H3 style={styles.referOfferText}>Refer your Friends</H3>
              <Text style={styles.referOfferText}>Earn Rs 200 off</Text>
              <Text style={styles.referOfferText}>
                from selected restaurants
              </Text>
            </View>
          </View>
          <View>
            <Grid style={{ marginTop: 12, marginLeft: 7 }}>
              <Col>
                <Row>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("IndianFoodMenu")}
                  >
                    <Image source={indianFoodImg} style={styles.foodGridImg} />
                    <View style={styles.foodGridImgIconView}>
                      <Thumbnail small source={indianFoodLogo} />
                      <Text style={styles.foodGridText}>Indian Food</Text>
                    </View>
                  </TouchableOpacity>
                </Row>
              </Col>
              <Col>
                <Row>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("WesternFoodMenu")}
                  >
                    <Image
                      source={foodCarnivalImg}
                      style={styles.foodGridImg}
                    />
                    <View style={styles.foodGridImgIconView}>
                      <Thumbnail small source={foodCarnivalLogo} />
                      <Text style={styles.foodGridText}>Food Carnival</Text>
                    </View>
                  </TouchableOpacity>
                </Row>
              </Col>
            </Grid>
          </View>
          <List
            dataArray={data}
            renderRow={userDataRow =>
              <ListItem
                button
                noBorder
                style={{ marginLeft: 5, paddingBottom: 0 }}
              >
                <View style={styles.cardView}>
                  <View style={{ width: 80 }}>
                    <Image
                      source={userDataRow.thumbnail}
                      style={styles.restaurantFoodImg}
                    />
                    <View style={styles.ratingsView}>
                      <Icon active name="star" style={styles.ratingsIcon} />
                      <Icon active name="star" style={styles.ratingsIcon} />
                      <Icon active name="star" style={styles.ratingsIcon} />
                      <Icon active name="star" style={styles.ratingsIcon} />
                      <Icon name="star" style={styles.ratingsIcon} />
                    </View>
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    <View style={styles.rowView}>
                      <Text style={styles.hotelNameText}>
                        {userDataRow.name}
                      </Text>
                      <Text style={styles.timeText}>
                        {userDataRow.timing}
                      </Text>
                    </View>
                    <View style={styles.rowView}>
                      <View style={{ paddingTop: 5 }}>
                        <Text style={styles.offerText}>
                          {userDataRow.quisine}
                        </Text>
                      </View>
                      <View style={{ paddingTop: 5 }}>
                        <Text style={styles.offerText}>
                          {userDataRow.offer1}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.rowView}>
                      <View>
                        <Text style={styles.offerText}>
                          {userDataRow.price}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.offerText}>
                          {userDataRow.offer2}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default Home;
