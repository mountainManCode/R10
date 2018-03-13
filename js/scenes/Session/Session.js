import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { formatUnixDate } from "../../config/helpers";
import { goToSpeaker } from "../../config/navigationHelpers";
import realm, { createFave, deleteFave } from "../../config/models";
import { styles } from "./styles";

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

  static propTypes = {
    dispatch: PropTypes.func,
    route: PropTypes.object,
    speakerData: PropTypes.array,
    sessionData: PropTypes.object,
    faves: PropTypes.object
  };

  render() {
    const { session, speaker, faves } = this.props;

    const heartFaves = Object.keys(faves).map(key => {
      return faves[key].id;
    });
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.locationHeartWrapper}>
            <Text style={styles.subText}>{session.location}</Text>

            {Platform.OS === "android" &&
            this.heartFaves.includes(session.session_id) ? (
              <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
            ) : (
              <View />
            )}
            {Platform.OS === "ios" &&
            heartFaves.includes(session.session_id) ? (
              <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
            ) : (
              <View />
            )}
          </View>
          <Text style={styles.header}>{session.title}</Text>
          <Text style={styles.time}>{formatUnixDate(session.start_time)}</Text>
          <Text style={styles.text}>{session.description}</Text>
          <Text style={styles.subText}>Presented by: </Text>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => goToSpeaker("session", speaker)}>
              <View style={styles.speakerContainer}>
                <Image
                  style={styles.speakerImage}
                  source={speaker.image ? { uri: `${speaker.image}` } : null}
                />

                <Text style={styles.speaker}>{speaker.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            {heartFaves.includes(session.session_id) ? (
              <Button
                onPress={() => {
                  deleteFave(session.session_id);
                }}
                title="Remove from favorites!"
                color="#841584"
                accessibilityLabel="Remove from favorites"
              />
            ) : (
              <Button
                onPress={() => {
                  createFave(session.session_id);
                }}
                title="Add to favorites!"
                color="#841584"
                accessibilityLabel="Add to favorites"
              />
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

Session.propTypes = {
  speakerData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  session: PropTypes.object,
  faves: PropTypes.object
};

export default Session;
