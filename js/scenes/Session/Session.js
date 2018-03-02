//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
// import { styles } from "./styles";
// import { EventList } from "../../components/EventList";
import { formatUnixDate } from "../../config/helpers";
import { goToSpeaker } from "../../config/navigationHelpers";

// create a component
const Session = ({ session, speaker }) => {
  console.log({ speaker });
  return (
    <View>
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{formatUnixDate(session.start_time)}</Text>
      <Text>{session.description}</Text>
      <TouchableOpacity onPress={() => goToSpeaker("session", speaker)}>
        <Text>{speaker.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;

// <View style={styles.container}>
// <Text>Session SCENE</Text>
// </View>
