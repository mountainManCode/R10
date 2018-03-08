import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View } from "react-native";
import { connect } from "react-redux";
import NavigationBar from "react-native-navbar";

import { fetchFaves } from "../../redux/modules/faves";
import { fetchSpeaker } from "../../redux/modules/speaker";
import Session from "./Session";

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: "Session"
    }
  };
  componentDidMount() {
    this.props.dispatch(
      fetchSpeaker(this.props.route.params.sessionData.speaker)
    );
    this.props.dispatch(fetchFaves());
  }

  render() {
    return (
      <View>
        <Session
          session={this.props.route.params.sessionData}
          speaker={this.props.speakerData}
          faves={this.props.faves}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speaker.isLoading,
  speakerData: state.speaker.speakerData,
  error: state.speaker.error,
  faves: state.faves.faves
});

export default connect(mapStateToProps)(SessionContainer);
