import React, { Component } from "react";

import { Text, Image } from "react-native";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import Router from "./routes";

import { colors } from "../config/styles";
const { black, mediumGrey, red, purple, white, offWhite } = colors;

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  // renderIcon={isSelected => (
  //   <Image source={require("../assets/images/map_pin.png")} />
  // )}
  // selectedStyle={styles.navBar}

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor={black}
      >
        <TabItem id="schedule" title="Schedule" renderTitle={this.renderTitle}>
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
        <TabItem id="faves" title="Faves" renderTitle={this.renderTitle}>
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </TabItem>
        <TabItem id="about" title="About" renderTitle={this.renderTitle}>
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
  renderTitle(isSelected, title) {
    return (
      <Text style={{ color: isSelected ? white : mediumGrey }}>{title}</Text>
    );
  }
}

export default NavigationLayout;
