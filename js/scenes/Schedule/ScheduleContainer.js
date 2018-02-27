//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, AppRegistry, StyleSheet } from "react-native";

import Schedule from "./Schedule";

// create a component
class ScheduleContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  render() {
    return <Schedule />;
  }
}

AppRegistry.registerComponent("schedule", () => App);
export default ScheduleContainer;
