//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { FavesEventList } from "../../components/FavesEventList";

import { styles } from "./styles";

// create a component
const Faves = ({ data }) => {
  return (
    <View style={styles.container}>
      <FavesEventList data={data} />
    </View>
  );
};

export default Faves;
