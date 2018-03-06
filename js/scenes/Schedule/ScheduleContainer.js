//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View } from "react-native";
import { connect } from "react-redux";

import Schedule from "./Schedule";
import { fetchSession } from "../../redux/modules/session";
// import { fetchFaves } from "../../redux/modules/faves";
import { formatSessionData } from "../../config/helpers";

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

  favFilter = session => {
    const keys = Object.keys(this.props.faves).map(key => {
      return this.props.faves[key].id;
    });
    return session.reduce((acc, item) => {
      if (keys.includes(item.session_id)) {
        item.isFave = true;
      } else {
        item.isFave = false;
      }
      return acc;
    }, []);
  };

  componentDidMount() {
    this.props.dispatch(fetchSession());
    // this.props.dispatch(fetchFaves());
  }

  render() {
    return (
      <Schedule
        data={formatSessionData(this.favFilter(this.props.data))}
        loading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.session.isLoading,
  data: state.session.sessionData,
  error: state.session.error,
  faves: state.faves.faves
  // favesError: state.faves.error
});

export default connect(mapStateToProps)(ScheduleContainer);
