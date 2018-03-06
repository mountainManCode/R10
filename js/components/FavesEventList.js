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

export const FavesEventList = ({ data }) => {
  // console.log(data);
  return (
    <View>
      <SectionList
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => goToSession("faves", item)}>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </TouchableOpacity>
            {Platform.OS === "android" && (
              <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
            )}
            {Platform.OS === "ios" && (
              <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
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
