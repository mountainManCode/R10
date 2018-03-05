//import liraries
import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import Faves from "./Faves";

import { fetchFaves } from "../../redux/modules/faves";
// import { fetchSession } from "../../redux/modules/session";

class FavesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fetchFaves());
    // this.props.dispatch(fetchSession());
  }

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  render() {
    // const favesData = Object.values(this.props.faves);
    // let sessionFaves = this.props.data.filter(
    //   session => session.session_id.some(faves => favesData.includes(faves))
    //   // favesData.includes(session.data.session_id)
    //   // session => session.session_id === favesData.faves_id
    // );

    // const sessionFaves = this.props.sessionData.filter(
    //   session => this.props.faves[session.session_id] === "faves_id"
    // );

    // const faves = this.props.faves;
    // // const sessions = this.props.data;
    // console.log(sessionFaves);

    console.log(this.props.sessionData);
    // console.log(this.props.data.session_id);

    return <Faves />;
  }
}
// faves={this.props.faves} sessions={this.props.data}

const mapStateToProps = state => ({
  faves: state.faves.faves,
  favesError: state.faves.error,
  sessionIsLoading: state.session.isLoading,
  sessionData: state.session.sessionData,
  sessionError: state.session.error
});

//make this component available to the app
// export default FavesContainer;

export default connect(mapStateToProps)(FavesContainer);
