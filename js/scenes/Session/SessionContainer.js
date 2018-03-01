//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';
// import { connect } from "react-redux";
import Session from "./Session";

// componentDidMount() {
//   this.props.dispatch(fetchSpeaker(this.props.route.params.speakerData))
// };
class SessionContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // return <Session dataSession={this.props.route.params.sessionData} dataSpeaker={this.props.speakerData} />;

  render() {
    // console.log(this.props.route.params.sessionData);
    return <Session />;
  }
}

// const mapStateToProps = state => ({
//   isLoading: state.speaker.isLoading,
//   data: state.speaker.sessionData,
//   error: state.speaker.error
// });

//make this component available to the app
// export default connect(mapsStateToProps)(SessionContainer);
export default SessionContainer;
