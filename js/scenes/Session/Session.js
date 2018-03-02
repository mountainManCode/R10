//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
// import { styles } from "./styles";
// import { EventList } from "../../components/EventList";
import { formatUnixDate } from "../../config/helpers";
import { goToSpeaker } from "../../config/navigationHelpers";

// create a component
const Session = ({ dataSession, dataSpeaker }) => {
  console.log({ dataSpeaker });
  return (
    <View>
      <Text>{dataSession.location}</Text>
      <Text>{dataSession.title}</Text>
      <Text>{formatUnixDate(dataSession.start_time)}</Text>
      <Text>{dataSession.description}</Text>
      <TouchableOpacity onPress={() => goToSpeaker("session", dataSpeaker)}>
        <Text>{dataSession.speaker}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;

// <View style={styles.container}>
// <Text>Session SCENE</Text>
// </View>
