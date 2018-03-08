import React from "react";
// import PropTypes from "prop-types";
import {
  View,
  Text,
  SectionList,
  ListItem,
  Header,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { formatUnixDate } from "../config/helpers";
import { goToSession } from "../config/navigationHelpers";
// import { styles } from "./styles";

export const EventList = ({ data, faves }) => {
  const heartFaves = Object.keys(faves).map(key => {
    return faves[key].id;
  });
  return (
    <View>
      <SectionList
        renderItem={({ item, faves, data }) => (
          <View>
            <TouchableOpacity onPress={() => goToSession("schedule", item)}>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </TouchableOpacity>

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
        )}
        keyExtractor={(item, index) => index}
        renderSectionHeader={({ section }) => (
          <Text>{formatUnixDate(section.title)}</Text>
        )}
        sections={data}
      />
    </View>
  );
};
