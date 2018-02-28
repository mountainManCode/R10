import React from "react";
// import PropTypes from "prop-types";
import {
  View,
  Text,
  SectionList,
  ListItem,
  Header,
  TouchableOpacity
} from "react-native";
import { formatUnixDate } from "../config/helpers";
import { goToSession } from "../config/navigationHelpers";
// import { styles } from "./styles";

// onPress = () => {
//   this.setState({
//     count: this.state.count + 1
//   });
// };

export const EventList = ({ data }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => goToSession("schedule", { data })}>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
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
