//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View } from "react-native";
import { connect } from "react-redux";

import Schedule from "./Schedule";
import { fetchSession } from "../../redux/modules/session";

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
  }

  render() {
    return <Schedule data={this.props.data} loading={this.props.isLoading} />;
    // console.log(this.props.data);
  }
}

const mapStateToProps = state => ({
  isLoading: state.session.isLoading,
  data: state.session.sessionData,
  error: state.session.error
});

export default connect(mapStateToProps)(ScheduleContainer);
