import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { AppRegistry } from "react-native";
import { connect } from "react-redux";

import About from "./About";
import { fetchCodeOfConduct } from "../../redux/modules/about";

// create a component
class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchCodeOfConduct());
  }

  render() {
    // console.log(this.props.data);
    return (
      <About
        data={this.props.data}
        loading={this.props.isLoading}
        error={this.props.error}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  data: state.about.codeOfConductData,
  error: state.about.error
});

// Makes this component available to the app
// AppRegistry.registerComponent("about", () => App);
export default connect(mapStateToProps)(AboutContainer);
