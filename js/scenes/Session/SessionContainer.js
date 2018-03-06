import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View } from "react-native";
import { connect } from "react-redux";
import NavigationBar from "react-native-navbar";

import { fetchSpeaker } from "../../redux/modules/speaker";
import Session from "./Session";

class SessionContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  // }

  componentDidMount() {
    this.props.dispatch(
      fetchSpeaker(this.props.route.params.sessionData.speaker)
    );
  }

  render() {
    const backButtonConfig = {
      title: "Back",
      handler: () => this.props.navigator.pop()
    };

    const titleConfig = {
      title: "Session"
    };
    return (
      <View>
        <NavigationBar title={titleConfig} leftButton={backButtonConfig} />

        <Session
          session={this.props.route.params.sessionData}
          speaker={this.props.speakerData}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speaker.isLoading,
  speakerData: state.speaker.speakerData,
  error: state.speaker.error
});

export default connect(mapStateToProps)(SessionContainer);
