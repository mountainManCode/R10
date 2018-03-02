//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { styles } from "./styles";

// create a component
const Speaker = ({ dataSpeaker }) => (
  <View style={styles.container}>
    <Text>Heelllllooooo</Text>
  </View>
);
// {/* <Text>{dataSpeaker.speaker}</Text> */}

export default Speaker;
