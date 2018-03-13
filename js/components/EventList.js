import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { formatUnixDate } from "../config/helpers";
import { goToSession } from "../config/navigationHelpers";
import { styles } from "./styles";

export const EventList = ({ data, faves }) => {
  const heartFaves = Object.keys(faves).map(key => {
    return faves[key].id;
  });
  return (
    <View>
      <SectionList
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => goToSession("schedule", item)}>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
            <View style={styles.locationHeartWrapper}>
              <Text style={styles.subText}>{item.location}</Text>

              {Platform.OS === "android" &&
              heartFaves.includes(item.session_id) ? (
                <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
              ) : (
                <View />
              )}
              {Platform.OS === "ios" && heartFaves.includes(item.session_id) ? (
                <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
              ) : (
                <View />
              )}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
        renderSectionHeader={({ section }) => (
          <View style={styles.timeContainer}>
            <Text>{formatUnixDate(section.title)}</Text>
          </View>
        )}
        sections={data}
      />
    </View>
  );
};

EventList.propTypes = {
  data: PropTypes.array,
  faves: PropTypes.object
};
