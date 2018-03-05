import React, { Component } from "react";

import { Text, StyleSheet, Dimensions } from "react-native";

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";

import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

import Router from "./routes";

import { colors, typography } from "../config/styles";
const { mediumGrey, white, red, purple } = colors;
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
      <DrawerNavigation
        id="main"
        initialItem="schedule"
        drawerWidth={300}
        navigatorUID="main"
      >
        <DrawerNavigationItem
          id="schedule"
          renderTitle={isSelected => this._renderTitle("Schedule", isSelected)}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-calendar")}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="faves"
          renderTitle={isSelected => this._renderTitle("Faves", isSelected)}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-heart")}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute("faves")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="about"
          renderTitle={isSelected => this._renderTitle("About", isSelected)}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "md-information-circle")}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute("about")}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  renderIcon(isSelected, iconName) {
    return (
      // The Icon with apporprate props
      <Icon name={iconName} size={25} color={isSelected ? white : mediumGrey} />
    );
  }

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <Text
        style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}
      >
        {text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: "blue"
  },

  titleText: {
    fontWeight: "bold"
  },

  selectedTitleText: {
    color: "white"
  }
});

export default NavigationLayout;
