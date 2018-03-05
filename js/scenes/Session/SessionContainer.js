import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
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
  // this.props.route.params.speakerData
  // return <Session dataSession={this.props.route.params.sessionData} />;

  render() {
    // console.log(this.props.route.params.sessionData.speaker);
    console.log(this.props.speakerData);
    console.log(this.props.route.params.sessionData);
    return (
      <Session
        session={this.props.route.params.sessionData}
        speaker={this.props.speakerData}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speaker.isLoading,
  speakerData: state.speaker.speakerData,
  error: state.speaker.error
});

//make this component available to the app
export default connect(mapStateToProps)(SessionContainer);
// export default SessionContainer;
