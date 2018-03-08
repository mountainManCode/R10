//import libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";

import CodeOfConduct from "./CodeOfConduct";

import { styles } from "./styles";

class About extends Component {
  render() {
    // console.log(this.props.data);
    return this.props.loading ? (
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
              R10 is a conference that focuses on just about any topic related
              to dev.
            </Text>
            <Text style={styles.header}>Date & Venue</Text>
            <Text style={styles.text}>
              The R10 conference will take place on Tuesday, June 27, 2018 in
              Vacouver, B.C.
            </Text>
            <Text style={styles.header}>Code of Conduct</Text>
            <View>
              {this.props.data.map((item, index) => (
                <CodeOfConduct item={item} key={index} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

About.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array
};

export default About;
