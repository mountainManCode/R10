//import liraries
import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { AppRegistry } from "react-native";

import About from "./About";

// create a component
class AboutContainer extends Component {
  constructor() {
    super();
    this.state = { data: [], isLoading: false };
  }

  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data, isloading: false }))
      .catch(err => console.log(err));
  }
  //Fetch data  Loading: false

  render() {
    // console.log(this.state.data);
    // const { isLoading, data} =this.state;
    // if (isLoading && !data) ? (
    // <Loader />
    // ) : (
    return <About data={this.state.data} />;
    // )
  }
}
// loading={this.state.loading}
//make this component available to the app
AppRegistry.registerComponent("about", () => App);
export default AboutContainer;
