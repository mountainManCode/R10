/**
 * R10 React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Text, View, AppRegistry } from "react-native";

import { NavigationProvider, StackNavigation } from "@expo/ex-navigation";

import Router from "./navigation/routes";
import About from "./scenes/About/";

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute("about")} />
      </NavigationProvider>
    );
    // return <About />;
  }
}
