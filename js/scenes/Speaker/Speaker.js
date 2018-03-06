//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, Platform, TouchableOpacity } from "react-native";

// import Icon from "react-native-vector-icons/Ionicons";

import { closeSpeaker } from "../../config/helpers";

import { styles } from "./styles";

// create a component
const Speaker = ({ speaker }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={{ height: 200, width: 200 }}
          source={{ uri: `${speaker.image}` }}
        />
        <Text>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
      </View>
    </View>
  );
};

{
  /* <View>
<TouchableOpacity
  onPress={() => {
    closeSpeaker();
  }}
>
  {Platform.OS === "android" && (
    <Icon style={{ color: "black" }} size={24} name={"md-close"} />
  )}
  {Platform.OS === "ios" && (
    <Icon style={{ color: "black" }} size={24} name={"ios-close"} />
  )}
</TouchableOpacity>
</View> */
}

export default Speaker;
