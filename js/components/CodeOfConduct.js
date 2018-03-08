//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Animated, Easing, LayoutAnimation } from "react-native";

import { styles } from "../scenes/About/styles";

const CodeOfConduct = ({ item, show }) => {
  LayoutAnimation.easeInEaseOut();
  return (
    show && (
      <Animated.Text style={styles.text}>{item.description}</Animated.Text>
    )
  );
};

// CodeOfConduct.propTypes = {
//   show: PropTypes.bool,
//   text: PropTypes.string
// };
export default CodeOfConduct;
