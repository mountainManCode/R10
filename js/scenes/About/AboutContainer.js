import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import About from "./About";
import { fetchCodeOfConduct } from "../../redux/modules/about";

// create a component
class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchCodeOfConduct());
  }

  static propTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.array,
    isLoading: PropTypes.bool
  };

  render() {
    return <About data={this.props.data} loading={this.props.isLoading} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  data: state.about.codeOfConductData,
  error: state.about.error
});

export default connect(mapStateToProps)(AboutContainer);
