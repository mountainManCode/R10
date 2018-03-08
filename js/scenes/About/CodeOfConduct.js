//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Animated,
  TouchableHighlight,
  Platform,
  UIManager
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

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
    this.setState({ show: !this.state.show });
  };

  render() {
    const { item } = this.props;
    return (
      <View key={item.title}>
        <TouchableHighlight onPress={this._onPress}>
          <View style={styles.titleContainer}>
            {Platform.OS === "android" &&
              (this.state.show ? (
                <Icon style={{ color: "grey" }} size={20} name={"md-add"} />
              ) : (
                <Icon style={{ color: "grey" }} size={20} name={"md-remove"} />
              ))}
            {Platform.OS === "ios" &&
              (item.isFave ? (
                <Icon
                  style={{ color: "grey" }}
                  size={20}
                  name={"ios-add-outline"}
                />
              ) : (
                <Icon
                  style={{ color: "grey" }}
                  size={20}
                  name={"ios-add-outline"}
                />
              ))}
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableHighlight>

        {this.state.show && (
          <Animated.Text style={styles.text}>{item.description}</Animated.Text>
        )}
      </View>
    );
  }
}

CodeOfConduct.propTypes = {
  item: PropTypes.object
};
export default CodeOfConduct;
