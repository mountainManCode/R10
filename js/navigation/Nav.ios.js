import React, { Component } from "react";

import { Text, Dimensions } from "react-native";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import Router from "./routes";

import { colors, typography } from "../config/styles";
const { black, mediumGrey, white, red, purple } = colors;
const { windowWidth } = Dimensions.get("window"); // https://facebook.github.io/react-native/docs/dimensions.html
const defaultRouteConfig = {
  //https://github.com/expo/ex-navigation
  navigationBar: {
    tintColor: white, // colour of scene title and hamburger menu
    titleStyle: { fontFamily: typography.fontRegular },
    renderBackground: () => renderHeaderBackground()
  }
};

const renderHeaderBackground = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 1]}
      colors={[red, purple]}
      width={windowWidth}
      height={65}
    />
  );
};

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
        initialTab="schedule"
        tabBarColor={black}
        navigatorUID="main"
      >
        <TabItem
          id="schedule"
          renderTitle={this.renderTitle}
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-calendar")}
          title="Schedule"
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
            defaultRouteConfig={defaultRouteConfig}
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
            defaultRouteConfig={defaultRouteConfig}
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
            defaultRouteConfig={defaultRouteConfig}
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
