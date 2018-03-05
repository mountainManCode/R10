//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View } from "react-native";
import { connect } from "react-redux";

import Schedule from "./Schedule";
import { fetchSession } from "../../redux/modules/session";
import { fetchFaves } from "../../redux/modules/faves";

// create a component
class ScheduleContainer extends Component {
  // constructor() {
  //   super();
  // }

  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSession());
    // this.props.dispatch(fetchFaves());
  }

  render() {
    return <Schedule data={this.props.data} loading={this.props.isLoading} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.session.isLoading,
  data: state.session.sessionData,
  error: state.session.error
  // faves: state.faves.faves,
  // favesError: state.faves.error
});

export default connect(mapStateToProps)(ScheduleContainer);
