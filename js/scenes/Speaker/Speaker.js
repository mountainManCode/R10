//import liraries
import React from "react";
import PropTypes from "prop-types";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
  Linking
} from "react-native";

import { styles } from "./styles";

const Speaker = ({ speaker }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={speaker.image ? { uri: `${speaker.image}` } : null}
          />
        </View>
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.description}>{speaker.bio}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => Linking.openURL(speaker.url)}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Read More On Wikipedia</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};
Speaker.propTypes = {
  speaker: PropTypes.array
};

export default Speaker;
