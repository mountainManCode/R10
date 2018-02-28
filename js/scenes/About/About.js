//import libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";

import { styles } from "./styles";

// create a component
const About = ({ data, loading }) => {
  // console.log(data);
  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.heroBanner}>
        <Image source={require("../../assets/images/r10_logo.png")} />
      </View>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.text}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={styles.header}>Date & Venue</Text>
          <Text style={styles.text}>
            The R10 conference will take place on Tuesday, June 27, 2018 in
            Vacouver, B.C.
          </Text>
          <Text style={styles.header}>Code of Conduct</Text>

          {data.map((item, index) => (
            <View key={index} style={styles.text}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          ))}
          {/* <Text>ABOUT SCENE</Text> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
