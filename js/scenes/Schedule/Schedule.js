//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator } from "react-native";

import EventList from "../../components/EventList";

// import { styles } from "./styles";
// style={styles.loader}

// return loading ? (
//   <View>
//     <ActivityIndicator />
//   </View>
// ) : (

export const Schedule = ({ data }) => {
  return <EventList data={data} />;
};
