import React, { Component } from "react";

import { Image } from "react-native";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import Router from "./routes";

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      // <StackNavigation>
      <TabNavigation id="main" navigatorUID="main" initialTab="about">
        <TabItem
          id="about"
          title="About"
          renderIcon={isSelected => (
            <Image source={require("../assets/images/map_pin.png")} />
          )}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
      </TabNavigation>
      // </StackNavigation>
      // Put Your Tab Bar / Tab Items / Stack Navs here
    );
  }
}

export default NavigationLayout;
