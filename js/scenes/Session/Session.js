//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
// import { styles } from "./styles";
// import { EventList } from "../../components/EventList";
import { formatUnixDate } from "../../config/helpers";

// create a component
const Session = ({ data }) => {
  console.log(data);
  return (
    <View>
      <Text>{data.item.location}</Text>
      <Text>{data.item.title}</Text>
      <Text>{formatUnixDate(data.item.start_time)}</Text>
      <Text>{data.item.description}</Text>
      <Text>{data.item.speaker}</Text>
    </View>
  );
};

export default Session;

// <View style={styles.container}>
// <Text>Session SCENE</Text>
// </View>
