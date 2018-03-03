//import liraries
import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import Faves from "./Faves";

import { fetchFaves } from "../../redux/modules/faves";
// import { queryFaves } from "../../config/models";

// create a component
class FavesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fetchFaves());
  }

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  render() {
    console.log(this.props.faves);
    return <Faves />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.faves.isLoading,
  faves: state.faves.faves,
  error: state.faves.error
});

//make this component available to the app
// export default FavesContainer;

export default connect(mapStateToProps)(FavesContainer);
