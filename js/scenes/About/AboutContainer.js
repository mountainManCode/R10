//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { View, Text, StyleSheet } from 'react-native';

import About from "./About";

// create a component
class AboutContainer extends Component {
  constructor() {
    super();
    this.state = { data: []};
  }

  componentDidMount() {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }
  //Fetch data  Loading: false

  render() {
    console.log(this.state.data);

    return <About data={this.state.data} />;
  }
}
// loading={this.state.loading}
//make this component available to the app
export default AboutContainer;
