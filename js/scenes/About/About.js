//import libraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";

import { styles } from "./styles";
import CodeOfConduct from "./CodeOfConduct";
// import { data, loading } from "./AboutContainer";

class About extends Component {
  // constructor() {
  //   super();
  //   if (Platform.OS === "android") {
  //     UIManager.setLayoutAnimationEnabledExperimental &&
  //       UIManager.setLayoutAnimationEnabledExperimental(true);
  //   }
  //   this.state = {
  //     show: false
  //   };
  // }

  // onPress = () => {
  //   // LayoutAnimation.easeInEaseOut();
  //   this.setState({ show: !this.state.show });
  // };

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

export default About;
