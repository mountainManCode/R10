import React from "react";
// import PropTypes from "prop-types";
import { View, Text, ActivityIndicator } from "react-native";

import { EventList } from "../../components/EventList";

// import { styles } from "./styles";
// style={styles.loader}

const Schedule = ({ data, loading }) => {
  return !loading ? <EventList data={data} /> : <ActivityIndicator />;
};

export default Schedule;
