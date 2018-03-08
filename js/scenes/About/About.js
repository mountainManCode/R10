//import libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableHighlight,
  LayoutAnimation
} from "react-native";

import { styles } from "./styles";
import CodeOfConduct from "../../components/CodeOfConduct";
// import { data, loading } from "./AboutContainer";

class About extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  onPress = () => {
    // LayoutAnimation.easeInEaseOut();
    this.setState({ show: true });
  };
  // _startAnimation() {
  //   Animated.parallel([
  //     Animated.
  //   ])
  // }

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

            {this.props.data.map((item, index) => (
              <View key={index} style={styles.text}>
                <TouchableHighlight onPress={this.onPress}>
                  <Text style={styles.title}>{item.title}</Text>
                </TouchableHighlight>

                <View>
                  <CodeOfConduct item={item} show={this.state.show} />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default About;
