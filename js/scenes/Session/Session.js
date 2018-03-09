//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// import { EventList } from "../../components/EventList";
import { formatUnixDate } from "../../config/helpers";
import { goToSpeaker } from "../../config/navigationHelpers";
import realm, { createFave, deleteFave } from "../../config/models";
import { styles } from "./styles";

// ({ session, speaker, faves }) =>
class Session extends Component {
  componentWillMount() {
    realm.addListener("change", () => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    realm.removeListener("change", () => {
      this.forceUpdate();
    });
  }

  render() {
    const { session, speaker, faves } = this.props;

    const heartFaves = Object.keys(faves).map(key => {
      return faves[key].id;
    });
    return (
      <View style={styles.container}>
        <Text style={styles.subText}>{session.location}</Text>

        {Platform.OS === "android" &&
        this.heartFaves.includes(session.session_id) ? (
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
            {styles.speakerImage && (
              <Image
                style={styles.speakerImage}
                source={{ uri: `${speaker.image}` }}
              />
            )}
            <Text style={styles.speaker}>{speaker.name}</Text>
          </TouchableOpacity>

          {heartFaves.includes(session.session_id) ? (
            <Button
              onPress={() => {
                deleteFave(session.session_id);
              }}
              title="Remove from favorites!"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          ) : (
            <Button
              onPress={() => {
                createFave(session.session_id);
              }}
              title="Add to favorites!"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          )}
        </View>
      </View>
    );
  }
}
export default Session;
