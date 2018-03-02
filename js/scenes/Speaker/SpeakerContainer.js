//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';
// import { connect } from "react-redux";
// import fetchSpeaker from "../../redux/modules/speaker";

import Speaker from "./Speaker";

// create a component
class SpeakerContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // componentDidMount() {
  //   this.props.dispatch(fetchSpeaker());
  // }
  // this.props.route.params.speakerData
  // console.log(this.props.route.params.speakerData);
  // return <Speaker data={this.props.route.params.speakerData} />;

  render() {
    console.log(this.props.route.params.speakerData);
    return <Speaker />;
  }
}
// return <Speaker dataSpeaker={this.props.route.params.speakerData} />;

// const mapStateToProps = state => ({
//   isLoading: state.speaker.isLoading,
//   data: state.speaker.sessionData,
//   error: state.speaker.error
// });

//make this component available to the app
// export default connect(mapStateToProps)(SpeakerContainer);
export default SpeakerContainer;
