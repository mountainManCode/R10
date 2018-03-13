import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native";

import { EventList } from "../../components/EventList";

// import { styles } from "../../components/styles";
// style={styles.loader}

const Schedule = ({ data, loading, faves }) => {
  return !loading ? (
    <EventList data={data} faves={faves} />
  ) : (
    <ActivityIndicator />
  );
};

Schedule.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  faves: PropTypes.object
};

export default Schedule;
