import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { formatUnixDate } from "../config/helpers";
import { goToSession } from "../config/navigationHelpers";
import { styles } from "./styles";

export const FavesEventList = ({ data }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item }) => (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => goToSession("faves", item)}>
              <Text tyle={styles.title}>{item.title}</Text>
              <Text>{item.location}</Text>
            </TouchableOpacity>
            <View style={styles.locationHeartWrapper}>
              <Text style={styles.subText}>{item.location}</Text>

              {Platform.OS === "android" && (
                <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
              )}
              {Platform.OS === "ios" && (
                <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
              )}
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
        renderSectionHeader={({ section }) => (
          <View style={styles.timeContainer}>
            <Text>{formatUnixDate(section.title)}</Text>
          </View>
        )}
        sections={data}
      />
    </View>
  );
};

FavesEventList.propTypes = {
  data: PropTypes.array
};
