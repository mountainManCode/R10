import React from "react";
// import PropTypes from "prop-types";
import { View, Text, ActivityIndicator } from "react-native";

import { EventList } from "../../components/EventList";

// import { styles } from "./styles";
// style={styles.loader}

// return loading ? (
//   <View>
//     <ActivityIndicator />
//   </View>
// ) : (

const Schedule = ({ data, loading }) => {
  return !loading ? <EventList data={data} /> : <ActivityIndicator />;
};

// const Schedule = ({ data, loading }) => {
//   return !loading ? EventList(data) : <Text>loading...</Text>;
// };
export default Schedule;
