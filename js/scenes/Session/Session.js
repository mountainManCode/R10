//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Platform, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// import { EventList } from "../../components/EventList";
import { formatUnixDate } from "../../config/helpers";
import { goToSpeaker } from "../../config/navigationHelpers";
import { createFave } from "../../config/models";
import { styles } from "./styles";

const Session = ({ session, speaker, faves }) => {
  const heartFaves = Object.keys(faves).map(key => {
    return faves[key].id;
  });
  return (
    <View style={styles.container}>
      <Text style={styles.subText}>{session.location}</Text>
      {/* <TouchableOpacity
        onPress={() => {
          createFave(session.session_id);
        }}
      > */}

      {Platform.OS === "android" && heartFaves.includes(session.session_id) ? (
        <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
      ) : (
        <View />
      )}
      {Platform.OS === "ios" && heartFaves.includes(session.session_id) ? (
        <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
      ) : (
        <View />
      )}
      {/* </TouchableOpacity> */}
      <Text style={styles.header}>{session.title}</Text>
      <Text style={styles.time}>{formatUnixDate(session.start_time)}</Text>
      <Text style={styles.text}>{session.description}</Text>
      <Text style={styles.subText}>Presented by: </Text>
      <View style={styles.speakerContainer}>
        <TouchableOpacity onPress={() => goToSpeaker("session", speaker)}>
          <Image
            style={styles.speakerImage}
            source={{ uri: `${speaker.image}` }}
          />
          <Text style={styles.speaker}>{speaker.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Session;
