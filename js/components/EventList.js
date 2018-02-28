import React from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList, ListItem, Header } from "react-native";
import { formatUnixDate } from "../config/helpers";
// import { styles } from "./styles";

// create a component
export const EventList = ({ data }) => {
  console.log(data);
  return (
    <View>
      <SectionList
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
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
