//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { EventList } from "../../components/EventList";

import { styles } from "./styles";

// create a component
const Faves = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <EventList data={data} />
    </View>
  );
};

export default Faves;
