import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, SectionList, ListItem } from "react-native";

// import { styles } from "./styles";

// create a component
export const EventList = ({ data }) => {
  console.log(data);
  <View>
    <SectionList
      renderItem={({ item }) => (
        <View>
          <Text> title={item.title} </Text> <Text>{item.location}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => <Header title={section.title} />}
      sections={data}
    />
  </View>;
};
