//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

import { EventList } from "../../components/EventList";

import { styles } from "./styles";

// create a component
const Faves = (faves, sessions) => {
  // let sessionFaves = sessions.filter(
  //   session => favesData.includes(session.session_id)
  //   // session.data.session_id === favesData
  // );
  // const favesSesssions = sessions.filter(
  //   session => faves[session.session_id] === "true"
  // );

  // console.log(sessons);
  // console.log(faveSessions);

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

export default Faves;
