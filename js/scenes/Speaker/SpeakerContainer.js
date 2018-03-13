//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
// import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
// import NavigationBar from "react-native-navbar";

import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static propTypes = {
    speakerData: PropTypes.object
  };

  static route = {
    navigationBar: {
      title: "About the Speaker"
    }
  };

  render() {
    return <Speaker speaker={this.props.speakerData} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.speaker.isLoading,
  speakerData: state.speaker.speakerData,
  error: state.speaker.error
});

export default connect(mapStateToProps)(SpeakerContainer);
