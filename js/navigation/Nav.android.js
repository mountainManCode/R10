import React, { Component } from "react";

import { Text, View, StyleSheet } from "react-native";

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";

import Icon from "react-native-vector-icons/Ionicons";

import Router from "./routes";

import { colors, typography } from "../config/styles";
const { black, mediumGrey, white } = colors;

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
        renderHeader={this._renderHeader}
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

  _renderHeader = () => {
    return <View style={styles.header} />;
  };

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
