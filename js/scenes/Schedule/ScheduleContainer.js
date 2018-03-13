//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Schedule from "./Schedule";
import { fetchSession } from "../../redux/modules/session";
import { fetchFaves } from "../../redux/modules/faves";
import { formatSessionData } from "../../config/helpers";

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchSession());
    this.props.dispatch(fetchFaves());
  }

  static propTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.array,
    faves: PropTypes.object,
    isLoading: PropTypes.bool
  };

  render() {
    return (
      <Schedule
        data={formatSessionData(this.props.data)}
        faves={this.props.faves}
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
});

export default connect(mapStateToProps)(ScheduleContainer);
