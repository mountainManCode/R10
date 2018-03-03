//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";

// create a component
const Speaker = ({ speaker }) => (
  <View style={styles.container}>
    <Image
      style={{ height: 200, width: 200 }}
      source={{ uri: `${speaker.image}` }}
    />
    <Text>{speaker.name}</Text>
    <Text>{speaker.bio}</Text>
  </View>
);

export default Speaker;
