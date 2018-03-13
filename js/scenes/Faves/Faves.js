//import liraries
import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import { FavesEventList } from "../../components/FavesEventList";

import { styles } from "./styles";

// create a component
const Faves = ({ data }) => {
  return (
    <View style={styles.container}>
      <FavesEventList data={data} />
    </View>
  );
};
Faves.propTypes = {
  data: PropTypes.array
};

export default Faves;
