//import liraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { View } from "react-native";

import Faves from "./Faves";

import { fetchFaves } from "../../redux/modules/faves";
import { fetchSession } from "../../redux/modules/session";
import { formatSessionData } from "../../config/helpers";

class FavesContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fetchFaves());
    this.props.dispatch(fetchSession());
  }

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  favFilter = session => {
    const keys = Object.keys(this.props.faves).map(key => {
      return this.props.faves[key].id;
    });
    return session.reduce((acc, item) => {
      if (keys.includes(item.session_id)) {
        item.isFave = true;
        acc.push(item);
      } else {
        item.isFave = false;
      }
      return acc;
    }, []);
  };

  render() {
    return (
      <View>
        <Faves
          data={formatSessionData(this.favFilter(this.props.sessionData))}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  faves: state.faves.faves,
  favesError: state.faves.error,
  sessionIsLoading: state.session.isLoading,
  sessionData: state.session.sessionData,
  sessionError: state.session.error
});

FavesContainer.propTypes = {
  dispatch: PropTypes.func,
  sessionData: PropTypes.array,
  faves: PropTypes.object
};

export default connect(mapStateToProps)(FavesContainer);
