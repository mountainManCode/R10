//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// import { styles } from "./styles";
// import { EventList } from "../../components/EventList";
import { formatUnixDate } from "../../config/helpers";
import { goToSpeaker } from "../../config/navigationHelpers";
import { createFave } from "../../config/models";

// create a component
const Session = ({ session, speaker }) => {
  return (
    <View>
      <Text>{session.location}</Text>
      <TouchableOpacity
        onPress={() => {
          createFave(session.session_id);
        }}
      >
        {Platform.OS === "android" && (
          <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
        )}
        {Platform.OS === "ios" && (
          <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
        )}
      </TouchableOpacity>
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
