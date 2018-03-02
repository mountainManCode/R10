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

// onPress = () => {
//   this.setState({
//     count: this.state.count + 1
//   });
// };

export const EventList = ({ data }) => {
  // console.log(data);
  return (
    <View>
      <SectionList
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => goToSession("schedule", item)}>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
              {Platform.OS === "android" && (
                <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
              )}
              {Platform.OS === "ios" && (
                <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
              )}
            </TouchableOpacity>
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
