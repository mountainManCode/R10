import React, { Component } from "react";

import { Text, Image } from "react-native";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import Icon from "react-native-vector-icons/Ionicons";
// const myIcon = (<Icon name="ios-calendar" size={30} color="#900" /> <Icon name="ios-heart" size={30} color="#900" />);

import Router from "./routes";

import { colors, typography } from "../config/styles";
const { black, mediumGrey, red, purple, white, offWhite } = colors;

class NavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  // selectedStyle={styles.navBar}

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor={black}
      >
        <TabItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-calendar")}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>

        <TabItem
          id="faves"
          title="Faves"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-heart")}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-information-circle")}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
          />
        </TabItem>
      </TabNavigation>
    );
  }

  renderIcon(isSelected, iconName) {
    return (
      // The Icon with apporprate props
      <Icon name={iconName} size={25} color={isSelected ? white : mediumGrey} />
    );
  }

  renderTitle(isSelected, title) {
    return (
      <Text
        style={{
          fontFamily: typography.fontMain,
          fontSize: 10,
          color: isSelected ? white : mediumGrey
        }}
      >
        {title}
      </Text>
    );
  }
}

export default NavigationLayout;
// actions - 3
// Error
//data
// losading
