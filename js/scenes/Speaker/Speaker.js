//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { styles } from "./styles";

// create a component
const Speaker = ({ speaker }) => (
  <View style={styles.container}>
    <Text>Heelllllooooo</Text>
    <Text>{speaker.name}</Text>
  </View>
);

export default Speaker;
