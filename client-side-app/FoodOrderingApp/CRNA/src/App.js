import React from "react";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";

import Login from "./screens/Login/";
import IndianFoodMenu from "./screens/IndianFoodMenu/";
import WesternFoodMenu from "./screens/WesternFoodMenu/";
import TabNavigation from "./screens/Home/tabNavigation";
import Location from "./screens/Location/";
import Favourites from "./screens/Favourites/";
import Filter from "./screens/Filter/";
import PhoneNumber from "./screens/PhoneNumber/";

const App = StackNavigator(
  {
    Login: { screen: Login },
    TabNavigation: { screen: TabNavigation },
    Location: { screen: Location },
    Filter: { screen: Filter },
    IndianFoodMenu: { screen: IndianFoodMenu },
    WesternFoodMenu: { screen: WesternFoodMenu },
    Favourites: { screen: Favourites },
    PhoneNumber: { screen: PhoneNumber }
  },
  {
    index: 0,
    initialRouteName: "TabNavigation",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <App />
  </Root>;
