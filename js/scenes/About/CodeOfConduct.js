//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Animated,
  LayoutAnimation,
  TouchableHighlight,
  Platform,
  UIManager
} from "react-native";

import { styles } from "./styles";

// const CodeOfConduct = ({ item, show, index }) => {
class CodeOfConduct extends Component {
  constructor() {
    super();
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      show: false
    };
    this._onPress = this._onPress.bind(this);
  }

  _onPress = () => {
    // LayoutAnimation.easeInEaseOut();
    this.setState({ show: !this.state.show });
  };

  render() {
    const { item } = this.props;
    return (
      <View key={item.title}>
        <TouchableHighlight onPress={this._onPress}>
          <Text>{item.title}</Text>
        </TouchableHighlight>
        {this.state.show && (
          <Animated.Text style={{ marginRight: 10, marginLeft: 10 }}>
            {item.description}
          </Animated.Text>
        )}
      </View>
    );
  }
}
// {this.state.opened ? "- " : "+ "}
// CodeOfConduct.propTypes = {
//   show: PropTypes.bool,
//   text: PropTypes.string
// };
export default CodeOfConduct;
