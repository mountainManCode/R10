import React from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList, ListItem, Header } from "react-native";

// import { styles } from "./styles";

// create a component
export const EventList = ({ data }) => {
  console.log(data);
  return (
    <View>
      <SectionList
        renderItem={({ item }) => (
          <View>
            <Text>title={item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index}
        renderSectionHeader={({ section }) => (
          <Text>title={section.title}</Text>
        )}
        sections={data}
      />
    </View>
  );
};
